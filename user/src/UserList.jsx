import "./style.css"
import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

function UserList() {
    const [DB, setDB] = useState([]);

    useEffect(() => {
        fetchDB();
    }, []);

    const fetchDB = async () => {
        const res = await fetch("/user", { method: 'GET' });
        const resDB = await res.json();
        setDB(resDB);
    }

    return (
        <div className="divide">
            <div className="container" id="user">
                <div className="title">유저</div>
                {DB.map(data => {
                    <div className="user">
                        <Link to="/user">{data.name}</Link>
                        <div className="user-value">
                            <button>수정</button>
                            <button>삭제</button>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default UserList;