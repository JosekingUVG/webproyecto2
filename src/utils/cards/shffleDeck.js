/**
 * @fileoverview Función para mezclar el mazo de cartas generado en createDeck.js utilizando el algoritmo de Fisher-Yates.
 * Este algoritmo garantiza una mezcla uniforme y aleatoria de las cartas.
 * La función toma un mazo de cartas como entrada y devuelve un nuevo mazo mezclado.
 */

/**
 * Función helper opcional para mezclar (shuffle) el mazo usando el algoritmo Fisher-Yates.
 * @param {Array} deck - El mazo de cartas a mezclar.
 * @returns {Array} Un nuevo mazo completamente aleatorizado.
 */
import { createDeck } from "./createDeck.js";

export function shuffleDeck(deck) {
  const shuffled = [...deck];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}