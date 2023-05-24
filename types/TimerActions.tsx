import { ActionMap } from "./ActionMap";
import { TimerPayload } from "./TimerPayload";

export type TimerActions =
  ActionMap<TimerPayload>[keyof ActionMap<TimerPayload>];