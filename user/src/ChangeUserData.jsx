import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"
import "./style.css"

function ChangeUserData() {
    const params = useParams();
    const userName = params.name;

    const [ username, setName ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ age, setAge ] = useState("")

    const [ DB, setDB ] = useState([]);

    let date = new Date()

    const onSubmit = () => {
        const userData = {
            name: username,
            email: email,
            password: password,
            age: age,
            createdAt: date.getTime()
        }

        fetch(`http://localhost:4000/user/${userName}`, {
            method: "put", 
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(userData),
        })
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
    
    useEffect(() => {
        fetchDB();
    }, []);

    const fetchDB = async () => {
        const res = await fetch(`http://localhost:4000/user/${userName}`, { method: 'GET' });
        const resDB = await res.json();
        setDB(resDB);
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
                <div className="modify-form">
                    {DB.map(data => (
                        <>
                            <input type="text" defaultValue={ userName } onChange={ (e) => { setName(e.target.value) } }/>
                            <input type="text" defaultValue={ data.email } onChange={ (e) => { setEmail(e.target.value) } }/>
                            <input type="text" defaultValue={ data.password } onChange={ (e) => { setPassword(e.target.value) } }/>
                            <input type="text" defaultValue={ data.age } onChange={ (e) => { setAge(e.target.value) } }/>
                            <div>{ data.createdAt }</div>
                        </>
                    ))}
                </div>
            </div>
            <div className="navigator">
                <Link to={`/user/${userName}`}>뒤로가기</Link>
                <Link to="/user" onClick={ onSubmit }>변경하기</Link>
                <Link to="/user" onClick={ onDelete }>삭제하기</Link>
            </div>
        </div>
    )
}

export default ChangeUserData;