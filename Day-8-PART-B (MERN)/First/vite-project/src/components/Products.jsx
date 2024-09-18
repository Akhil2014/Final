
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const category = searchParams.get('category') || '';
    const priceRange = searchParams.get('price') || '';

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const response = await fetch('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products');
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                let filteredProducts = data.products;

                if (category) {
                    filteredProducts = filteredProducts.filter(p => p.category.toLowerCase().includes(category.toLowerCase()));
                }
                if (priceRange) {
                    const [min, max] = priceRange.split('-').map(Number);
                    filteredProducts = filteredProducts.filter(p => p.price >= min && p.price <= max);
                }

                setProducts(filteredProducts);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [category, priceRange]);

    return (
        <>
            <div>
                <h1>Products</h1>
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>}
                <ul>
                    {products.map(product => (
                        <li key={product.id}>
                            <a href={`/products/${product.id}`}>{product.name}</a> - ${product.price}
                        </li>
                    ))}
                </ul>
            </div>
         </>
    );
};

export default Products;
