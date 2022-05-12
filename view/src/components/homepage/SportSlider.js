import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import apiProducts from '../../utilities/api/apiProducts';

export function SportSlider() {
    
    const [sports, setSports] = useState([]);

    let scrollRightId;
    let scrollLeftId;

    useEffect( () => {
        loadSports();
    },[]);

    const loadSports = async () => {
        const data = await apiProducts.fetchSports();
        setSports(data);
    };

    const scrollRight = () => {
        document.getElementById('sports-slider').scrollLeft += 300;
    }
    const scrollLeft = () => {
        document.getElementById('sports-slider').scrollLeft -= 300;
    }

    const scrollIntervalRight = () => {
     scrollRightId = setInterval(scrollRight, 300);
    }
    const scrollIntervalLeft = () => {
     scrollLeftId = setInterval(scrollLeft, 300);
    }

    const stopScrollRight = () => {
        clearInterval(scrollRightId);
        scrollRightId = null;
    }
    const stopScrollLeft = () => {
        clearInterval(scrollLeftId);
        scrollLeftId = null;
    }

    const renderSports = () => {
        return sports.map((sport) => {
            const upperCase = sport[0].toUpperCase();
            const base = sport.slice(1);
            const title = upperCase+base;
            return <Link to={`/shop/${sport}`} className="small-shop-container" id={`shop-${sport}`} key={sport} style={{ backgroundImage: `url(${require(`../../utilities/images/backgrounds/${sport}-background.jpg`)})`}} >
                       <span>{title}</span>
                   </Link>})
    }
    
    
    
    return(
        <div className="sports-slider-container">
                <button className="left-slider-btn" onMouseDown={scrollIntervalLeft} onMouseUp={stopScrollLeft} onClick={scrollLeft}></button>
                <div className="sports-slider" id='sports-slider'>
                    {renderSports()}
                </div>                  
                <button className="right-slider-btn" onMouseDown={scrollIntervalRight} onMouseUp={stopScrollRight} onClick={scrollRight}></button>
        </div>
    )
}