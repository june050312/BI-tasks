import "./style.css"
import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

function UserList() {
    const [ DB, setDB ] = useState([])
    
    useEffect(() => {
        fetchDB();
    }, [ DB ]);

    const fetchDB = async () => {
        const res = await fetch("http://localhost:4000/user", { method: 'GET' });
        const resDB = await res.json();
        setDB(resDB);
    }

    return (
        <div className="divide">
            <div className="container" id="user">
                <div className="title">유저</div>
                { 
                    DB.map(data => (
                        <div className="user">
                            <Link to={`/user/${ data.createdAt }`}>{ data.name }</Link>
                            <div className="user-value">
                                <div><Link to={`/user/modify/${ data.createdAt }`}>수정</Link></div>
                            </div>
                        </div>
                    )) 
                }
            </div>
        </div>
    )
}

export default UserList;