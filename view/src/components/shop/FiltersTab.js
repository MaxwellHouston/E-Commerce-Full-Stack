import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CategoryFilter } from "./filters/CategoryFilter";
import { ColorFilter } from "./filters/ColorFilter";
import { PriceFilter } from "./filters/PriceFilter";
import { SizeFilter } from "./filters/SizeFilter";
import { SportFilter } from "./filters/SportFilter";

export function FiltersTab({handleFilterChange}) {

    const [filters, setFilters] = useState({price:'', color:'', size:'', sport:'', category:''});
    
    const {sport, category} = useParams();

    useEffect(() => {
        handleFilterChange(filters);
    }, [filters, handleFilterChange]);

    const updateFilter = (filter, value) => {
        setFilters((prev) => ({
            ...prev,
            [filter]: value
        }));
    }

    const resetFilter = (fieldset) => {
        let inputs = fieldset.querySelectorAll("input");
        inputs.forEach((input) => {
            input.checked = false;
        })
    };

    return(
        <form id="filters-container">
            <button id='hide-show-btn'>Hide</button>
            <h1>Filters</h1>                       
            <PriceFilter updateFilter={updateFilter} resetFilter={resetFilter} price={filters.price} />
            <ColorFilter updateFilter={updateFilter} resetFilter={resetFilter} color={filters.color} />
            <SizeFilter updateFilter={updateFilter} resetFilter={resetFilter} size={filters.size} />
            {(!sport || sport==='all') && <SportFilter updateFilter={updateFilter} resetFilter={resetFilter} sport={filters.sport} />}
            {(!category) && <CategoryFilter updateFilter={updateFilter} resetFilter={resetFilter} category={filters.category} />}  
        </form>
    );
}
