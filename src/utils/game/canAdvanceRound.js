/**
 * Evalúa si el jugador ha ganado la ronda o si ha caído en condición de Game Over.
 * 
 * @param {number} currentScore - El puntaje acumulado actual del jugador.
 * @param {number} targetScore - El puntaje objetivo a alcanzar en la ronda.
 * @returns {{ win: boolean, gameOver: boolean }} Estado de la ronda.
 */
export function canAdvanceRound(currentScore, targetScore) {
  // Si alcanzó o superó el objetivo, ¡ganó la ronda!
  if (currentScore >= targetScore) {
    return {
      win: true,
      gameOver: false
    };
  }

  // Si no ha alcanzado el score, la interfaz del juego evaluará si le quedan manos por jugar.
  // Si ya no le quedan manos y currentScore < targetScore, se gatillará el gameOver.
  return {
    win: false,
    gameOver: false // Será true cuando las manos disponibles en el estado de React lleguen a 0
  };
}