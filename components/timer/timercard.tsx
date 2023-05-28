import { useState } from "react";
import TimerItem from "./timeritem";

export default function TimerCard({
  name,
  duration,
}: {
  name: string;
  duration: number;
}) {
  const [timerRunning, setTimerRunning] = useState(false);

  return (
    <div className="flex items-center inset-0 bg-blue-100 shadow-md rounded-lg ">
        <h1> {name} </h1>
        <TimerItem timerRunning={timerRunning} duration={duration} />

        {timerRunning ? (
          <button
            onClick={() => setTimerRunning(false)}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded "
          >
            Stop Timer
          </button>
        ) : (
          <button
            onClick={() => setTimerRunning(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4"
          >
            Start Timer
          </button>
        )}
       
    </div>
  );
}