import React, {useState, useCallback, useEffect} from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Breadcrumbs } from "./Breadcrumbs";
import { FiltersTab } from "./FiltersTab";
import { ProductView } from "./ProductView";
import { ShopAll } from "./ShopAll";
import { ShopCategories } from "./ShopCategories";
import { ShopSports } from "./ShopSports";
import { ShopSportsCategories } from "./ShopSportsCategories";
import currency from 'currency.js';
import apiCarts from "../../utilities/api/apiCarts";
import { NoUserModal } from "../Modal/NoUserModal";

export function Shop({user}) {
    const [filters, setFilters] = useState({price:'', color:'', size:'', sport:'', category:''});
    const [cart, setCart] = useState({});
    const [urlParams, setUrlParams] = useState({});

    useEffect(() => {
        loadCart();
    },[]);

    const loadCart = async () => {
        const activeCart = await apiCarts.fetchActiveCart();
        setCart(activeCart);
    };

    const getParams = useCallback((paramObject) => {
        setUrlParams(paramObject);
    },[]);

    const handleFilterChange = (filterObject) => {
        setFilters(filterObject);
    };

    const filterProducts = (filterObject, products) => {
        let filteredProducts = products;
        for (const filter in filterObject) {
            if(!filterObject[filter]) {
              continue;
            } else if (filter === 'price' ) {
              filteredProducts = filteredProducts.filter(product => currency(product.price).value >= filterObject.price[0] && currency(product.price).value <= filterObject.price[1])
            } else {
              filteredProducts = filteredProducts.filter(product => product[filter] === filterObject[filter]);
            }
          }
        return filteredProducts;
    }


    const renderProducts = (products) => {
        return products.map(product => <ProductView key={product.id} product={product} />);
    };

    return (
        <div className="shop-page">
            <Breadcrumbs urlParams={urlParams} />
            <FiltersTab handleFilterChange={handleFilterChange} urlParams={urlParams}/>
            <Routes>
                <Route path='/' element={<ShopAll renderProducts={renderProducts} getParams={getParams} filters={filters} filterProducts={filterProducts} />} />
                <Route path='/:sport' element={<ShopSports renderProducts={renderProducts}  getParams={getParams} filters={filters} filterProducts={filterProducts} />} />
                <Route path='/all/:category' element={<ShopCategories renderProducts={renderProducts} getParams={getParams} filters={filters} filterProducts={filterProducts} />} />
                <Route path='/:sport/:category' element={<ShopSportsCategories renderProducts={renderProducts} getParams={getParams} filters={filters} filterProducts={filterProducts} />} />
            </Routes>
            {!user.id && <NoUserModal />}
        </div>
        
    );
}