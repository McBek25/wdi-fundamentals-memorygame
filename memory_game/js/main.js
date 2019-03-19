console.log("Up and running!");





var cards = ["queen", "queen", "king", "king"]

cardsInPlay = []

var cardOne = cards[0];

cardsInPlay.push(cardOne);
cardsInPlay;


console.log("User flipped " + cardOne);

var cardTwo = cards[2];

cardsInPlay.push(cardTwo);
cardsInPlay;

console.log("User flipped " + cardTwo);



if (cardsInPlay.length === 2) {

	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}

