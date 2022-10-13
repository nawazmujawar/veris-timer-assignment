import React from "react";
import "./styles.css";

function ActionButton(props) {
  const {
    onStartTimer,
    onPauseTimer,
    onContinueTimer,
    onResetTimer,
    disableBtn,
  } = props;

  return (
    <div className="timerAction">
      <button onClick={onStartTimer} className="btn" disabled={disableBtn}>
        start
      </button>
      <button onClick={onPauseTimer} className="btn" disabled={disableBtn}>
        pause
      </button>
      <button onClick={onContinueTimer} className="btn" disabled={disableBtn}>
        continue
      </button>
      <button className="btn" onClick={onResetTimer}>
        reset
      </button>
    </div>
  );
}

export default ActionButton;
