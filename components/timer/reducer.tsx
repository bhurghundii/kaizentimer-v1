import { Types } from "@/enums/Types";
import { TimerActions } from "@/types/TimerActions";
import { TimerType } from "@/types/TimerType";

export function reducer (
  state: TimerType[],
  action: TimerActions
)  {
  switch (action.type) {
    case Types.Create:
      const newArray = [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price,
        },
      ];

      localStorage.setItem("storedTimers", JSON.stringify(newArray));
      return newArray;
    case Types.Delete:
      const newArrayDeleted = [...state.filter((timer) => timer.id !== action.payload.id)]
      localStorage.setItem("storedTimers", JSON.stringify(newArrayDeleted));
      return newArrayDeleted;
    case Types.Edit:
      const editedArray = [
        ...state.map((timer) =>
          timer.id === action.payload.id
            ? {
                id: action.payload.id,
                name: action.payload.name,
                price: action.payload.price,
              }
            : timer
        ),
      ];

      localStorage.setItem("storedTimers", JSON.stringify(editedArray));
      return editedArray;

    default:
      return state;
  }
};
