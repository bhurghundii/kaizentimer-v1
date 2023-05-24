"use client";

import React, { useEffect } from "react";
import { AppContext } from "@/components/timer/timercontext";
import TimerCard from "./timercard";
import CreateTimerModal from "../modals/createtimer";
import EditTimerModal from "../modals/edittimer";
import { Types } from "@/enums/Types";

const List = () => {
  useEffect(() => {
    // Perform localStorage action
    const item = localStorage.getItem("storedTimers");
    console.log(item);
    if (item != null) {
      JSON.parse(item).map((timer) => {
        createTimer(timer.name, parseInt(timer.price));
      });
    }
  }, []);

  const { state, dispatch } = React.useContext(AppContext);

  function createTimer(name: string, price: number) {
    dispatch({
      type: Types.Create,
      payload: {
        id: Math.round(Math.random() * 10000),
        name: name,
        price: price,
      },
    });
  }

  function editTimer(id: number, name: string, price: number) {
    dispatch({
      type: Types.Edit,
      payload: {
        id: id,
        name: name,
        price: price,
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
            <div key={c.price}>
              <TimerCard name={c.name} duration={c.price} />
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

export default List;
