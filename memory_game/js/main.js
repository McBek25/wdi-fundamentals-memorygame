console.log("Up and running!");





var cards = ["queen", "queen", "king", "king"]

var cardsInPlay = []







function checkForMatch () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
	} else {
			alert("Sorry, try again.");
	}
};

checkForMatch();

function flipCard () {
	cardsInPlay.push(cards[cardId]);
	console.log("User flipped " + cards[cardId]);
	
	if (cardsInPlay.length === 2){
	} 
};


flipCard();
flipCard(0);
flipCard(2);