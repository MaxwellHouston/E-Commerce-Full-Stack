import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import api from "../../utilities/api";

export function ShopCategories({renderProducts, getParams, filters, filterProducts}) {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const { category } = useParams();

    const loadProducts = async (category) => {
            const response = await api.fetchProductsByCategory(category);
            setProducts(response);
    };

    useEffect(() => {
        loadProducts(category);
        getParams({category});
    }, [category, getParams]);

    useEffect(() => {
        setFilteredProducts(filterProducts(filters, products))
        },[filters, products, filterProducts]);

    return (
        <div className="products-container">
            {renderProducts(filteredProducts)}
        </div>
    );
}