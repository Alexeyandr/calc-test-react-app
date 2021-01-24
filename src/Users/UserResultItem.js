import React from "react";
import "./Users.sass";

import icArrowIn from "../img/ic_arrow_in.svg";
import icArrowOut from "../img/ic_arrow_out.svg";

export default function UserResultItem({name, sum, state}) {

    let getArrow = () => {
        let alt = `arrow ${state === UserResultItem.STATE_CREDIT ? 'in' : 'out'}`;
        let className = `arrow arrow-${state === UserResultItem.STATE_CREDIT ? 'in' : 'out'}`;

        let src = '';
        if (state === UserResultItem.STATE_CREDIT) {
            src = icArrowIn;
        } else if (state === UserResultItem.STATE_DEBIT) {
            src = icArrowOut;
        }

        return (
            <div className={className}><img src={src} alt={alt} /></div>
        );
    }

    let sumClass = `sum sum-${state === UserResultItem.STATE_CREDIT ? 'red' : 'green'}`;

    return (
        <div className="user-item user-item-result">
            {getArrow()}
            <div className="name">{name}</div>
            <div className={sumClass}>{sum}</div>
        </div>
    );
}

UserResultItem.STATE_CREDIT = 'STATE.CREDIT';
UserResultItem.STATE_DEBIT = 'STATE.DEBIT';