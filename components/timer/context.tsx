"use client";

import React, { createContext, useReducer, Dispatch } from "react";
import {
  reducer,
} from "@/components/timer/reducer";
import { InitialStateType } from "@/types/InitialStateType";
import { TimerActions } from "@/types/TimerActions";


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
  timers: reducer(timers, action),
});

const AppProvider: React.FC = ({ children } : any) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
