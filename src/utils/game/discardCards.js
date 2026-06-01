import { drawCards } from '../cards/drawCards.js';

/**
 * Maneja el descarte de cartas seleccionadas y las reemplaza por cartas del mazo restante.
 * 
 * @param {Array} currentHand - Las cartas actuales que el jugador tiene en la mano (máximo 8).
 * @param {Array} selectedCards - Las cartas que el jugador seleccionó para descartar.
 * @param {Array} remainingDeck - El mazo restante de donde se robarán las nuevas cartas.
 * @returns {{ newHand: Array, newDeck: Array }} La nueva mano estructurada y el mazo actualizado.
 */
export function discardCards(currentHand, selectedCards, remainingDeck) {
  // 1. Filtrar la mano para remover físicamente las cartas seleccionadas
  // Identificamos las cartas combinando rango y palo como ID único temporal
  const selectedKeys = selectedCards.map(c => `${c.rank}-${c.suit}`);
  const filteredHand = currentHand.filter(card => !selectedKeys.includes(`${card.rank}-${card.suit}`));

  // 2. Determinar cuántas cartas necesitamos reponer para volver a tener el tamaño original
  const cardsToDraw = currentHand.length - filteredHand.length;

  if (cardsToDraw === 0 || remainingDeck.length === 0) {
    return { newHand: [...currentHand], newDeck: [...remainingDeck] };
  }

  // 3. Robar la cantidad exacta de cartas faltantes desde el mazo restante de forma aleatoria
  const { hand: drawnCards, remainingDeck: newDeck } = drawCards(remainingDeck, cardsToDraw);

  // 4. Unir las cartas que se quedaron en la mano con las nuevas cartas robadas
  const newHand = [...filteredHand, ...drawnCards];

  return {
    newHand,
    newDeck
  };
}