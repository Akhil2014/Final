
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        const foundProduct = data.products.find(p => p.id === parseInt(id));
        setProduct(foundProduct);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {product && (
        <div>
          <h1>{product.name}</h1>
          <p>Price: ${product.price}</p>
          <p>Category: {product.category}</p>
          <p>Description: {product.description}</p>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
