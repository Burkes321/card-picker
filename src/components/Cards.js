import React from 'react'
import { useEffect, useState } from 'react';
import Card from './subcomponents/Card';


const Cards = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [drawnCard1, setDrawnCard1] = useState(null);
    const [drawnCard2, setDrawnCard2] = useState(null);
    const [count, setCount] = useState(52);

    // hitting the API

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`);
            const data = await response.json();
            setItems(data);
            setIsLoading(false);
        }

        fetchData();
    }, []);

    // Fetch from API on click, using existing deck ID

    async function drawCard() {
        const response = await fetch(`https://deckofcardsapi.com/api/deck/${items.deck_id}/draw/?count=1`);
        const data = await response.json();
        console.log(data.cards[0]);
        if (drawnCard1 === null) {
            setDrawnCard1(data.cards[0]);
        } else if (drawnCard1 != null && drawnCard2 === null) {
            setDrawnCard2(data.cards[0]);
        } else {
            console.log("can't add more");
        }
    }

    return (
        <div className='card-container'>

            <div className='snap'>
                {drawnCard2 ? drawnCard1.value === drawnCard2.value ? (<h1>Value Snap!</h1>) : (<p></p>) : (<p></p>)}
                {drawnCard2 ? drawnCard1.suit === drawnCard2.suit ? (<h1>Suit Snap!</h1>) : (<p></p>) : (<p></p>)}
            </div>

            <div className='card-container__cards'>

                {drawnCard1 ? (<Card value={drawnCard1.value} suit={drawnCard1.suit} img={drawnCard1.image} />) : (<p className='card'></p>)}
                {drawnCard2 ? (<Card value={drawnCard2.value} suit={drawnCard2.suit} img={drawnCard2.image} />) : (<p className='card'></p>)}



            </div>

            <button onClick={drawCard}>Draw a card here!</button>
        </div>
    )
}


export default Cards
