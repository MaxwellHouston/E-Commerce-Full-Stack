import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import api from "../../utilities/api";

export function ShopCategories({renderProducts, getParams}) {
    const [products, setProducts] = useState([]);
    const { category } = useParams();

    const loadProducts = async (category) => {
            const response = await api.fetchProductsByCategory(category);
            setProducts(response);
    };

    useEffect(() => {
        loadProducts(category);
        getParams({category});
    }, [category, getParams]);

    return (
        <div className="products-container">
            {renderProducts(products)}
        </div>
    );
}