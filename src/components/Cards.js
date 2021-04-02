import React from 'react'
import { useEffect, useState } from 'react';
import Card from './subcomponents/Card';


const Cards = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [drawnCard1, setDrawnCard1] = useState(false);
    const [drawnCard2, setDrawnCard2] = useState(false);
    const [suitSnaps, setSuitSnaps] = useState(0);
    const [valueSnaps, setValueSnaps] = useState(0);
    const [count, setCount] = useState(52);

    // hitting the API

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`);
            const data = await response.json();
            setItems(data);
            console.log(data)
            setIsLoading(false);
        }

        fetchData();
    }, []);

    // Fetch from API on click, using existing deck ID

    async function drawCard() {
        const response = await fetch(`https://deckofcardsapi.com/api/deck/${items.deck_id}/draw/?count=1`);
        const data = await response.json();
        console.log(data);
        if (count === 52) { 
            // set the first card to the position on the right 
            setDrawnCard2(data.cards[0]);
            setCount(count => count - 1);
            console.log(count);
        } else if (count < 52) { 
            // set the first card as the one on the left, replace the right one with the new card. will do this for all cards from now on.
            setDrawnCard1(drawnCard2); 
            setDrawnCard2(data.cards[0]);
            setCount(count => count - 1);
            console.log(count);
            // If the values of the cards are the same then we add one to the snap counters
            if (drawnCard1.value === drawnCard2.value) { 
                setValueSnaps(valueSnaps => valueSnaps + 1)
            } else if (drawnCard1.suit === drawnCard2.suit) { 
                setSuitSnaps(suitSnaps => suitSnaps + 1)
            } else if (drawnCard1.value === drawnCard2.value && drawnCard1.suit === drawnCard2.suit) { 
                setValueSnaps(valueSnaps => valueSnaps + 1);
                setSuitSnaps(suitSnaps => suitSnaps + 1);
            }
            // Don't do anything when the count is zero
        } else if (count = 0) { 
            console.log('no more cards!');
        }
    }

    return (
        <div className='card-container'>

            <div className='snap'>
                {count === 0 ? (<h1>{valueSnaps} value snaps and {suitSnaps} suit snaps</h1>) : (<p></p>)}
                {drawnCard2 ? drawnCard1.value === drawnCard2.value ? (<h1>Value Snap!</h1>) : (<p></p>) : (<p></p>)}
                {drawnCard2 ? drawnCard1.suit === drawnCard2.suit ? (<h1>Suit Snap!</h1>) : (<p></p>) : (<p></p>)}
            </div>

            <div className='card-container__cards'>

                {drawnCard1 ? (<Card value={drawnCard1.value} suit={drawnCard1.suit} img={drawnCard1.image} />) : (<p className='card'></p>)}
                {drawnCard2 ? (<Card value={drawnCard2.value} suit={drawnCard2.suit} img={drawnCard2.image} />) : (<p className='card'></p>)}

            </div>
            {/* Need state for value match and pair match */}
            {count > 0 ? (<button onClick={drawCard}>Draw a card here!</button>) : ("")}
        </div>
    )
}


export default Cards
