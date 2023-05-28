"use client";

import TimerCounterProps from "@/interfaces/timercounterprops";
import React, { useState, useEffect } from "react";
import useSound from 'use-sound';

export default  function TimerItem (props: TimerCounterProps) {
  const [count, setCount] = useState(60 * props.duration);
  const [play] = useSound('https://kaizentimer-assets.s3.amazonaws.com/alarm.mp3');

  useEffect(() => {
    console.log(props.timerSkipped)
    
    if (props.timerRunning) {
      if (count > 0) {
        //Implementing the setInterval method
        const interval = setInterval(() => {
          setCount(count - 1);
        }, 1000);

        //Clearing the interval
        return () => clearInterval(interval);
      } 
      if (count <= 0){
        play()
      }
    }
  }, [count, props.timerRunning]);

  return (
    <div>
      <p className="text-3xl">{new Date(count * 1000).toISOString().substring(12, 19)}</p>
    </div>
  );
};