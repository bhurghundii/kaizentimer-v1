"use client";

import React, { useEffect } from "react";
import { AppContext } from "@/components/timer/context";
import TimerCard from "./timercard";
import CreateTimerModal from "../modals/createtimer";
import EditTimerModal from "../modals/edittimer";
import { Types } from "@/enums/Types";

function Listing () {
  useEffect(() => {
    // Perform localStorage action
    const item = localStorage.getItem("storedTimers");

    if (item != null) {
      JSON.parse(item).map((timer) => {
        createTimer(timer.name, parseInt(timer.time));
      });
    }
  }, []);

  const { state, dispatch } = React.useContext(AppContext);

  function createTimer(name: string, time: number) {
    dispatch({
      type: Types.Create,
      payload: {
        id: Math.round(Math.random() * 10000),
        name: name,
        time: time,
      },
    });
  }

  function editTimer(id: number, name: string, time: number) {
    dispatch({
      type: Types.Edit,
      payload: {
        id: id,
        name: name,
        time: time,
      },
    });
  }

  function deleteTimer(id: number) {
    dispatch({
      type: Types.Delete,
      payload: {
        id,
      },
    });
  }

  return (
    <div>
      <div style={{ marginTop: 20 }}>
        {state.timers.map((c) => (
          <div>
            <div key={c.time}>
              <TimerCard name={c.name} duration={c.time} />
            </div>
            <span>{c.name}</span>
            <button onClick={() => deleteTimer(c.id)}>delete</button>
            <EditTimerModal id={c.id} editTimer={editTimer} />
          </div>
        ))}
      </div>

      <div className="relative flex place-items-center ">
        <CreateTimerModal createTimer={createTimer} />
      </div>
    </div>
  );
};

export default Listing;
