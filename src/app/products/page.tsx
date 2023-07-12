"use client";
import { useState, useEffect } from "react";
import { ProductComp } from "@/components/ProductComp";
import styles from "./Products.module.css";
import { useCart } from "@/store/cart/cart-context";
import { CartActionTypes } from "@/store/cart/actionstate";

interface Product {
  name: string;
  image: any;
  description: string;
  price: number;
}

export default function ProductPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | any>({});
  const { cartDispatch } = useCart();

  useEffect(() => {
    if (Object.keys(selectedProduct).length > 0) handleAddToCart();
  }, [selectedProduct, cartDispatch]);

  function handleAddToCart() {
    cartDispatch({
      type: CartActionTypes.ADD_TO_CART,
      payload: selectedProduct,
    });
  }
  return (
    <div className={styles.container}>
      <ProductComp setSelectedProduct={setSelectedProduct} />
    </div>
  );
}
