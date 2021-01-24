import React from "react";
import "./Buttons.sass";

export default function ButtonLittleAccent({name, onClick}) {
    
    return (
        <button className="button button-little-accent" onClick={onClick}>{name}</button>
    );
}