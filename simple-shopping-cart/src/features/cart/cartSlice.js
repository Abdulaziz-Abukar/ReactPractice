import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // addItem (state, action)
    addItem: (state, action) => {
      const existingItem = state.find((item) => item.id === action.payload.id);

      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
        existingItem.price = existingItem.unitPrice * existingItem.quantity;
      } else {
        state.push({
          ...action.payload,
          unitPrice: action.payload.unitPrice,
          price: action.payload.unitPrice * action.payload.quantity,
        });
      }
    },
    // removeItem (state, action)
    removeItem: (state, action) => {
      return state.filter((cartItem) => cartItem.id !== action.payload.id);
    },
    // incrmentQty (state, action)
    incrementQty: (state, action) => {
      const item = state.find((item) => item.id === action.payload.id);

      if (item) {
        item.quantity += 1;
        item.price = item.unitPrice * item.quantity;
      }
    },
    // decrementQty (state, action)
    decrementQty: (state, action) => {
      const item = state.find((item) => item.id === action.payload.id);

      if (item) {
        item.quantity -= 1;
        item.price = item.unitPrice * item.quantity;
      }
    },
    // clearCart (state)
    clearCart: () => {
      return [];
    },
  },
});

export const { addItem, removeItem, incrementQty, decrementQty, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
