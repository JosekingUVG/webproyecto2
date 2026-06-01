import { JOKERS_CONFIG } from './jokerConfig.js';

/**
 * 1.1 & 1.2 Cálculo del multiplicador matemático individual.
 * Formula: 1 + (cantidad_cartas_del_palo * 0.5)
 * * @param {number} count - Cantidad de cartas del palo objetivo.
 * @returns {number} Multiplicador generado por ese joker específico (mínimo 1.0).
 */
export const calculateJokerMultiplier = (count) => {
  return 1 + (count * 0.5);
};

/**
 * Calcula el multiplicador total acumulado basado en todos los jokers activos del jugador.
 * * @param {Array<string>} activeJokerIds - IDs de los jokers equipados (ej: ['chaotic_joker', 'sad_joker']).
 * @param {Array<{rank: string, suit: string}>} cards - Cartas jugadas en la mano actual.
 * @returns {number} Multiplicador total acumulado (si no hay jokers, retorna 1.0).
 */
export function calculateTotalMultiplier(activeJokerIds, cards) {
  if (!Array.isArray(activeJokerIds) || activeJokerIds.length === 0) {
    return 1.0;
  }

  let totalMultiplier = 1.0;

  // Evaluamos cada joker activo que tenga el jugador
  activeJokerIds.forEach(jokerId => {
    const joker = JOKERS_CONFIG[jokerId];
    if (!joker) return; // Control por si envían un ID inválido

    // Contamos cuántas cartas en la mano coinciden con el palo objetivo de este Joker
    const matchingCardsCount = cards.filter(
      card => card.suit.toUpperCase() === joker.suitTarget.toUpperCase()
    ).length;

    // Calculamos el multiplicador que aporta este joker individual
    const jokerBonus = calculateJokerMultiplier(matchingCardsCount);

    // En Balatro los multiplicadores se acumulan de forma multiplicativa o aditiva.
    // Siguiendo tu lógica base, acumulamos multiplicando el impacto de cada joker activo:
    totalMultiplier *= jokerBonus;
  });

  return totalMultiplier;
}