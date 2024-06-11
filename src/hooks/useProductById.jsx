import React, { useEffect, useState } from 'react'
import getProductById from '../services/productsById'

const useProductById = (id) => {
    const [product, setProduct] = useState({})

    useEffect(() => {
        getProductById(id)
            .then((res) => {
                setProduct(res.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return { product }
}
export default useProductById;