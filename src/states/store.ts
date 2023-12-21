import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import productsVariantSlice from './productvariants/productVariantsSlice';
import cartReducer from './cart/cartSlice';

import { useDispatch } from 'react-redux';

const store = configureStore({
  reducer: {
    auth: authReducer,
    productVariants: productsVariantSlice,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
