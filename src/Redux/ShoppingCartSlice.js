import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  checkoutCart: [],
  total: 0,
};

export const Shoppingcartslice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let isAdded = false;
      if (state.checkoutCart.length > 0) {
        state.checkoutCart.map((item, ind) => {
          if (item.id === action.payload.id) {
            state.checkoutCart[ind].count = state.checkoutCart[ind].count
              ? state.checkoutCart[ind].count + 1
              : 2;
            isAdded = true;
            state.total += 1;
          }
        });
      } else {
        state.checkoutCart.push(action.payload);
        isAdded = true;
        state.total += 1;
      }
      if (!isAdded) {
        state.checkoutCart.push(action.payload);
        state.total += 1;
      }
    },
    removeFromCart: (state, action) => {
      if (state.checkoutCart.length > 0) {
        state.checkoutCart.map((item, ind) => {
          if (item.id === action.payload.id) {
            if (
              state.checkoutCart[ind].count &&
              state.checkoutCart[ind].count > 1
            ) {
              state.checkoutCart[ind].count -= 1;
              state.total -= 1;
            } else {
              state.checkoutCart.splice(ind, 1);
              state.total -= 1;
            }
          }
        });
      }
    },
    deleteFromCart: (state, action) => {
      if (state.checkoutCart.length > 0) {
        state.checkoutCart.map((item, ind) => {
          if (item.id === action.payload.id) {
            if (state.checkoutCart[ind].count) {
              state.total = state.total - state.checkoutCart[ind].count;
            } else {
              state.total = state.total - 1;
            }

            state.checkoutCart.splice(ind, 1);
          }
        });
      }
    },
    clearCart: (state, action) => {
     state.checkoutCart = [];
     state.total=0
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, deleteFromCart, clearCart } =
  Shoppingcartslice.actions;

export default Shoppingcartslice.reducer;
