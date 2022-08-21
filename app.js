

const cardArray = [
 
  { 
    suit: "clubs",
    image: 'images/PNG-cards-1.3/2_of_clubs.png',
    value: 2
  },
  { 
    suit: "clubs",
    image: 'images/PNG-cards-1.3/3_of_clubs.png',
    value: 3
  },
  { 
    suit: "clubs",
    image: 'images/PNG-cards-1.3/4_of_clubs.png',
    value: 4
  },
  { 
    suit: "clubs",
    image: 'images/PNG-cards-1.3/5_of_clubs.png',
    value: 5
  },
  { 
    suit: "clubs",
    image: 'images/PNG-cards-1.3/6_of_clubs.png',
    value: 6
  },
  { 
    suit: "clubs",
    image: 'images/PNG-cards-1.3/7_of_clubs.png',
    value: 7
  },
  { 
    suit: "clubs",
    image: 'images/PNG-cards-1.3/8_of_clubs.png',
    value: 8
  },
  { 
    suit: "clubs",
    image: 'images/PNG-cards-1.3/9_of_clubs.png',
    value: 9
  },
  { 
    suit: "clubs",
    image: 'images/PNG-cards-1.3/10_of_clubs.png',
    value: 10
  },
  { 
    suit: "clubs",
    image: 'images/PNG-cards-1.3/ace_of_clubs.png',
    value: 1
  },
  { 
    suit: "clubs",
    image: 'images/PNG-cards-1.3/jack_of_clubs2.png',
    value: 11
  },
  { 
    suit: "clubs",
    image: 'images/PNG-cards-1.3/queen_of_clubs2.png',
    value: 12
  },
  { 
    suit: "clubs",
    image: 'images/PNG-cards-1.3/king_of_clubs2.png',
    value: 13
  },
  {
    suit: "diamonds",
    image: 'images/PNG-cards-1.3/2_of_diamonds.png',
    value: 2
  },
  {
    suit: "diamonds",
    image: 'images/PNG-cards-1.3/3_of_diamonds.png',
    value: 3
  },
  {
    suit: "diamonds",
    image: 'images/PNG-cards-1.3/4_of_diamonds.png',
    value: 4
  },
  {
    suit: "diamonds",
    image: 'images/PNG-cards-1.3/5_of_diamonds.png',
    value: 5
  },
  {
    suit: "diamonds",
    image: 'images/PNG-cards-1.3/6_of_diamonds.png',
    value: 6
  },
  {
    suit: "diamonds",
    image: 'images/PNG-cards-1.3/7_of_diamonds.png',
    value: 7
  },
  {
    suit: "diamonds",
    image: 'images/PNG-cards-1.3/8_of_diamonds.png',
    value: 8
  },
  {
    suit: "diamonds",
    image: 'images/PNG-cards-1.3/9_of_diamonds.png',
    value: 9
  },
  {
    suit: "diamonds",
    image: 'images/PNG-cards-1.3/10_of_diamonds.png',
    value: 10
  },
  {
    suit: "diamonds",
    image: 'images/PNG-cards-1.3/ace_of_diamonds.png',
    value: 1
  },
  {
    suit: "diamonds",
    image: 'images/PNG-cards-1.3/jack_of_diamonds2.png',
    value: 11
  },
  {
    suit: "diamonds",
    image: 'images/PNG-cards-1.3/queen_of_diamonds2.png',
    value: 12
  },
  {
    suit: "diamonds",
    image: 'images/PNG-cards-1.3/king_of_diamonds2.png',
    value: 13
  },
  {
    suit: "hearts",
    image: 'images/PNG-cards-1.3/2_of_hearts.png',
    value: 2
  },
  {
    suit: "hearts",
    image: 'images/PNG-cards-1.3/3_of_hearts.png',
    value: 3
  },
  {
    suit: "hearts",
    image: 'images/PNG-cards-1.3/4_of_hearts.png',
    value: 4
  },
  {
    suit: "hearts",
    image: 'images/PNG-cards-1.3/5_of_hearts.png',
    value: 5
  },
  {
    suit: "hearts",
    image: 'images/PNG-cards-1.3/6_of_hearts.png',
    value: 6
  },
  {
    suit: "hearts",
    image: 'images/PNG-cards-1.3/7_of_hearts.png',
    value: 7
  },
  {
    suit: "hearts",
    image: 'images/PNG-cards-1.3/8_of_hearts.png',
    value: 8
  },
  {
    suit: "hearts",
    image: 'images/PNG-cards-1.3/9_of_hearts.png',
    value: 9
  },
  {
    suit: "hearts",
    image: 'images/PNG-cards-1.3/10_of_hearts.png',
    value: 10
  },
  {
    suit: "hearts",
    image: 'images/PNG-cards-1.3/ace_of_hearts.png',
    value: 1
  },
  {
    suit: "hearts",
    image: 'images/PNG-cards-1.3/jack_of_hearts2.png',
    value: 11
  },
  {
    suit: "hearts",
    image: 'images/PNG-cards-1.3/queen_of_hearts2.png',
    value: 12
  },
  {
    suit: "hearts",
    image: 'images/PNG-cards-1.3/king_of_hearts2.png',
    value: 13
  },
  {
    suit: "spades",
    image: 'images/PNG-cards-1.3/2_of_spades.png',
    value: 2
  },
  {
    suit: "spades",
    image: 'images/PNG-cards-1.3/3_of_spades.png',
    value: 3
  },
  {
    suit: "spades",
    image: 'images/PNG-cards-1.3/4_of_spades.png',
    value: 4
  },
  {
    suit: "spades",
    image: 'images/PNG-cards-1.3/5_of_spades.png',
    value: 5
  },
  {
    suit: "spades",
    image: 'images/PNG-cards-1.3/6_of_spades.png',
    value: 6
  },
  {
    suit: "spades",
    image: 'images/PNG-cards-1.3/7_of_spades.png',
    value: 7
  },
  {
    suit: "spades",
    image: 'images/PNG-cards-1.3/8_of_spades.png',
    value: 8
  },
  {
    suit: "spades",
    image: 'images/PNG-cards-1.3/9_of_spades.png',
    value: 9
  },
  {
    suit: "spades",
    image: 'images/PNG-cards-1.3/10_of_spades.png',
    value: 10
  },
  {
    suit: "spades",
    image: 'images/PNG-cards-1.3/ace_of_spades.png',
    value: 1
  },
  {
    suit: "spades",
    image: 'images/PNG-cards-1.3/jack_of_spades2.png',
    value: 11
  },
  {
    suit: "spades",
    image: 'images/PNG-cards-1.3/queen_of_spades2.png',
    value: 12
  },
  {
    suit: "spades",
    image: 'images/PNG-cards-1.3/king_of_spades2.png',
    value: 13
  },
];
//shuffle deck



