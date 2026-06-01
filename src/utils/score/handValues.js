/**
 * @fileoverview Constantes de balanceo para los puntajes base de las manos de póker.
 * Cada tipo de mano tiene un valor base asignado, balanceado para que el puntaje 
 * total sea alcanzable dentro de los rangos definidos por ronda.
 */

export const HAND_VALUES = {
  royalFlush: 300,    // Escalera Real: 300 puntos
  straightFlush: 250, // Escalera de Color: 250 puntos
  fourOfAKind: 200,   // Póker: 200 puntos
  fullHouse: 160,     // Full House: 160 puntos
  flush: 120,         // Color: 120 puntos
  straight: 100,      // Escalera: 100 puntos
  threeOfAKind: 70,   // Trío: 70 puntos
  twoPair: 50,        // Doble Pareja: 50 puntos
  pair: 30,           // Pareja: 30 puntos
  highCard: 10,       // Carta Alta: 10 puntos
};