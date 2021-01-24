import React from "react";
import Input from "../Inputs/Input";
import UserInput from "../Inputs/UserInput";
import ButtonPlus from "../Buttons/ButtonPlus";
import ButtonLittleAccent from "../Buttons/ButtonLittleAccent";
import ButtonLittleLight from "../Buttons/ButtonLittleLight";

// Some user data
let roomName = '';
let adminName = '';

export default function CreateCalc ({onSave, onCancel}) {
    let [userList, setUserList] = React.useState([]);

    let onSaveClick = () => {
        let errorCount = 0;
        
        if (roomName === '') {
            alert('Название пусто. Нужно заполнить!');
            errorCount++;
        }
        if (adminName === '') {
            alert('Ваше имя пусто. Нужно заполнить!');
            errorCount++;
        }
        if (userList.length === 0) {
            alert('Нет участников. Нужно заполнить!');
            errorCount++;
        }

        for (const userItem of userList) {
            if (userItem.value === '') {
                alert('Есть пустое имя участника. Нужно заполнить!');
                errorCount++;
                break;
            }
        }

        if (errorCount) {
            return;
        }
        
        onSave({
            roomName,
            adminName,
            userList,
        });
    };

    let onRoomNameChange = event => {
        roomName = event.target.value;
    };
    
    let onAdminNameChange = event => {
        adminName = event.target.value;
    };

    let onItemChange = (id, value) => {
        setUserList(
            userList.map(userItem => {
                if (userItem.id === id) {
                    userItem.value = value;
                }
                return userItem;
            })
        );
    }

    let onUserRemove = (id) => {
      setUserList(
        userList.filter(userItem => {
            return userItem.id !== id;
        })
      );
    };

    let onPlusItem = () => {
        setUserList(
            userList.concat({
               id: Date.now(),
                value: '',
            })
        );
    };

    return (
        <div className="content-container">
            <div className="content-flex-block content-flex-block__top">
                <div className="content">
                    <Input onChange={onRoomNameChange}/>
                    <Input onChange={onAdminNameChange} name="Ваше имя" />

                    <div className="subheader" style={{marginTop: '20px', paddingBottom: '10px'}}>Участники</div>
                    {userList.length === 0 && 
                        <div className="empty-line" style={{paddingBottom: '10px'}}>Участников пока нет 🤷‍♂️</div>                
                    }

                    {userList.map((userItem) => {
                        return (
                            <UserInput key={userItem.id} id={userItem.id} value={userItem.value} onItemChange={onItemChange} onRemove={onUserRemove} />
                        );
                    })}

                    <ButtonPlus onClick={onPlusItem} />
                </div>
            </div>

            <div className="content-flex-block content-flex-block__end">
                <div className="content">
                    <ButtonLittleAccent name="Сохранить" onClick={onSaveClick} />
                    <ButtonLittleLight name="Отменить" onClick={onCancel} />
                </div>
            </div>
        </div>
    );
}