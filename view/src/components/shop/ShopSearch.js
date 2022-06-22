import React, {useState, useEffect, useContext} from "react";
import { SearchContext } from "../context/SearchContext";

export function ShopSearch({renderProducts, getParams, filters, filterProducts}) {
    const [filteredProducts, setFilteredProducts] = useState([]);

    const { searchResults, searchText } = useContext(SearchContext);

    useEffect(() => {
        getParams({sport: 'search', category: `"${searchText}"`});
    },[getParams, searchText]);

    useEffect(() => {
    setFilteredProducts(filterProducts(filters, searchResults))
    },[filters, searchResults, filterProducts]);

    const renderSearch = () => {
        if(filteredProducts.length === 0){
            return <div className="no-products">No products found</div>
        } else {
            return renderProducts(filteredProducts);
        }
    }

    return (
        <div className="products-container">
            {renderSearch()}
        </div>    
    )

}