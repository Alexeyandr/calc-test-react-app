import React from "react";
import ButtonLittleAccent from "../Buttons/ButtonLittleAccent";
import UserResultItem from "../Users/UserResultItem";

export default function CalcResult ({userResultList, onSuccess}) {

    return (
        <div className="content-container">
            <div className="content-flex-block content-flex-block__top">
                <div className="content">
                    {userResultList.map((userResultItem, index) => {
                        if (userResultItem.isSelf) {
                            // TODO: Fix show self item
                            // It must be remove...
                        } else {
                            let tempState = (index % 2 === 0) ? UserResultItem.STATE_CREDIT : UserResultItem.STATE_DEBIT;
                            let tempSum = Math.floor(Math.random() * 1000);
    
                            return (
                                <UserResultItem key={userResultItem.id} id={userResultItem.id} name={userResultItem.name} sum={tempSum} state={tempState} />
                            );
                        }

                    })}
                </div>
            </div>
            
            <div className="content-flex-block content-flex-block__end">
                <div className="content">
                    <ButtonLittleAccent name="Отлично!" onClick={onSuccess} />
                </div>
            </div>
        </div>
    );
}