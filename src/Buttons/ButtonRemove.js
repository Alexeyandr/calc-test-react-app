import React from "react";
import "./Buttons.sass";
import icRemove from "../img/ic_remove.svg";

export default function ButtonRemove({onClick}) {
    
    return (
        <button className="button button-remove" onClick={onClick}>
            <img src={icRemove} alt="ic plus" />
        </button>
    );
}