import React from "react";

export function ProductView({product}) {
    const imgPath = require(`../../utilities/images/products/${product.id.slice(0,4)}.jpg`);
    return(
        <div className="product-view">
            <h2>{product.name}</h2>
            <img src={imgPath} alt={product.name} />
            <p><span className="product-color">{product.color}</span> - <span className="product-size">{product.size}</span></p>
            <p className="product-price">{`${product.price}`}</p>
        </div>
        
    )
}