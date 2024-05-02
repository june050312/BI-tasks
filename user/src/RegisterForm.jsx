import React, { useState } from "react";
import "./style.css"

function RegisterForm() {
    const [ username, setName ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ age, setAge ] = useState("")

    let date = new Date()

    const onSubmit = () => {
        const userData = {
            name: username,
            email: email,
            password: password,
            age: age,
            createdAt: date.getTime()
        }

        fetch("http://localhost:4000/user", {
            method: "post", 
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(userData),
        })

        setName("")
        setEmail("")
        setPassword("")
        setAge("")
    }

    return (
        <div className="register-form">
            <input name="username" type="text" placeholder="이름" value={username} onChange={ (e) => setName(e.target.value) } />
            <input name="email" type="email" placeholder="이메일" value={email} onChange={ (e) => setEmail(e.target.value) } />
            <input name="password" type="password" placeholder="비밀번호" value={password} onChange={ (e) => setPassword(e.target.value) } />
            <input name="age" type="text" placeholder="나이" value={age} onChange={ (e) => setAge(e.target.value) } />
            <button onClick={ onSubmit }>확인</button>
        </div>
    )
}

export default RegisterForm;