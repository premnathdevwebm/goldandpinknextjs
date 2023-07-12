import {
  CartState,
  CartAction,
  CartActionTypes,
} from "@/store/cart/actionstate";
import { CartItem, Product } from "@/store/cart/types";
export const cartReducer = (
  state: CartState,
  action: CartAction
): CartState => {
  switch (action.type) {
    case CartActionTypes.ADD_TO_CART:
      const existingCartItem = state.cartItems.find(
        (item) => item.product.name === action.payload.name
      ); 
      
      if (existingCartItem) {
        // If the item already exists, increase the quantity
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.product.name === action.payload.name
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          totalPrice: state.totalPrice + action.payload.price,
        };
      }
      
      // If the item doesn't exist, add it to the cart
      return {
        ...state,
        cartItems: [
          ...state.cartItems,
          { product: action.payload, quantity: 1 },
        ],
        totalPrice: state.totalPrice + action.payload.price,
      };

    case CartActionTypes.REMOVE_FROM_CART:
      const productName = action.payload.name;
      const itemToRemove = state.cartItems.find(
        (item) => item.product.name === productName
      );

      if (!itemToRemove) {
        return state;
      }

      // Calculate the new total price after removing the item
      const newTotalPrice =
        state.totalPrice - itemToRemove.product.price * itemToRemove.quantity;

      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.product.name !== productName
        ),
        totalPrice: newTotalPrice,
      };

    case CartActionTypes.INCREMENT_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.product.name === action.payload.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
        totalPrice:
          state.totalPrice + getProductPrice(action.payload, state.cartItems),
      };

    case CartActionTypes.DECREMENT_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.product.name === action.payload.name
            ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
            : item
        ),
        totalPrice:
          state.totalPrice - getProductPrice(action.payload, state.cartItems),
      };

    default:
      return state;
  }
};

export const getProductPrice = (product: Product, cartItems: CartItem[]) => {
  const item = cartItems.find((item) => item.product.name === product.name);
  return item ? item.product.price : 0;
};
