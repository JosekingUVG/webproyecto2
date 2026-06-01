/**
 * @fileoverview Función para asignarle valor y descripción a cada joker, así como la lógica de cómo afecta el puntaje según el palo objetivo.
 * Cada joker tiene un palo objetivo (picas, corazones, diamantes o tréboles) y su efecto se basa en la cantidad de cartas de ese palo presentes en la mano final del jugador.
 * El puntaje adicional que otorga cada joker se calcula multiplicando la cantidad de cartas del palo objetivo por un factor específico de cada joker.
 * Esta configuración permite una integración flexible de los jokers en la lógica de puntuación del juego, incentivando a los jugadores a formar manos con ciertos palos para maximizar su puntaje.
 */


export const JOKERS_CONFIG = {
  'chaotic_joker': {
    name: 'Chaotic Joker',
    image: '../../assets/jokers/Chaotic_Joker.png', // Ahora es un String plano
    suitTarget: 'D', 
    description: 'Aumenta el puntaje según la cantidad de cartas de diamantes en la mano.'
  },
  'sad_joker': {
    name: 'Sad Joker',
    image: '../../assets/jokers/Sad_Joker.png',     // Cambiado a String
    suitTarget: 'C', 
    description: 'Aumenta el puntaje según la cantidad de cartas de tréboles en la mano.'
  },
  'wishful_joker': {
    name: 'Wishful Joker',
    image: '../../assets/jokers/Wishful_Joker.png', // Cambiado a String
    suitTarget: 'S', 
    description: 'Aumenta el puntaje según la cantidad de cartas de picas en la mano.'
  },
  'puzzled_joker': {
    name: 'Puzzled Joker',
    image: '../../assets/jokers/Puzzled_Joker.png', // Cambiado a String
    suitTarget: 'H', 
    description: 'Aumenta el puntaje según la cantidad de cartas de corazones en la mano.'
  }
};
