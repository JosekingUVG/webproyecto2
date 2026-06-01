import { detectHand } from './detectHand.js';
import { calculateCardSum } from './calculateCardSum.js';
import { HAND_VALUES } from './handValues.js';
import { calculateTotalMultiplier } from '../jokers/calculateMultiplier.js';

/**
 * Calcula el puntaje total final de una mano integrando el valor base del poker,
 * la suma de los valores de las cartas y los multiplicadores de los Jokers activos.
 * * Formula: score_final = (puntaje_base + suma_cartas) * multiplicador_jokers
 * * @param {Array<{rank: string, suit: string}>} cards - Las cartas jugadas en la mesa.
 * @param {Array<string>} activeJokerIds - Lista de IDs de los jokers que tiene el jugador.
 * @returns {{ score: number, handType: string, baseScore: number, cardSum: number, multiplier: number }} Breakdown del puntaje.
 */
export function calculateHandScore(cards, activeJokerIds = []) {
  // 1. Detectar el tipo de mano de póker (ej: 'flush')
  const handType = detectHand(cards);

  // 2. Obtener el valor base de la mano desde tus constantes balanceadas
  const baseScore = HAND_VALUES[handType] || 0;

  // 3. Calcular la suma del valor numérico de las cartas (A=14, K=13, T=10, etc.)
  const cardSum = calculateCardSum(cards);

  // 4. Calcular el multiplicador dinámico basado en los Jokers de palos configurados
  const finalMultiplier = calculateTotalMultiplier(activeJokerIds, cards);

  // 5. Aplicar la fórmula oficial de puntuación
  const finalScore = Math.round((baseScore + cardSum) * finalMultiplier);

  return {
    score: finalScore,
    handType,
    baseScore,
    cardSum,
    multiplier: finalMultiplier
  };
}