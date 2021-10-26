import React from "react";
import { Button } from "react-bootstrap";

const ControlButtons = ({ active, isPaused, start, resume, reset }) => {
  const StartButton = (
    <Button variant="primary" onClick={start}>
      Start
    </Button>
  );
  const ActiveButtons = (
    <div className="btn-grp">
      <Button variant="danger" onClick={reset}>
        Reset
      </Button>
      <Button onClick={resume}>{isPaused ? "Resume" : "Pause"}</Button>
    </div>
  );

  return (
    <div>
      <div>{active ? ActiveButtons : StartButton}</div>
    </div>
  );
};

export default ControlButtons;
