import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addItem,
  removeItem,
  incrementQty,
  decrementQty,
  clearCart,
} from "./cartSlice";
import { products } from "../../data/priceData";

export function Cart() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  //   useStates for input holders
  const [itemName, setItemName] = useState("");
  const [itemQuantity, setItemQuantity] = useState("");

  const totalCartPrice = cartItems.reduce((acc, item) => acc + item.price, 0);
  const totalCartQuantity = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  //   itemSubmission Handler
  function cartItemHandler(e) {
    e.preventDefault();

    const selectedProduct = products.find(
      (p) => p.name.toLowerCase() === itemName.toLowerCase()
    );
    if (!selectedProduct || itemQuantity < 1) return;

    const newItem = {
      id: Date.now(),
      name: itemName,
      unitPrice: selectedProduct.price,
      quantity: Number(itemQuantity),
    };

    dispatch(addItem(newItem));
    setItemName("");
    setItemQuantity("");
  }

  return (
    <div>
      <form onSubmit={cartItemHandler}>
        <label htmlFor="itemName">Item Name: </label>
        <input
          type="text"
          name="itemName"
          id="itemName"
          placeholder="Item Name..."
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <label htmlFor="itemQuantity">Item Quantity</label>
        <input
          type="number"
          name="itemQuantity"
          id="itemQuantity"
          min="1"
          placeholder="Item Quantity..."
          value={itemQuantity}
          onChange={(e) => setItemQuantity(e.target.value)}
        />
        <button type="submit">Add Item</button>
      </form>
      <section>
        {cartItems.map((item) => (
          <div key={item.id}>
            <p>Name: {item.name}</p>
            <p>Price: {item.price.toFixed(2)}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => dispatch(incrementQty(item))}>
              Add 1 Quantity
            </button>
            <button
              onClick={() => dispatch(decrementQty(item))}
              disabled={item.quantity <= 1}
            >
              Subtract 1 Quantity
            </button>
            <button onClick={() => dispatch(removeItem(item))}>
              Remove Item
            </button>
          </div>
        ))}
      </section>
      <section>
        {cartItems.length > 0 && (
          <>
            <p>Total Price: {totalCartPrice.toFixed(2)}</p>
            <p>Total Quantity: {totalCartQuantity}</p>
            <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
          </>
        )}
      </section>
    </div>
  );
}
