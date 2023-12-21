import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../states/store';
import { fetchProductVariantsAsync } from '../states/productvariants/productVariantsAction';
import { getProductVariants } from '../states/productvariants/productVariantsSlice';
import { Button, Card } from 'flowbite-react';
import { addToCart, getCartItems } from '../states/cart/cartSlice';
import ProductVariant from '../types/ProductVariantType/ProductVariant';

const ProductList = () => {
  const dispatch = useAppDispatch();
  const productVariants = useSelector(getProductVariants);
  const { items: cartItems } = useSelector(getCartItems);

  const handleAddToCart = (product: ProductVariant) => {
    dispatch(addToCart(product));
  };

  useEffect(() => {
    dispatch(fetchProductVariantsAsync());
  }, [dispatch]);

  return (
    <>
      <h2>Product List</h2>
      <p>{cartItems.length}</p>
      <div className="grid grid-cols-4">
        {productVariants.map((product: ProductVariant) => (
          <Card
            className="max-w-sm"
            imgAlt="Image Placeholder"
            imgSrc="https://placehold.co/600x400"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {product.name}
            </h5>
            <p>{product.price}</p>
            <Button onClick={() => handleAddToCart(product)}>
              Add to cart
            </Button>
          </Card>
        ))}
      </div>
    </>
  );
};

export default ProductList;
