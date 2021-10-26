import React from "react";
import Timer from "./Timer.js";
import ControlButtons from "./ControlButtons.js";
import Saved from "./Saved.js";
import { Card } from "react-bootstrap";

const StopWatch = () => {
  const [isActive, setIsActive] = React.useState(false);
  const [isPaused, setIsPaused] = React.useState(true);
  const [time, setTime] = React.useState(0);
  const [record, setRecord] = React.useState(0);

  React.useEffect(() => {
    let interval = null;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
    if (isPaused) {
      setRecord(time);
    }
  };

  return (
    <div className="container">
      <Card className="my-1">
        <Card.Header>Timer</Card.Header>
        <div className="my-3">
          <Timer time={time} />
          <ControlButtons
            active={isActive}
            isPaused={isPaused}
            start={handleStart}
            resume={handlePauseResume}
            reset={handleReset}
          />
        </div>
      </Card>
      <Card className="my-1">
        <Card.Header>Record</Card.Header>
        <div className="my-3">
          <Saved time={record} />
        </div>
      </Card>
    </div>
  );
};

export default StopWatch;
