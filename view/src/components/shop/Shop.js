import React, {useState, useEffect, useCallback} from "react";
import { Routes, Route } from "react-router-dom";
import { Breadcrumbs } from "./Breadcrumbs";
import { FiltersTab } from "./FiltersTab";
import { ProductView } from "./ProductView";
import { ShopAll } from "./ShopAll";
import { ShopCategories } from "./ShopCategories";
import { ShopSports } from "./ShopSports";
import { ShopSportsCategories } from "./ShopSportsCategories";

export function Shop() {
    const [filters, setFilters] = useState({price:'', color:'', size:'', sport:'', category:''});
    const [urlParams, setUrlParams] = useState({});

    const getParams = useCallback((paramObject) => {
        setUrlParams(paramObject);
    },[]);

    const handleFilterChange = (filterObject) => {
        setFilters(filterObject);
    };

    const filterProducts = (filterObject, products) => {
        let filteredProducts = [];
        for (const filter in filterObject) {
            filterProducts.push()
        }
    }


    const renderProducts = (products) => {
        return products.map(product => <ProductView key={product.id} product={product} />);
    };

    return (
        <div className="shop-page">
            <Breadcrumbs urlParams={urlParams} />
            <FiltersTab handleFilterChange={handleFilterChange} urlParams={urlParams}/>
            <Routes>
                <Route path='/' element={<ShopAll renderProducts={renderProducts} getParams={getParams} />} />
                <Route path='/:sport' element={<ShopSports renderProducts={renderProducts}  getParams={getParams} />} />
                <Route path='/all/:category' element={<ShopCategories renderProducts={renderProducts} getParams={getParams} />} />
                <Route path='/:sport/:category' element={<ShopSportsCategories renderProducts={renderProducts} getParams={getParams} />} />
            </Routes>
        </div>
        
    );
}