function shuffle(arr) {
  for (let i = 0; i < arr.length; i++) {
    let j = Math.floor(Math.random() * (i+1));
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}

shuffle(cardArray);

//create new deck of unused cards

let unUsedCards = cardArray;





 function dealCards() {

  for (let i = 0; i < 7; i++) {
      const playerDeal = document.getElementById("player-deal");
      const playerCards = document.createElement('img');
      playerCards.setAttribute('src', unUsedCards[i].image);
      playerDeal.append(playerCards);
      
      unUsedCards.splice(i, 1);
  }
   
 }

 console.log(unUsedCards);



 
function dealOpponentCards() {

  for (let i = 0; i < 7; i++) {
    const opponentDeal = document.getElementById("opponent-deal");
    const opponentCards = document.createElement('img');
    opponentCards.setAttribute('src', 'images/PNG-cards-1.3/cardback.jfif');
    opponentDeal.append(opponentCards);
    unUsedCards.splice(i, 1);
  }

}


dealCards();
dealOpponentCards();

const dealCard = document.getElementById('grid');

dealCard.addEventListener('click', () => {
  const playingArea = document.getElementById('playing-area');
  const dealtCard = document.createElement('img');
  dealtCard.setAttribute('src', unUsedCards[0].image);
  playingArea.append(dealtCard);
  let trump = document.getElementById('trump');
  trump.innerHTML = unUsedCards[0].suit;
  unUsedCards.splice(0, 1);
  
})










