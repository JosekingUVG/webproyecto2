import { getCardValue } from '../cards/getCardValue.js';

/**
 * Detecta la jugada de poker más alta posible a partir de un grupo de cartas.
 * Soporta manos de hasta 5 cartas jugadas (estilo Balatro).
 * 
 * @param {Array<{rank: string, suit: string}>} cards - Array de cartas jugadas.
 * @returns {string} El ID de la mano detectada (ej: 'royalFlush', 'fullHouse', 'highCard').
 */
export function detectHand(cards) {
  if (!Array.isArray(cards) || cards.length === 0) return 'highCard';

  // 1. Convertir los rangos a sus valores numéricos y ordenar de mayor a menor
  const values = cards.map(card => getCardValue(card)).sort((a, b) => b - a);
  const suits = cards.map(card => card.suit.toUpperCase());

  // 2. Mapear frecuencias (Cuántas veces se repite cada número y cada palo)
  const rangeCounts = {};
  values.forEach(v => rangeCounts[v] = (rangeCounts[v] || 0) + 1);

  const suitCounts = {};
  suits.forEach(s => suitCounts[s] = (suitCounts[s] || 0) + 1);

  // Obtener las frecuencias como arreglos ordenados (ej: [3, 2] para un Full House)
  const frequencies = Object.values(rangeCounts).sort((a, b) => b - a);

  // 3. Validaciones de Palos y Continuidad (Color y Escalera)
  const isFlush = Object.values(suitCounts).some(count => count >= 5);
  
  // Para la escalera, verificamos si hay 5 valores únicos consecutivos
  let isStraight = false;
  const uniqueValues = [...new Set(values)]; // Quitamos duplicados por si hay pares
  
  if (uniqueValues.length >= 5) {
    // Comprobamos si la diferencia entre el primero y el quinto elemento es exactamente 4
    // (Como ya están ordenados de mayor a menor: uniqueValues[0] - uniqueValues[4] === 4)
    if (uniqueValues[0] - uniqueValues[4] === 4) {
      isStraight = true;
    }
    
    // CASO ESPECIAL: Escalera baja del As (A, 5, 4, 3, 2) -> Valores: [14, 5, 4, 3, 2]
    if (uniqueValues.includes(14) && 
        uniqueValues.includes(5) && 
        uniqueValues.includes(4) && 
        uniqueValues.includes(3) && 
        uniqueValues.includes(2)) {
      isStraight = true;
    }
  }

  // 4. ÁRBOL DE DECISIÓN LOGÍCO (De la mano más fuerte a la más débil)

  // -- ESCALERAS DE COLOR --
  if (isStraight && isFlush) {
    // Si es escalera de color y la carta más alta es un As (14), es Real.
    // Ojo: Si el As se usó abajo (A,5,4,3,2), la carta más alta real del grupo sería el 5.
    if (values.includes(14) && values.includes(13)) {
      return 'royalFlush';
    }
    return 'straightFlush';
  }

  // -- CUATRO DE UN PALO (PÓKER) --
  if (frequencies[0] === 4) return 'fourOfAKind';

  // -- FULL HOUSE --
  if (frequencies[0] === 3 && frequencies[1] === 2) return 'fullHouse';

  // -- COLOR (FLUSH) --
  if (isFlush) return 'flush';

  // -- ESCALERA (STRAIGHT) --
  if (isStraight) return 'straight';

  // -- TRÍO (THREE OF A KIND) --
  if (frequencies[0] === 3) return 'threeOfAKind';

  // -- DOBLE PAREJA (TWO PAIR) --
  if (frequencies[0] === 2 && frequencies[1] === 2) return 'twoPair';

  // -- PAREJA (PAIR) --
  if (frequencies[0] === 2) return 'pair';

  // -- CARTA ALTA --
  return 'highCard';
}