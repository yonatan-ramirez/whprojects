let pickCard = document.querySelector("#btn");
	usersCards = document.querySelector("#users-cards");
	lifeBar = document.querySelector('.life-bar');
	lastdrew = document.querySelector('#lastdrew');

let deckRank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
let deckSuit = ["♡", "♤", "♧", "♢"];
const deck = [];
const usersDeck = [];

let BuildDeck = function(rank, suit){
	this.rank = rank;
	this.suit = suit;
	this.color = this.suit === "♡" || this.suit === "♢" ? "red" : "black";
	};


deckSuit.forEach(function(s){
	deckRank.forEach(function(r){
		deck.push(new BuildDeck(r, s));
	});
});
pickCard.addEventListener('click', function(evt){
	if(deck.length){
	let randomNum = Math.floor(Math.random() * deck.length);
	let randomCard = deck.splice(randomNum, 1)[0];
	lastdrew.innerHTML = randomCard.rank + ' of '+ randomCard.suit;
	usersDeck.push(randomCard);
	// console.log(deck[randomNum]);
	// console.log(deck, usersDeck);
	usersCards.innerHTML += card(randomCard);
	}
	checkCards();
});
function checkCards(){
	deck.length ? pickCard.disabled = false : pickCard.disabled = true;
	lifeBar.style.height = `${deck.length}px`;
	lifeBar.style.backgroundColor = `hsl(0, 50%, 50%)`;

}

function card(cardObj){
	return `
	<li class="${cardObj.color}ui left floated compact center aligned segment card-in-hand">
	<button class="ui large button">
		<h2 style="color: ${cardObj.color}">${cardObj.rank} of ${cardObj.suit}</h2>
		<span class="return">
			RETURN
			<i class="reply icon"></i>
		</span>
	</button>
</li>`;
}
usersCards.addEventListener('click', function(evt){
	let thisCard = evt.target.parentElement;
	console.log(usersCards.children);
	let cardNum = [].indexOf.call(usersCards.children, thisCard);
	let returnCard = usersCards[cardNum];
	deck.push(usersDeck.splice(cardNum, 1)[0]);
	usersCards.removeChild(thisCard);
	checkCards();
});