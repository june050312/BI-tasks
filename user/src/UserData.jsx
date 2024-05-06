import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"
import "./style.css"

function UserData() {
    const params = useParams();
    const userId = params.id;

    const [ DB, setDB ] = useState([]);
    
    useEffect(() => {
        fetchDB();
    }, []);

    const fetchDB = async () => {
        const res = await fetch(`http://localhost:4000/user/${ userId }`, { method: 'GET' });
        const resDB = await res.json();
        setDB(resDB);
    }

    const onDelete = () => {
        const userData = {
            createdAt: DB.createdAt
        }

        fetch(`http://localhost:4000/user/${ userId }`, {
            method: "delete", 
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(userData),
        })
    }

    return (
        <div className="userdata-container">
            <h1>{ DB.name }</h1>
            <div className="content-container">
                <div>
                    <div>이름</div>
                    <div>이메일</div>
                    <div>비밀번호</div>
                    <div>나이</div>
                    <div>수정시간</div>
                </div>
                <div>
                    <div>:</div>
                    <div>:</div>
                    <div>:</div>
                    <div>:</div>
                    <div>:</div>
                </div>
                <div className="userdata">
                    <div>{ DB.name }</div>
                    <div>{ DB.email }</div>
                    <div>{ DB.password }</div>
                    <div>{ DB.age }</div>
                    <div>{ DB.createdAt }</div>
                </div>
            </div>
            <div className="navigator">
                <Link to="/user">뒤로가기</Link>
                <Link to={`/user/modify/${ userId }`}>수정하기</Link>
                <Link to="/user" onClick={ onDelete }>삭제하기</Link>
            </div>
        </div>
    )
}

export default UserData;