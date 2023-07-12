"use client";
import { ReactNode, useReducer } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { AppProvider } from "@/providers/app";
import { Navbar } from "@/components/Navbar";
import { Chatbot } from "@/components/Chatbot";
import { Footer } from "@/components/Footer";
import { CartContext } from "@/store/cart/cart-context";
import { cartReducer } from "@/store/cart/reducer";

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, {
    cartItems: [],
    totalPrice: 0,
  });

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gold&Pink",
  description: "describe about gold and pink app",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Gold&Pink</title>
        <meta property="og:title" content="Gold&Pink" key="title" />
        <link rel="icon" href="/logo.png" type="image/x-icon" sizes="32x32" />
      </head>
      <body className={inter.className}>
        <CartProvider>
          <AppProvider>
            <Navbar />
            {children}
            <Chatbot />
            <Footer />
          </AppProvider>
        </CartProvider>
      </body>
    </html>
  );
}
