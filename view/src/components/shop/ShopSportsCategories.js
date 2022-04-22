import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import api from "../../utilities/api";

export function ShopSportsCategories() {
    const [products, setProducts] = useState([]);
    const {sport, category} = useParams();

    const loadProducts = async (sport, category) => {
            const response = await api.fetchProductsBySportAndCategory(sport, category);
            setProducts(response);
    }

    useEffect(() => {
        loadProducts(sport, category)
    }, [sport, category])

    return (
        <button >bleh</button>
    )

}