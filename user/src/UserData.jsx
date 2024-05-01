import React from "react";
import { Link } from "react-router-dom"
import "./style.css"

function UserData() {
    return (
        <div className="userdata-container">
            <h1>username</h1>
            <div>username</div>
            <div>email</div>
            <div>password</div>
            <div>age</div>
            <div>createdAt</div>
            <Link to="/user">뒤로가기</Link>
        </div>
    )
}

export default UserData;