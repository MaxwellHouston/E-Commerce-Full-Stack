import React, {useState, useEffect} from "react";
import api from "../../utilities/api";

export function ShopAll({renderProducts}) {
    const [products, setProducts] = useState([]);

    const loadProducts = async () => {
            const response = await api.fetchAllProducts();
            setProducts(response);
    }

    useEffect(() => {
        loadProducts();
    },[])

    return (
        <div className="products-container">
            {renderProducts(products)}
        </div>    
    )

}