import React from 'react'

const ItemDetailContainer = ({ product }) => {
    return (
        <div>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>{product.price}</p>
        </div>
    )
}

export default ItemDetailContainer