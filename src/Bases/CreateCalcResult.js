import React from "react";
import ButtonBigAccent from "../Buttons/ButtonBigAccent";
import RoomCode from "../RoomCode/RoomCode";

export default function CreateCalcResult({onSuccess}) {
    const [code, setCode] = React.useState('');

    setTimeout(() => {
        setCode('C4GNA');
    }, 1000);

    return (
        <div className="content-container">
            <div className="content-flex-block content-flex-block__center">
                <div className="content">
                    {code !== '' ? 
                        <RoomCode code={code} />
                    :
                        <div style={{textAlign: 'center'}}>
                            <div className="subheader">Загрузка</div>
                        </div>
                    }
                </div>
            </div>
            <div className="content-flex-block content-flex-block__end">
                <div className="content">
                    <ButtonBigAccent name="Отлично!" onClick={onSuccess} />
                </div>
            </div>
        </div>
    );
}