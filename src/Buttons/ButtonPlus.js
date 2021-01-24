import React from "react";
import "./Buttons.sass";
import icPlus from "../img/ic_plus.svg";

export default function ButtonPlus({onClick}) {
    
    return (
        <button className="button button-plus" onClick={onClick}>
            <img src={icPlus} alt="ic plus" />
        </button>
    );
}