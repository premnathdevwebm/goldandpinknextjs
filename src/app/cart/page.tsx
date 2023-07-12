"use client";
import { useCart } from "@/store/cart/cart-context";
import styles from "./Cart.module.css";
import { CartActionTypes } from "@/store/cart/actionstate";

export default function CartPage() {
  const { cartState, cartDispatch } = useCart();

  const handleRemoveItem = (product: any) => {
    console.log("removing Product", product);
    
    cartDispatch({
      type: CartActionTypes.REMOVE_FROM_CART,
      payload: product,
    });
  };

  const handleQuantityChange = (product: any, quantity: number) => {
    console.log("MODIFY", product, quantity);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {cartState.cartItems.length > 0 ? (
          <div className={styles.cartItems}>
            <ul className={styles.itemList}>
              {cartState.cartItems.map((item, index) => (
                <li key={index} className={styles.item}>
                  <button
                    className={styles.removeButton}
                    onClick={() => handleRemoveItem(item)}
                  >
                    X
                  </button>
                  <h3>{item.product.name}</h3>
                  <img src={item.product.image.src} alt={item.product.name} />
                  <p>{item.product.description}</p>
                  <p>Price: ${item.product.price}</p>
                  <div className={styles.quantity}>
                    <button
                      className={styles.quantityButton}
                      onClick={() => handleQuantityChange(item, -1)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className={styles.quantityButton}
                      onClick={() => handleQuantityChange(item, 1)}
                    >
                      +
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <h4 className={styles.totalPrice}>
              Total Price: $
              {(Math.round(cartState.totalPrice * 100) / 100).toFixed(2)}
            </h4>
          </div>
        ) : (
          <p className={styles.cartItems}>Your cart is empty.</p>
        )}
        <div className={styles.checkout}>
          <form className={styles.form}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="address">Address:</label>
            <textarea id="address" name="address" required></textarea>

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" required />

            <button className={styles.buyButton}>Buy</button>
          </form>
        </div>
      </div>
    </div>
  );
}
