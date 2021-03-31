import React from 'react'
import {useEffect, useState} from 'react';

const Cards = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [drawnCard1, setDrawnCard1] = useState(null);
    const [haveCard1, setHaveCard1] = useState(false);
    const [drawnCard2, setDrawnCard2] = useState(null);
    const [haveCard2, setHaveCard2] = useState(false);

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
            setHaveCard1(true);
        } else if (drawnCard1 != null && drawnCard2 === null) {
            setDrawnCard2(data.cards[0]);
            setHaveCard2(true);
        } else { 
            console.log("can't add more");
        }
    }

    return (
        <div className='cardContainer'>

            <div className='cardContainer__cards'>
                {haveCard1 ? 
                (<div>
                    <h1>{drawnCard1.value} of {drawnCard1.suit}</h1>
                    <img src={drawnCard1.image}/>
                </div>) : 
                (<h1>Please pick a card</h1>)}
    
                {haveCard2 ? 
                (<div>
                    <h1>{drawnCard2.value} of {drawnCard2.suit}</h1>
                    <img src={drawnCard2.image}/>
                </div>) : 
                (<h1>Please pick a card</h1>)}
            </div>



            <button onClick={drawCard}>Draw a card here!</button> 
        </div>
    )
}


export default Cards
