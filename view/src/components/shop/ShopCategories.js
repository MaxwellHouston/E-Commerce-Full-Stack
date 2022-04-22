import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import api from "../../utilities/api";

export function ShopCategories() {
    const [products, setProducts] = useState([]);
    const { category } = useParams();

    const loadProducts = async (category) => {
            const response = await api.fetchProductsByCategory(category);
            setProducts(response); 
    }

    useEffect(() => {
        loadProducts(category)
    }, [category])

    return (
        <button >bleh</button>
    )

}