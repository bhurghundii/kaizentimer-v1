"use client";

import TimerCounterProps from "@/interfaces/timercounterprops";
import React, { useState, useEffect } from "react";
import useSound from 'use-sound';

export default  function TimerItem (props: TimerCounterProps) {
  const [count, setCount] = useState(60 * props.duration);
  const [play] = useSound(process.env.s3AlarmMp3Url? process.env.s3AlarmMp3Url : '');

  useEffect(() => {
    if (props.timerSkipped) {
      setCount(60 * props.duration)
      props.setTimerSkipped(false);
    }

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