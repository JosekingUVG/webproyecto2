/**
 * Emula la extracción aleatoria de un número específico de cartas de un mazo.
 * * @param {Array<{rank: string, suit: string}>} deck - El mazo actual (puede estar ordenado o mezclado).
 * @param {number} count - La cantidad de cartas a extraer (por defecto 8 para Balatro).
 * @returns {{hand: Array, remainingDeck: Array}} Un objeto con la mano extraída y el mazo restante.
 */
export function drawCards(deck, count = 8) {
  // Creamos una copia superficial del mazo para no mutar el array original directamente
  const remainingDeck = [...deck];
  const hand = [];

  // Extraemos cartas de forma aleatoria hasta alcanzar el conteo o vaciar el mazo
  for (let i = 0; i < count; i++) {
    if (remainingDeck.length === 0) break; // Control de seguridad por si el mazo se queda sin cartas

    // Seleccionamos un índice aleatorio basado en el tamaño actual del mazo restante
    const randomIndex = Math.floor(Math.random() * remainingDeck.length);
    
    // Splicing remueve la carta del mazo restante y la devuelve en un array de un elemento
    const [extractedCard] = remainingDeck.splice(randomIndex, 1);
    
    // Añadimos la carta a la mano del jugador
    hand.push(extractedCard);
  }

  return {
    hand,
    remainingDeck
  };
}