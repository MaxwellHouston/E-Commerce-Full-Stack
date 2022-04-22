import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import api from "../../utilities/api";

export function ShopSports() {
    const [products, setProducts] = useState([]);
    const { sport } = useParams();

    const loadProducts = async (sport) => {
            const response = await api.fetchProductsBySport(sport);
            setProducts(response);
    }

    useEffect(() => {
        loadProducts(sport);
    },[sport])

    return (
        <button >bleh</button>
    )

}