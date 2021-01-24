import React from "react";
import "./Buttons.sass";

export default function ButtonBigAccent({name, onClick}) {
    
    return (
        <button className="button button-big-accent" onClick={onClick}>{name}</button>
    );
}