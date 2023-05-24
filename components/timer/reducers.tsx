import { ActionMap } from "@/types/ActionMap";

export enum Types {
  Create = "CREATE_PRODUCT",
  Delete = "DELETE_PRODUCT",
  Add = "ADD_PRODUCT",
  Edit = "EDIT_PRODUCT",
  Load = "LOAD_PRODUCTS",

}

// Product

type ProductType = {
  id: number;
  name: string;
  price: number;
};

type ProductPayload = {
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
  [Types.Load]: {
    products: any
  };
};

export type ProductActions =
  ActionMap<ProductPayload>[keyof ActionMap<ProductPayload>];

export const productReducer = (
  state: ProductType[],
  action: ProductActions
) => {
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
      const newArrayDeleted = [...state.filter((product) => product.id !== action.payload.id)]
      localStorage.setItem("storedTimers", JSON.stringify(newArrayDeleted));
      return newArrayDeleted;
    case Types.Load:
      return [action.payload.products];
    case Types.Edit:
      return [
        ...state.map((product) =>
          product.id === action.payload.id
            ? {
                id: action.payload.id,
                name: action.payload.name,
                price: action.payload.price,
              }
            : product
        ),
      ];
    default:
      return state;
  }
};
