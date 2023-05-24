import { Types } from "@/enums/Types";

export type TimerPayload = {
    [Types.Create]: {
      id: number;
      name: string;
      time: number;
    };
    [Types.Edit]: {
      id: number;
      name: string;
      time: number;
    };
    [Types.Delete]: {
      id: number;
    };
  };