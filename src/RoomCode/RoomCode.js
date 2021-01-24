import React from "react";
import "./RoomCode.sass";

import ButtonCopy from "../Buttons/ButtonCopy";

export default function RoomCode({code}) {

    let onCopyClick = () => {
        // TODO: Relise it...
        // let copyElement = document.querySelector('.room-code .code .value');
        // let range = new Range();
        // range.selectNodeContents(copyElement)
        // document.execCommand("copy")
        // alert('Код скопирован');

        alert('Тут функционала еще нет..');
    };

    return (
        <div className="room-code">
            <div className="subheader" style={{paddingBottom: '10px'}}>Код вашей комнаты</div>
            <div className="code">
                <div className="value">{code}</div>
                <div className="copy">
                    <ButtonCopy onClick={onCopyClick} />
                </div>
            </div>
        </div>
    );
}