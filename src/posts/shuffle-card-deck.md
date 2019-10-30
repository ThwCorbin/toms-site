---
title: Shuffle a Deck of Cards
description: Shuffle a deck of playing cards with JavaScript
tags: ['post', 'note', 'code']
date: 2019-10-30
updated: 2019-10-30
layout: layouts/post.njk
---

How do you shuffle a deck of playing cards? I created a shuffle function using the [Fisher–Yates Shuffle](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle 'The Fisher-Yates Shuffle Wikipedia entry') for a game I was working on, and I've tweaked that code a bit for this example. We will swap a random card from the unshuffled portion of a deck with the last unshuffled card in the deck. We then decrement the number of unshuffled cards and repeat. Got that?

Lets take a look at the code. First, I generate a new deck, which is an array of card objects. Then I pass the deck to a shuffle function.

<!END clip>

```javascript
const newDeck = () => {
  const deck = [];
  const suits = ['♤', '♢', '♧', '♡'];
  const ranks = [
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
    'A',
  ];

  // Build fresh deck as an array of objects
  for (let i = 0; i < ranks.length; i++) {
    for (let j = 0; j < suits.length; j++) {
      deck.push({
        card: ranks[i] + suits[j],
        rank: ranks[i],
        suit: suits[j],
        color: j % 2 === 0 ? 'black' : 'red',
      });
    }
  }
  return deck;
};
```

Now I the shuffle the array of card objects. Call `shuffle(newDeck())` passing the deck `newDeck()` returns.

```javascript
const shuffle = (deck) => {
  // deck is an array of card objects
  let numUnshuffledCards = deck.length;
  let randomUnshuffledCard;
  let lastUnshuffledCard;

  // While unshuffled cards remain
  while (numUnshuffledCards) {
    // Pick random number betweeen 0 inclusive and number of unshuffled cards
    // Then decrement the number of unshuffled cards by 1
    randomUnshuffledCard = Math.floor(Math.random() * numUnshuffledCards--);
    // Assign the last card in the unshuffled portion to a variable
    lastUnshuffledCard = deck[numUnshuffledCards];
    // Move the random card to the last unshuffled card's position
    deck[numUnshuffledCards] = deck[randomUnshuffledCard];
    // Move the last unshuffled card to the random card's previous position
    deck[randomUnshuffledCard] = lastUnshuffledCard;
  }

  return deck;
};

shuffle(newDeck());
```

I can simplify `shuffle()` with array destructuring.

```javascript
const shuffle = (deck) => {
  // deck is an array of card objects
  let numUnshuffledCards = deck.length;
  let randomUnshuffledCard;

  // While unshuffled cards remain
  while (numUnshuffledCards) {
    // Pick random number betweeen 0 inclusive and number of unshuffled cards
    // Then decrement the number of unshuffled cards by 1
    randomUnshuffledCard = Math.floor(Math.random() * numUnshuffledCards--);
    // Swap the random card with the last unshuffled card in the array
    [deck[randomUnshuffledCard], deck[numUnshuffledCards]] = [
      deck[numUnshuffledCards],
      deck[randomUnshuffledCard],
    ];
  }

  return deck;
};
```
