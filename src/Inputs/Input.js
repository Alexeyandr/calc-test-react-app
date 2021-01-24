import React from "react";
import "./Inputs.sass";


export default function Input({name = 'Название', onChange}) {

    return (
        <div>
            <div className="subheader" style={{paddingBottom: '5px'}}>{name}</div>
            <input type="text" className="input" onChange={onChange} />
        </div>
    );
}