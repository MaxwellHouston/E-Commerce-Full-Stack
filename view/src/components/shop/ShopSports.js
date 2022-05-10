import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import apiProducts from "../../utilities/api/apiProducts";

export function ShopSports({renderProducts, getParams, filters, filterProducts}) {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const { sport } = useParams();

    const loadProducts = async (sport) => {
            const response = await apiProducts.fetchProductsBySport(sport);
            setProducts(response);
    }

    useEffect(() => {
        loadProducts(sport);
        getParams({sport});
    },[sport, getParams]);

    useEffect(() => {
        setFilteredProducts(filterProducts(filters, products))
        },[filters, products, filterProducts]);

    return (
        <div className="products-container">
            {renderProducts(filteredProducts)}
        </div> 
    )

}