import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import api from "../../utilities/api";
import { Breadcrumbs } from "./Breadcrumbs";
import { FiltersTab } from "./FiltersTab";
import { ProductView } from "./ProductView";

export function ShopSportsCategories() {
    const [products, setProducts] = useState([]);
    const {sport, category} = useParams();

    const loadProducts = async (sport, category) => {
            const response = await api.fetchProductsBySportAndCategory(sport, category);
            setProducts(response);
    }

    useEffect(() => {
        loadProducts(sport, category)
    }, [sport, category]);

    const renderProducts = () => {
        return products.map(product => <ProductView key={product.id} product={product} />);
    }

    return (
        <div className="shop-page">
            <Breadcrumbs />
            <FiltersTab />
            <div className="products-container">
                {renderProducts()}
            </div> 
        </div>
    )

}