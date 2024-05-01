import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"
import "./style.css"

function UserData() {
    const params = useParams();
    const username = params.name;

    const [ DB, setDB ] = useState([]);
    
    useEffect(() => {
        fetchDB();
    }, []);

    const fetchDB = async () => {
        const res = await fetch(`http://localhost:4000/user/${username}`, { method: 'GET' });
        const resDB = await res.json();
        setDB(resDB);
    }

    return (
        <div className="userdata-container">
            <h1>{ username }</h1>
            <div className="content-container">
                <div>
                    <div>이름</div>
                    <div>이메일</div>
                    <div>비밀번호</div>
                    <div>나이</div>
                    <div>생성시간</div>
                </div>
                <div>
                    <div>:</div>
                    <div>:</div>
                    <div>:</div>
                    <div>:</div>
                    <div>:</div>
                </div>
                <div className="userdata">
                    {DB.map(data => (
                        <>
                            <div>{ username }</div>
                            <div>{ data.email }</div>
                            <div>{ data.password }</div>
                            <div>{ data.age }</div>
                            <div>{ data.createdAt }</div>
                        </>
                    ))}
                </div>
            </div>
            <div className="navigator">
                <Link to="/user">뒤로가기</Link>
                <Link to="/user">수정하기</Link>
                <Link to="/user">삭제하기</Link>
            </div>
        </div>
    )
}

export default UserData;