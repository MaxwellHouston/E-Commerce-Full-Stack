import React, { useState, useEffect } from "react";
import apiProducts from '../../utilities/api/apiProducts';
import { SlidingContainer } from "../animated/sliding-container/SlidingContainer";
import { SportCard } from "./SportCard";

export function SportSlider() {

    const [sportCards, setSportCards] = useState([]);

    useEffect( () => {
        loadSports();
    },[]);


    const loadSports = async () => {
        const data = await apiProducts.fetchSports();
        if(data.length === 0) return;
        let cards = data.map(sport => <SportCard sport={sport} key={sport} />);
        setSportCards(cards);
    };

    return (
        <SlidingContainer cardList={sportCards} sliderId={'sports-slider'} style={{ color: '#0f0f59', fontSize: 50 }} distance={500} />
    )
}

