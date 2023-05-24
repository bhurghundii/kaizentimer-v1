"use client";

import React, { createContext, useReducer, Dispatch } from "react";
import {
  timerReducer,
  TimerActions,
} from "@/components/timer/reducers";
import { InitialStateType } from "@/types/InitialStateType";


const initialState = {
  timers: [],
};

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<TimerActions>;
}>({
  state: initialState,
  dispatch: () => null
});

const mainReducer = (
  { timers }: InitialStateType,
  action: TimerActions
) => ({
  timers: timerReducer(timers, action),
});

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
