import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"
import "./style.css"

function UserData() {
    const params = useParams();
    const userName = params.name;

    const [ DB, setDB ] = useState([]);

    const [ username, setName ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ age, setAge ] = useState("")

    const date = new Date()
    
    useEffect(() => {
        fetchDB();
    }, [DB]);

    const fetchDB = async () => {
        const res = await fetch(`http://localhost:4000/user/${userName}`, { method: 'GET' });
        const resDB = await res.json();
        setDB(resDB);
    }

    const onDelete = () => {
        const userData = {
            name: username,
            email: email,
            password: password,
            age: age,
            createdAt: date.getTime()
        }

        fetch(`http://localhost:4000/user/${userName}`, {
            method: "delete", 
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(userData),
        })
    }

    return (
        <div className="userdata-container">
            <h1>{ userName }</h1>
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
                            <div>{ userName }</div>
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
                <Link to={`/user/modify/${userName}`}>수정하기</Link>
                <Link to="/user" onClick={ onDelete }>삭제하기</Link>
            </div>
        </div>
    )
}

export default UserData;