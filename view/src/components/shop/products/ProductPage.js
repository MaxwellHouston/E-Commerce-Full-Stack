import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import apiProducts from "../../../utilities/api/apiProducts";
import { LoadingWheel } from "../../animated/LoadingWheel";
import { ProductInfo } from "./ProductInfo";


export function ProductPage({getParams}) {

    const [product, setProduct] = useState({});
    const {category, productid, sport} = useParams();

    const fetchProduct = useCallback( 
        async () => {
            const loadedProduct = await apiProducts.fetchProductById(productid);
            setProduct(loadedProduct);
        }, [productid]
    );

    useEffect(() => {
        fetchProduct();
    },[fetchProduct]);

    useEffect(() => {
        let item = product.name;
        getParams({category, sport, item});
    },[category, sport, product, getParams]);

    const imgPath = product.id ? require(`../../../utilities/images/products/${product.id.slice(0,4)}.jpg`) : null;

    return (
        <div className="product-page">
            <div className="product-img-container">
                {product.id ? <img src={imgPath} alt={product.name} /> : <LoadingWheel />}
            </div>
            <div className="product-info">
                <ProductInfo product={product} />
            </div>
        </div>
    )
}