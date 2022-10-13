import React, { useState, useEffect } from "react";
import "./App.css";
import ActionButton from "./components/ActionButton/ActionButton";

function App() {
  const defaultTimerValue = 3;
  const [minutes, setMinutes] = useState(defaultTimerValue);
  const [seconds, setSeconds] = useState(0);
  const [isEdit, setIsEdit] = useState(true);
  const [isRunning, setIsRunning] = useState(false);

  let min = minutes;
  let sec = seconds;

  useEffect(() => {
    if (isRunning) {
      const timeX = setInterval(function () {
        sec--;
        if (sec == -1 && min > 0) {
          sec = 59;
          min--;

          if (min == -1) {
            min = 0;
          }
        }
        setMinutes(min);
        setSeconds(sec);
        if (min == 0 && sec == 0) {
          setIsRunning(false);
        }
      }, 1000);
      return () => clearInterval(timeX);
    }
  });

  const timerValueChangeHandler = (event) => {
    setMinutes(event.target.value);
  };
  const onStartTimer = () => {
    setIsRunning(true);
  };
  const onPauseTimer = () => {
    setIsRunning(false);
  };
  const onContinueTimer = () => {
    setIsRunning(true);
  };
  const onResetTimer = () => {
    setIsRunning(false);
    setIsEdit(true);
    setMinutes(defaultTimerValue);
    setSeconds(0);
  };

  const onEditChangeHandler = () => {
    setIsEdit(false);
  };

  const disableBtn = minutes == 0 && seconds == 0;

  return (
    <div className="app">
      <div className="timerBox">
        {isEdit ? (
          <div className="timeInput">
            <input
              type="number"
              value={minutes}
              onChange={timerValueChangeHandler}
              placeholder="Enter minutes for timers"
            />
            <button className="btn" onClick={onEditChangeHandler}>
              Submit
            </button>
          </div>
        ) : (
          <div className="timeDisp">
            <h1>
              {minutes} : {seconds}
            </h1>
            <ActionButton
              onStartTimer={onStartTimer}
              onContinueTimer={onContinueTimer}
              onPauseTimer={onPauseTimer}
              onResetTimer={onResetTimer}
              disableBtn={disableBtn}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
