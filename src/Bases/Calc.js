import React from "react";
import ButtonLittleLight from "../Buttons/ButtonLittleLight";
import ButtonBigAccent from "../Buttons/ButtonBigAccent";
import UserItem from "../Users/UserItem";

export default function Calc ({userList, onGetCalcResult}) {

    let addCalcLine = () => {
        alert('Тут функционала еще нет..');
    }

    return (
        <div className="content-container">
            <div className="content-flex-block content-flex-block__top">
                <div className="content">
                    {userList.map(userItem => {
                        return (
                            <UserItem key={userItem.id} id={userItem.id} name={userItem.name} sum={userItem.sum} isSelf={userItem.isSelf} />
                        );
                    })}

                    <ButtonLittleLight name="Получить расчет" onClick={onGetCalcResult} />
                </div>
            </div>
            
            <div className="content-flex-block content-flex-block__end">
                <div className="content">
                    <ButtonBigAccent name="Добавить трату" onClick={addCalcLine} />
                </div>
            </div>
        </div>
    );
}