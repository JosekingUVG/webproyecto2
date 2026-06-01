import { getCardValue } from '../cards/getCardValue.js';

/**
 * Calcula la suma total de los valores numéricos de un grupo de cartas.
 * Equivale a la variable 'suma_cartas' en la fórmula de puntuación de Balatro.
 * * @param {Array<{rank: string, suit: string}>} cards - Array de objetos carta.
 * @returns {number} La suma total de los valores de las cartas (0 si el array está vacío).
 */
export function calculateCardSum(cards) {
  if (!Array.isArray(cards) || cards.length === 0) {
    return 0;
  }

  // Iteramos sobre las cartas acumulando el valor numérico de cada una
  return cards.reduce((accumulator, currentCard) => {
    return accumulator + getCardValue(currentCard);
  }, 0);
}