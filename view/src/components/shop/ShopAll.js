import React, {useState, useEffect} from "react";
import api from "../../utilities/api";

export function ShopAll({renderProducts, filters, filterProducts}) {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    const loadProducts = async () => {
            const response = await api.fetchAllProducts();
            setProducts(response);
    };

    useEffect(() => {
        loadProducts();
    },[]);

    useEffect(() => {
    setFilteredProducts(filterProducts(filters, products))
    },[filters, products, filterProducts]);

    return (
        <div className="products-container">
            {renderProducts(filteredProducts)}
        </div>    
    )

}