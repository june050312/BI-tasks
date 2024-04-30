import "./style.css"
import React, { useState } from "react";

function Register() {
    const [ username, setName ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ age, setAge ] = useState("")

    const onSubmit = () => {
        const userData = {
            userName: username,
            userEmail: email,
            userPassword: password,
            userAge: age
        }

        fetch("http://localhost:4000/user", {
            method: "post", // method :통신방법
            headers: {      // headers: API 응답에 대한 정보를 담음
                "content-type": "application/json",
            },
            body: JSON.stringify(userData), //userData라는 객체를 보냄
        })
    }

    return (
        <div className="divide">
            <div className="container" id="register">
                <div className="title">회원가입</div>
                <div className="register-form">
                    <input name="username" type="text" placeholder="이름" onChange={ (e) => setName({ username: e.target.value }) } />
                    <input name="email" type="email" placeholder="이메일" onChange={ (e) => setEmail({ email: e.target.value }) } />
                    <input name="password" type="password" placeholder="비밀번호" onChange={ (e) => setPassword({ password: e.target.value }) } />
                    <input name="age" type="text" placeholder="나이" onChange={ (e) => setAge({ age: e.target.value }) } />
                    <button onClick={ onSubmit }>확인</button>
                </div>
            </div>
        </div>
    )
}

export default Register;