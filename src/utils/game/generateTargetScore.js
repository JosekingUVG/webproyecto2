/**
 * Genera un score objetivo aleatorio basado en la ronda actual.
 * Asegura matemáticamente que el score sea superior al de la ronda anterior.
 * 
 * @param {number} round - Número de la ronda actual (1, 2, 3...).
 * @param {number} previousTarget - El score objetivo de la ronda anterior (por defecto 0).
 * @returns {number} El score objetivo para la ronda actual.
 */
export function generateTargetScore(round, previousTarget = 0) {
  let min = 100;
  let max = 200;

  // Determinar los rangos según las reglas del documento
  if (round === 1) {
    min = 100; max = 200;
  } else if (round === 2) {
    min = 150; max = 300;
  } else if (round === 3) {
    min = 250; max = 400;
  } else if (round === 4) {
    min = 400; max = 500;
  } else {
    // Ronda 5 en adelante
    min = 450; max = 800;
  }

  let targetScore = 0;
  let attempts = 0;

  // Intentar generar un número aleatorio en el rango que supere al anterior
  // Ponemos un límite de intentos (50) por si el balanceo numérico de la ronda anterior fuera extremo
  do {
    targetScore = Math.floor(Math.random() * (max - min + 1)) + min;
    attempts++;
  } while (targetScore <= previousTarget && attempts < 50);

  // Si por mala suerte del rango aleatorio no superó al anterior, le sumamos un bono forzado
  if (targetScore <= previousTarget) {
    targetScore = previousTarget + Math.floor(Math.random() * 20) + 5;
  }

  return targetScore;
}