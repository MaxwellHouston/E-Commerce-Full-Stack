import React from "react";
import { Link } from "react-router-dom";

export function ProductView({product}) {
    const imgPath = require(`../../../utilities/images/products/${product.id.slice(0,4)}.jpg`);
    return(
        <div className="product-view">
            <Link to={`/shop/${product.sport}/${product.category}/${product.id}`}>
                <img className="product-thumbnail" src={imgPath} alt={product.name} />
                <div className="product-view-info">
                    <h2>{product.name}</h2>
                    <p><span className="product-view-color">{product.color}</span> - <span className="product-view-size">{product.size}</span></p>
                    <p className="product-view-price">{`${product.price}`}</p>
                </div>    
            </Link>
        </div>
        
    )
}