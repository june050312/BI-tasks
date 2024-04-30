import React from "react";
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
            <a href="/user">뒤로가기</a>
        </div>
    )
}

export default UserData;