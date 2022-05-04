import React, {useState, useEffect} from "react";
import api from "../../utilities/api";
import { Breadcrumbs } from "./Breadcrumbs";
import { FiltersTab } from "./FiltersTab";
import { ProductView } from "./ProductView";

export function Shop() {
    const [products, setProducts] = useState([]);
    const [filters, setFilters] = useState({price:'', color:'', size:'', sport:'', category:''});

    const loadProducts = async () => {
            const response = await api.fetchAllProducts();
            setProducts(response);
    }

    const handleFilterChange = (filterObject) => {
        setFilters(filterObject);
    }

    const renderProducts = () => {
        return products.map(product => <ProductView key={product.id} product={product} />);
    };

    useEffect(() => {
        loadProducts();
    },[])

    return (
        <div className="shop-page">
            <Breadcrumbs />
            <FiltersTab handleFilterChange={handleFilterChange} />
            <div className="products-container">
                {renderProducts()}
            </div> 
        </div>
        
    )

}