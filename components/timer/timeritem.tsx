"use client";

import TimerCounterProps from "@/interfaces/timercounterprops";
import React, { useState, useEffect } from "react";


export default  function TimerItem (props: TimerCounterProps) {
  const [count, setCount] = useState(60 * props.duration);

  useEffect(() => {
    if (props.timerRunning) {
      if (count > 0) {
        //Implementing the setInterval method
        const interval = setInterval(() => {
          setCount(count - 1);
        }, 1000);

        //Clearing the interval
        return () => clearInterval(interval);
      }
    }
  }, [count, props.timerRunning]);

  return (
    <div>
      <p>{new Date(count * 1000).toISOString().substring(12, 19)}</p>
    </div>
  );
};