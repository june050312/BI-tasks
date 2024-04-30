import "./style.css"
import React from "react"

function User() {
    return (
        <div className="divide">
            <div className="container" id="user">
                <div className="title">유저</div>
                <div className="user">
                    <a href="/">{}</a>
                    <div className="user-value">
                        <button>수정</button>
                        <button>삭제</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User;