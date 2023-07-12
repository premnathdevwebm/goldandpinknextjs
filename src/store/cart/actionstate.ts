import { Product, CartItem } from "@/store/cart/types";
export enum CartActionTypes {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
}

export interface AddToCartAction {
  type: CartActionTypes.ADD_TO_CART;
  payload: Product;
}

export interface RemoveFromCartAction {
  type: CartActionTypes.REMOVE_FROM_CART;
  payload: Product; // Product ID
}

export interface IncrementQuantityAction {
  type: CartActionTypes.INCREMENT_QUANTITY;
  payload: Product; // Product ID
}

export interface DecrementQuantityAction {
  type: CartActionTypes.DECREMENT_QUANTITY;
  payload: Product; // Product ID
}

export type CartAction =
  | AddToCartAction
  | RemoveFromCartAction
  | IncrementQuantityAction
  | DecrementQuantityAction;

export interface CartState {
  cartItems: CartItem[];
  totalPrice: number;
}
