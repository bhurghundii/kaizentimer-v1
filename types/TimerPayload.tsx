import { Types } from "@/enums/Types";

export type TimerPayload = {
    [Types.Create]: {
      id: number;
      name: string;
      price: number;
    };
    [Types.Edit]: {
      id: number;
      name: string;
      price: number;
    };
    [Types.Delete]: {
      id: number;
    };
  };