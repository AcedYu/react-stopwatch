import React from "react";

const Timer = ({ time }) => {
  return (
    <div className="timer">
      <h1>
        {/* minutes:seconds:milliseconds */}
        {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
        {("0" + Math.floor((time / 1000) % 60)).slice(-2)}:
        {("0" + ((time / 10) % 100)).slice(-2)}
      </h1>
    </div>
  );
};

export default Timer;
