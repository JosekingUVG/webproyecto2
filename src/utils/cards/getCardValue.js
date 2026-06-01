/**
 * Obtiene el valor numérico de una carta en base a su rango (rank).
 * Útil para ordenamiento de manos y validación de jugadas de poker.
 * * @param {string|object} card - El string del rango (ej: 'A', 'T', '5') o el objeto carta completo {rank, suit}.
 * @returns {number} El valor numérico de la carta (2 al 14).
 */
export function getCardValue(card) {
  // Extraemos el rango si nos pasan el objeto carta completo, o usamos el string si se pasa directo
  const rank = typeof card === 'object' && card !== null ? card.rank : card;

  // Aseguramos que sea un string y esté en mayúsculas por consistencia
  const cleanRank = String(rank).toUpperCase();

  // Diccionario para mapear los rangos no numéricos y la 'T' de tus assets
  const specialValues = {
    'A': 14,
    'K': 13,
    'Q': 12,
    'J': 11,
    'T': 10 // Mapeo de la 'T' que usamos para tus imágenes de Cloudinary (Ten)
  };

  // Si existe en el diccionario, devolvemos su peso. Si no, lo parseamos como entero (2-9)
  if (specialValues[cleanRank] !== undefined) {
    return specialValues[cleanRank];
  }

  const numericValue = parseInt(cleanRank, 10);

  // Control de seguridad por si viene un rango inválido que no se pueda parsear
  return isNaN(numericValue) ? 0 : numericValue;
}