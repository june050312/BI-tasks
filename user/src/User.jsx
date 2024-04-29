import "./style.css"
import React from "react"

function User() {
    return (
        <div className="divide">
            <div className="container" id="user">
                <div className="title">유저</div>
                <div className="user">
                    <div>아이디</div>
                    <form action="" className="user-value">
                        <button>수정</button>
                        <button>삭제</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default User;