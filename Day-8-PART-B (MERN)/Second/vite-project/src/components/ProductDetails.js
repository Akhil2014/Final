import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';

const ProductDetails = () => {
  const { id } = useParams();
  const { productDetails, fetchProductDetails, loading, error } = useContext(ProductContext);

  useEffect(() => {
    fetchProductDetails(id);
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {productDetails ? (
        <div>
          <h1>{productDetails.name}</h1>
          <p>Price: ${productDetails.price}</p>
          <p>Category: {productDetails.category}</p>
          <p>Description: {productDetails.description}</p>
        </div>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
};

export default ProductDetails;
