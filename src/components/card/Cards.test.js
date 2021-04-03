import ReactDOM from 'react-dom';
import React from 'react';
import Cards, { fetchData, drawCard } from './Cards';

test('Cards render without crashing', () => { 
    const div = document.createElement('div');
    ReactDOM.render(<Cards />, div);
});

// test('we pull only one deck of cards from the API each time', async () => { 
//     const deck = await fetchData();

//     expect(deck.success).toEqual(true);
//     expect(deck.shuffled).toEqual(true);
// });

// test('when we pull a card from the deck, the count decreases', async () => { 
//     const drawnCard = await 
// });