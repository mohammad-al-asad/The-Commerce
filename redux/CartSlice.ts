import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/redux";

interface cartType {
  cart: any;
}

const initialState: cartType = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increaseCounter: (state, action) => {
      state.cart.forEach((item: any) => {
        if (action.payload === item.id) {
          item.count = item.count + 1;
        }
      });
    },
    decreaseCounter: (state, action) => {
      state.cart.forEach((item: any) => {
        if (action.payload === item.id) {
          if (item.count > 1) {
            item.count = item.count - 1;
          } else {
            const index = state.cart.indexOf(item);
            state.cart.splice(index, 1);
          }
        }
      });
    },
    addToCart: (state, action) => {
      if (state.cart.length >= 1) {
        const index = state.cart.findIndex(
          (item: any) => item.id === action.payload.id
        );
        if (index > -1) {
          state.cart.forEach((element: any) => {
            if (element.id === state.cart[index].id) {
              state.cart[index].count = state.cart[index].count + 1;
            }
          });
        } else {
          state.cart.push({ ...action.payload, count: 1 });
        }
      } else {
        state.cart.push({ ...action.payload, count: 1 });
      }
    },
    removeCart: (state, action) => {
      state.cart = state.cart.filter((item: any) => {
        return item.id !== action.payload;
      });
    },
  },
});

export const { addToCart, removeCart, increaseCounter, decreaseCounter } =
  cartSlice.actions;
export const getCart = (state: RootState) => state.cart.cart;
export default cartSlice.reducer;
