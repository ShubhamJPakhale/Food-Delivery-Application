import { createSlice } from "@reduxjs/toolkit";

const cartslice = createSlice({
  name: "Cart",
  initialState: {
    items: {},
    totalItemCount: 0,
  },
  reducers: {
    addItem: (state, action) => {
      //state.items.push(action.payload);
      const item = state.items[action.payload.id];
      const quantity =
        item && item.hasOwnProperty("quantity")
          ? state.items[action.payload.id]?.quantity + 1
          : 1;
      state.items[action.payload.id] = { ...action.payload, quantity };
      state.totalItemCount = state.totalItemCount + 1;
    },
    removeItem: (state, action) => {
      //state.items.pop(action);
      const item = state.items[action.payload];
      if (!item) return;
      if (item.quantity > 1) {
        item.quantity = item.quantity - 1;
        state.totalItemCount--;
      } else {
        state.totalItemCount--;
        delete state.items[action.payload];
      }
    },
    clearCart: (state) => {
      state.items = {};
      state.totalItemCount = 0;
    },
  },
});

//below is used for exporting action of reducer to store using this redux toolkit in this way
export const { addItem, removeItem, clearCart } = cartslice.actions;

//below is used to export the slice reducer
export default cartslice.reducer;
