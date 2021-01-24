import React from "react";
import ButtonBigAccent from "../Buttons/ButtonBigAccent";
import Input from "../Inputs/Input";

export default function JoinCalc ({onJoin}) {
    
    return (
        <div className="content-container">
            <div className="content-flex-block content-flex-block__center">
                <div className="content">
                    <Input name="Код комнаты" />
                </div>
            </div>
            <div className="content-flex-block content-flex-block__end">
                <div className="content">
                    <ButtonBigAccent name="Войти" onClick={onJoin} />
                </div>
            </div>
        </div>
    );
}