import { useState } from "react";
import TimerItem from "./timeritem";
import {
  ArrowRightCircleIcon,
  Cog6ToothIcon,
  PauseIcon,
  PlayIcon,
} from "@heroicons/react/24/outline";

export default function TimerCard({
  name,
  duration,
  EditModalComponent,
}: {
  name: string;
  duration: number;
  EditModalComponent: any;
}) {
  const [timerRunning, setTimerRunning] = useState(false);
  const [timerSkipped, setTimerSkipped] = useState(false);

  return (
    <div className="flex items-center inset-0 bg-blue-20 shadow-md rounded-lg h-20 white ">
      <div className="px-5">
        <TimerItem timerRunning={timerRunning} duration={duration} timerSkipped={timerSkipped} setTimerSkipped={setTimerSkipped}/>
        <h1 className="text-lg"> {name} </h1>
      </div>

      <div className="px-5">
        {timerRunning ? (
          <button
            onClick={() => setTimerRunning(false)}
            className="bg-white-500 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded shadow-lg rounded-3xl"
          >
            <PauseIcon className="h-6 w-6 text-blue-600" aria-hidden="true" />
          </button>
        ) : (
          <button
            onClick={() => setTimerRunning(true)}
            className="bg-white-500 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded shadow-lg rounded-3xl"
          >
            <PlayIcon className="h-6 w-6 text-blue-600" aria-hidden="true" />
          </button>
        )}
      </div>

      <button
            onClick={() => {
              setTimerRunning(false)
              setTimerSkipped(true)}
            }
            className="bg-white-500 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded shadow-lg rounded-3xl"
          >
            <ArrowRightCircleIcon className="h-6 w-6 text-blue-600" aria-hidden="true" />
          </button>

      <div className="px-2">{EditModalComponent}</div>
      </div>

  );
}
