import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import RootState from '../../types/RootState';
import CartState from '../../types/CartType/CartState';
import CartItem from '../../types/CartType/CartItem';

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        (item) => item.product_id === action.payload.product_id
      );
      if (existingItem) {
        existingItem.qty += 1;
      } else {
        state.items.push({
          product_id: action.payload.product_id,
          name: action.payload.name,
          price: 10,
          qty: 1,
        });
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, clearCart } = cartSlice.actions;
export const getCartItems = (state: RootState) => state.cart;

export default cartSlice.reducer;
