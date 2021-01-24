import React from "react";
import ButtonBigAccent from "../Buttons/ButtonBigAccent";
import ButtonBigLight from "../Buttons/ButtonBigLight";

export default function Login({onCreate, onJoin}) {
    
    return (
        <div className="content-container">
            <div className="content-flex-block content-flex-block__end">
                <div className="content">
                    <ButtonBigAccent name="Создать" onClick={onCreate} />
                    <ButtonBigLight name="Подключиться" onClick={onJoin} />
                </div>
            </div>
        </div>
    );
}