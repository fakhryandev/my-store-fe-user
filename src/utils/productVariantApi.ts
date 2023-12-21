const productApi = (() => {
  const BASE_URL: string = 'http://localhost:5155/api';

  const getProductVariants = async () => {
    const response = await fetch(`${BASE_URL}/productvariant`);
    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status) {
      throw new Error(message);
    }

    const { data } = responseJson;

    return data;
  };

  return {
    getProductVariants,
  };
})();

export default productApi;
