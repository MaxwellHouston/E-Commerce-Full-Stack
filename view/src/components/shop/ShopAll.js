import React, {useState, useEffect} from "react";
import api from "../../utilities/api";

export function ShopAll({renderProducts, getParams, filters, filterProducts}) {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    const loadProducts = async () => {
            const response = await api.fetchAllProducts();
            setProducts(response);
    };

    useEffect(() => {
        loadProducts();
        getParams({});
    },[getParams]);

    useEffect(() => {
    setFilteredProducts(filterProducts(filters, products))
    },[filters, products, filterProducts]);

    return (
        <div className="products-container">
            {renderProducts(filteredProducts)}
        </div>    
    )

}