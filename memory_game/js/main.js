console.log("Up and running!");





var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png",
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png",
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png",
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png",
}
];


var cardsInPlay = [];







function checkForMatch () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
	} else {
			alert("Sorry, try again.");
	}
};

checkForMatch();

var flipCard = function () {
	


//Unable to determine why var cardID is undefined when following pre-work instructions.
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	if (cardsInPlay.length === 2){
		checkForMatch();
	} 
};

flipCard();

flipCard(0);
flipCard(2);

