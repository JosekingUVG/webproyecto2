/**
 * @fileoverview Función para crear un mazo de cartas estándar de 52 cartas.
 * Cada carta se representa como un objeto con propiedades de rango y palo.
 * El mazo se puede usar para juegos de cartas como poker, blackjack, etc.
 * [
  { rank: "A", suit: "S" },
  { rank: "K", suit: "S" },
  ...
]
 */

/**
 * @fileoverview Función para crear un mazo de cartas estándar de 52 cartas.
 * Cada carta se representa como un objeto con propiedades de rango y palo.
 * El mazo se puede usar para juegos de cartas como poker, blackjack, etc.
 * [
 * { rank: "A", suit: "S" },
 * { rank: "K", suit: "S" },
 * ...
 * ]
 */

/**
 * Genera un mazo secuencial de 52 cartas estándar estructurado para Balatro.
 * @returns {Array<{rank: string, suit: string}>} Un array con las 52 cartas del mazo.
 */
export function createDeck() {
  // Rangos estándar utilizando 'T' para el 10 para hacer match con tus imágenes de Cloudinary
  const ranks = ["A", "K", "Q", "J", "T", "9", "8", "7", "6", "5", "4", "3", "2"];
  
  // Palos: S (Spades ♠️), font (Hearts ♥️), D (Diamonds ♦️), C (Clubs ♣️)
  const suits = ["S", "H", "D", "C"];
  
  const deck = [];

  for (const suit of suits) {
    for (const rank of ranks) {
      deck.push({ rank, suit });
    }
  }

  return deck;
}




