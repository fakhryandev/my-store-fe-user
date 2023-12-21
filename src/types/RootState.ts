import CartState from './CartType/CartState';
import ProductVariantState from './ProductVariantType/ProductVariantState';
import AuthState from './User/UserState';

interface RootState {
  productVariants: ProductVariantState;
  cart: CartState;
  auth: AuthState;
}

export default RootState;
