import React from "react";
import "./Users.sass";

export default function UserItem({id, name, sum, isSelf}) {
    return (
        <div className="user-item">
            <div className="name">{name}</div>
            <div className="sum">{sum}</div>
            {isSelf && 
                <div className="self-figure"></div>
            }
        </div>
    );
}