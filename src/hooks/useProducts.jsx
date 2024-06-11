import React, { useState, useEffect } from 'react';
import getAllProducts from '../services/products';

const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProducts()
            .then((response) => {
                setProducts(response.data.products);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
    return { products };
};

export default useProducts;
