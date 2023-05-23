import { ActionMap } from "@/types/ActionMap";

  
  export enum Types {
    Create = "CREATE_PRODUCT",
    Delete = "DELETE_PRODUCT",
    Add = "ADD_PRODUCT",
    Edit = "EDIT_PRODUCT"
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
  };
  
  export type ProductActions = ActionMap<ProductPayload>[keyof ActionMap<
    ProductPayload
  >];
  
  export const productReducer = (
    state: ProductType[],
    action: ProductActions | ShoppingCartActions
  ) => {
    switch (action.type) {
      case Types.Create:
        return [
          ...state,
          {
            id: action.payload.id,
            name: action.payload.name,
            price: action.payload.price
          }
        ];
      case Types.Delete:
        return [...state.filter(product => product.id !== action.payload.id)];
      case Types.Edit:
        return [...state.map(product => (product.id === action.payload.id) ? {
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price
        } : product)];
      default:
        return state;
    }
  };
  
  // ShoppingCart
  
  type ShoppingCartPayload = {
    [Types.Add]: undefined;
  };
  
  export type ShoppingCartActions = ActionMap<
    ShoppingCartPayload
  >[keyof ActionMap<ShoppingCartPayload>];
  
  export const shoppingCartReducer = (
    state: number,
    action: ProductActions | ShoppingCartActions
  ) => {
    switch (action.type) {
      case Types.Add:
        return state + 1;
      default:
        return state;
    }
  };
  