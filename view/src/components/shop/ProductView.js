import React from "react";


export function ProductView({product}) {

    return(
        <div className="product-view">
        <img src={'#'} alt={product.name} />
            <h2>{product.name}</h2>
            <p><span className="product-color">{product.color ? product.color : 'No color'}</span> - <span className="product-size">{product.size ? product.size : 'One-size'}</span></p>
            <p className="product-price">{`${product.price}`}</p>
        </div>
        
    )
}