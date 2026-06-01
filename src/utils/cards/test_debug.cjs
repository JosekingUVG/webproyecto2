// Forzamos la carga manual
const { createDeck } = require('./createDeck.js');
const { shuffleDeck } = require('./shffleDeck.js'); 
const { drawCards } = require('./drawCards.js');
const { getCardValue } = require('./getCardValue.js');

console.log("Probando carga directa...");
const mazo = createDeck();
console.log("Cartas creadas:", mazo.length);

const { hand } = drawCards(shuffleDeck(mazo), 8);
console.log("Mano extraída:");
hand.forEach(c => console.log(`${c.rank}${c.suit} vale: ${getCardValue(c)}`));