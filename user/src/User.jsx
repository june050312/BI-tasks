import React from "react";
import UserList from "./UserList";
import Register from "./Register";
import "./style.css"

function User() {
    return (
        <div className='body'>
            <Register />
            <UserList />
        </div>
    )
}

export default User