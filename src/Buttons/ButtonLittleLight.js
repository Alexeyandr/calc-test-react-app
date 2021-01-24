import React from "react";
import "./Buttons.sass";

export default function ButtonLittleLight({name, onClick}) {
    
    return (
        <button className="button button-little-light" onClick={onClick}>{name}</button>
    );
}