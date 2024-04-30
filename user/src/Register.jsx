import "./style.css"
import React, { useState } from "react";

function Register() {
    const [ name, setName ] = useState({ name: "" })
    const [ email, setEmail ] = useState({ email: "" })
    const [ password, setPassword ] = useState({ password: "" })
    const [ age, setAge ] = useState({ age: "" })

    const onSubmit = () => {
        const value = {
            name: name.name,
            email: email.email,
            password: password.password,
            age: age.age
        }

        fetch("http://localhost:4000/", {
            method: "post",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(value),
        });
    }

    return (
        <div className="divide">
            <div className="container" id="register">
                <div className="title">회원가입</div>
                <form onSubmit={ onSubmit } className="register-form">
                    <input name="name"  type="text" placeholder="이름" onChange={ (value) => setName({ [ value.target.name ]: value.target.name }) }/>
                    <input name="email"  type="email" placeholder="이메일" onChange={ (value) => setEmail({ [ value.target.email ]: value.target.email }) }/>
                    <input name="password"  type="password" placeholder="비밀번호" onChange={ (value) => setPassword({ [ value.target.password ]: value.target.password }) }/>
                    <input name="age"  type="text" placeholder="나이" onChange={ (value) => setAge({ [ value.target.age ]: value.target.age }) }/>
                    <button>확인</button>
                </form>
            </div>
        </div>
    )
}

export default Register;