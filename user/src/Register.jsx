import "./style.css"
import React from "react";
import RegisterForm from "./RegisterForm";

function Register() {
    return (
        <div className="divide">
            <div className="container" id="register">
                <div className="title">회원가입</div>
                <RegisterForm />
            </div>
        </div>
    )
}

export default Register;