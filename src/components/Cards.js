import React from 'react'
import {useEffect, useState} from 'react';

const Cards = () => {
    const [items, setItems] = useState(null);
    const [drawnCard, setDrawnCard] = useState(null);
    const [deckID, setDeckID] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // hitting the API

    async function fetchData() { 
        const response = await fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`);
        const data = await response.json();
        setItems(data);
        setDeckID(data.deck_id);
        setIsLoading(false);
        if (isLoading === false) { 
            console.log(items);
            console.log(deckID);
        }
    }

    useEffect(() => { 
        fetchData();
    }, []);

    // function drawCard() { 
    //     const response = fetch(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`);
    //     const data = response.json();
    // }



    return (
        <div>
            {isLoading ? "Loading..." : 
            (<h1>{items.deck_id}</h1>)}

            <button>Draw a Card!</button>
        </div>
    )
}


export default Cards
