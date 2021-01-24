import React from "react";
import "./Buttons.sass";
import icCopy from "../img/ic_copy.svg";

export default function ButtonCopy({onClick}) {
    
    return (
        <button className="button button-copy" onClick={onClick}>
            <img src={icCopy} alt="ic copy" />
        </button>
    );
}