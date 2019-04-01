console.log("Up and running!");





var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

/* comment out. code to be deleted per instructions:

var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);

var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);

*/

function checkForMatch () {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match!");
    } else {
        alert("Sorry, try again.");
    } //example in slides had console.log
    
};

function flipCard (cardId) {
    
    console.log("User flipped " + cards[cardId]);
    cardsInPlay.push(cards[cardId]);
    if (cardsInPlay.length === 2) {
        checkForMatch ();
   
        
        
    };

};

flipCard (2);






