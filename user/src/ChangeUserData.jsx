import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"
import "./style.css"

function ChangeUserData() {
    const params = useParams();
    const userId = params.id;

    const [ username, setName ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ age, setAge ] = useState("")

    const [ DB, setDB ] = useState([]);
    
    useEffect(() => {
        fetchDB();
    }, []);

    const fetchDB = async () => {
        const res = await fetch(`http://localhost:4000/user/${ userId }`, { method: 'GET' });
        const resDB = await res.json();
        setDB(resDB);
    }

    const onSubmit = () => {
        const userData = {
            name: username,
            email: email,
            password: password,
            age: age,
            createdAt: DB.createdAt
        }

        fetch(`http://localhost:4000/user/${ userId }`, {
            method: "put", 
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(userData),
        })
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
                    <input type="text" defaultValue={ DB.name } onChange={ (e) => { setName(e.target.value) } }/>
                    <input type="text" defaultValue={ DB.email } onChange={ (e) => { setEmail(e.target.value) } }/>
                    <input type="text" defaultValue={ DB.password } onChange={ (e) => { setPassword(e.target.value) } }/>
                    <input type="text" defaultValue={ DB.age } onChange={ (e) => { setAge(e.target.value) } }/>
                    <div>{ DB.createdAt }</div>
                </div>
            </div>
            <div className="navigator">
                <Link to={`/user/${ userId }`}>뒤로가기</Link>
                <Link to="/user" onClick={ onSubmit }>변경하기</Link>
                <Link to="/user" onClick={ onDelete }>삭제하기</Link>
            </div>
        </div>
    )
}

export default ChangeUserData;