import React from "react";
import ButtonRemove from "../Buttons/ButtonRemove";
import "./Inputs.sass";

export default function UserInput({id, onRemove, onItemChange}) {

    let onChange = function (event) {
        let value = event.target.value;
        onItemChange(id, value);
    };

    return (
        <div className="user-input-wrapper">
            <input type="text" className="input user-input" onChange={onChange} />
            <div className="button-remove-wrapper">
                <ButtonRemove onClick={onRemove.bind(null, id)} />
            </div>
        </div>
    );
}