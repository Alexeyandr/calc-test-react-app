import React from "react";
import "./Buttons.sass";

export default function ButtonBigLight({name, onClick}) {
    
    return (
        <button className="button button-big-light" onClick={onClick}>{name}</button>
    );
}