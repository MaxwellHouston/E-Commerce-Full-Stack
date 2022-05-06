import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import api from "../../utilities/api";

export function ShopSportsCategories({renderProducts, getParams}) {
    const [products, setProducts] = useState([]);
    const {sport, category} = useParams();
    const productList = renderProducts(products);

    const loadProducts = async (sport, category) => { 
            const response = await api.fetchProductsBySportAndCategory(sport, category);
            setProducts(response);
    };

    useEffect(() => {  
        loadProducts(sport, category);
        getParams({sport, category});
    }, [sport, category, getParams]);

    return (
        <div className="products-container">
            {productList}
        </div> 
    );
}