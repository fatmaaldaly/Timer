import React, { useState, useRef } from "react";

function App() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (intervalRef.current !== null) return;
    intervalRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const formatTime = (seconds) => {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${hrs}:${mins}:${secs}`;
  };

  return (
    <div className="container">
      <div className="title-group">
        <p>TIMER</p>
        <h1>{formatTime(time)}</h1>
      </div>

      <div className="button-group">
        <button onClick={startTimer}>START</button>
        <button onClick={stopTimer}>STOP</button>
      </div>
    </div>
  );
}

export default App;
