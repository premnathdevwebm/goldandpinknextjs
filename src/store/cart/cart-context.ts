import React, { createContext, useContext } from 'react';
import { CartAction, CartState } from './actionstate';
export const CartContext = createContext<{
  cartState: CartState;
  cartDispatch: React.Dispatch<CartAction>;
}>({
  cartState: {
    cartItems: [],
    totalPrice: 0,
  },
  cartDispatch: () => null,
});

export const useCart = () => useContext(CartContext);
