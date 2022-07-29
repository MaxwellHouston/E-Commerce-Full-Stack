import React, { useState, useEffect } from "react";
import { CategoryFilter } from "./filters/CategoryFilter";
import { ColorFilter } from "./filters/ColorFilter";
import { PriceFilter } from "./filters/PriceFilter";
import { SizeFilter } from "./filters/SizeFilter";
import { SportFilter } from "./filters/SportFilter";

export function FiltersTab({handleFilterChange, urlParams}) {

    const [filters, setFilters] = useState({price:'', color:'', size:'', sport:'', category:''});
    const [visible, setVisible] = useState(true);
    
    const {sport, category} = urlParams;

    useEffect(() => {
        handleFilterChange(filters);
    }, [filters, handleFilterChange]);

    const updateFilter = (filter, value) => {
        setFilters((prev) => ({
            ...prev,
            [filter]: value
        }));
    };

    const resetFilter = (fieldset) => {
        let inputs = fieldset.querySelectorAll("input");
        inputs.forEach((input) => {
            input.checked = false;
        })
    };

    const toggleTab = (e) => {
        e.preventDefault();
        visible ? setVisible(false) : setVisible(true);
    };

    const filterStyle = {
        transition: 'all 0.3s ease-out',
        transform: 'translate(-100%)'
    }

    return(
        <form id="filters-container" style={visible ? null : filterStyle}>
            <button id='hide-btn' onClick={toggleTab}>Hide</button>
            {!visible && <button id='show-btn' onClick={toggleTab}>Filters</button>}
            <h1>Filters</h1>                       
            <PriceFilter updateFilter={updateFilter} resetFilter={resetFilter} price={filters.price} />
            <ColorFilter updateFilter={updateFilter} resetFilter={resetFilter} color={filters.color} />
            <SizeFilter updateFilter={updateFilter} resetFilter={resetFilter} size={filters.size} />
            {(!sport || sport==='all') && <SportFilter updateFilter={updateFilter} resetFilter={resetFilter} sport={filters.sport} />}
            {(!category) && <CategoryFilter updateFilter={updateFilter} resetFilter={resetFilter} category={filters.category} />}  
        </form>
    );
}
