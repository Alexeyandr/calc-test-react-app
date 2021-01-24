import React from "react";
import logo from './img/logo.svg';
import './App.sass';

// Base Components
import Login from "./Bases/Login";
import CreateCalc from "./Bases/CreateCalc";
import CreateCalcResult from "./Bases/CreateCalcResult";
import JoinCalc from "./Bases/JoinCalc";
import Calc from "./Bases/Calc";
import CalcResult from "./Bases/CalcResult";


function App() {
  const [currentState, setCurrentState] = React.useState(App.BASE_STATE_LOGIN);
  const [userList, setUserList] = React.useState([]);

  const loginCallbacks = () => {
    return {
      onCreate () {
        setCurrentState(App.BASE_STATE_CREATE_CALC);
      },
      onJoin () {
        if (userList.length === 0) {
          alert('Нет комнат');
          return;
        }

        setCurrentState(App.BASE_STATE_JOIN_CALC);
      }
    };
  };
  
  const createCalcCallbacks = () => {
    return {
      onSave (creatResult) {
        let tempUserList = [];
        let testSum = 100;

        tempUserList.push({
          id: 1,
          name: creatResult.adminName,
          sum: testSum,
          isSelf: true,
        });

        for (const userItem of creatResult.userList) {
          testSum += 100;

          tempUserList.push({
            id: userItem.id,
            name: userItem.value,
            sum: testSum,
            isSelf: false,
          });
        }

        setUserList(tempUserList);

        setCurrentState(App.BASE_STATE_CREATE_CALC_RESULT);
      },
      onCancel () {
        setCurrentState(App.BASE_STATE_LOGIN);
      }
    };
  };
  
  const createCalcResultCallbacks = () => {
    return {
      onSuccess () {
        setCurrentState(App.BASE_STATE_LOGIN);
      }
    };
  };
  
  const joinCalcCallbacks = () => {
    return {
      onJoin () {
        setCurrentState(App.BASE_STATE_CALC);
      }
    };
  };
  
  const calcCallbacks = () => {
    return {
      onGetCalcResult () {
        setCurrentState(App.BASE_STATE_CALC_RESULT);
      }
    };
  };
  
  const calcResultCallbacks = () => {
    return {
      onSuccess () {
        setCurrentState(App.BASE_STATE_CALC);
      }
    };
  };

  return (
    <div className="App">
      <div className="top-bar">
        <img src={logo} alt="calc logo" />
      </div>

      {currentState === App.BASE_STATE_LOGIN && 
        <Login {...loginCallbacks()} />
      }
      
      {currentState === App.BASE_STATE_CREATE_CALC && 
        <CreateCalc {...createCalcCallbacks()} />
      }
      
      {currentState === App.BASE_STATE_CREATE_CALC_RESULT && 
        <CreateCalcResult {...createCalcResultCallbacks()} />
      }
      
      {currentState === App.BASE_STATE_JOIN_CALC && 
        <JoinCalc {...joinCalcCallbacks()} />
      }
      
      {currentState === App.BASE_STATE_CALC && 
        <Calc userList={userList} {...calcCallbacks()} />
      }
      
      {/* 
        TODO: Change userList to Real User Result Lists 
        or relise it on <CalcResult />
      */}
      {currentState === App.BASE_STATE_CALC_RESULT && 
        <CalcResult userResultList={userList} {...calcResultCallbacks()} />
      }

    </div>
  );
}

export default App;

// Base states
App.BASE_STATE_LOGIN = "BASE.STATE.LOGIN";
App.BASE_STATE_CREATE_CALC = "BASE.STATE.CREATE.CALC";
App.BASE_STATE_CREATE_CALC_RESULT = "BASE.STATE.CREATE.CALC.RESULT";
App.BASE_STATE_JOIN_CALC = "BASE.STATE.JOIN.CALC";
App.BASE_STATE_CALC = "BASE.STATE.CALC";
App.BASE_STATE_CALC_RESULT = "BASE.STATE.CALC.RESULT";
