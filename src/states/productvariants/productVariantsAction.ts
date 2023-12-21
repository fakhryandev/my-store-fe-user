import ProductVariant from '../../types/ProductVariantType/ProductVariant';
import productVariantApi from '../../utils/productVariantApi';
import { AppThunk } from '../store';
import { setProductVariants } from './productVariantsSlice';

export const fetchProductVariantsAsync = (): AppThunk => async (dispatch) => {
  try {
    const productVariants: ProductVariant[] =
      await productVariantApi.getProductVariants();

    dispatch(setProductVariants(productVariants));
  } catch (error) {
    console.log(error);
  } finally {
  }
};
