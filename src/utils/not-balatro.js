import readline from 'readline';

// Importaciones de cartas
import { createDeck } from './cards/createDeck.js';
import { shuffleDeck } from './cards/shffleDeck.js';
import { drawCards } from './cards/drawCards.js';
import { getCardValue } from './cards/getCardValue.js';

// Importaciones de puntuación y juego
import { calculateHandScore } from './score/calculateHandScore.js';
import { generateTargetScore } from './game/generateTargetScore.js';
import { discardCards } from './game/discardCards.js';

// Configuración de la interfaz de consola interactiva
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// ESTADO GLOBAL DEL JUEGO (Simulando el useState de React)
let gameState = {
  round: 1,
  totalScore: 0,
  targetScore: 0,
  discardsLeft: 3,
  handsLeft: 4, // Ponemos un límite de 4 manos jugadas por ronda al estilo Balatro
  deck: [],
  hand: [],
  activeJokers: ['chaotic_joker', 'puzzled_joker'] // Dejamos 2 equipados para probar multiplicadores
};

/**
 * Inicializa una nueva ronda limpiando y recalculando el mazo y la meta.
 */
function startRound() {
  console.clear();
  console.log("==================================================================");
  console.log(`🎰 ¡INICIANDO RONDA ${gameState.round}! 🎰`);
  console.log("==================================================================");
  
  // Generar nueva meta basada en la anterior
  gameState.targetScore = generateTargetScore(gameState.round, gameState.targetScore);
  gameState.totalScore = 0;
  gameState.discardsLeft = 3;
  gameState.handsLeft = 4;
  
  // Crear y barajar mazo fresco por ronda
  const freshDeck = createDeck();
  gameState.deck = shuffleDeck(freshDeck);
  
  // Robar mano inicial de 8 cartas
  const { hand, remainingDeck } = drawCards(gameState.deck, 8);
  gameState.hand = hand;
  gameState.deck = remainingDeck;

  printGameStatus();
  promptUser();
}

/**
 * Imprime en la consola el estado visual del tablero actual.
 */
function printGameStatus() {
  console.log("\n------------------------------------------------------------------");
  console.log(`🌟 RONDA: ${gameState.round}  |  🎯 OBJETIVO: ${gameState.targetScore} pts  |  🔥 ACUMULADO: ${gameState.totalScore} pts`);
  console.log(`🖐️  MANOS RESTANTES: ${gameState.handsLeft}  |  ♻️  DESCARTES RESTANTES: ${gameState.discardsLeft}/3`);
  console.log(`🃏 JOKERS ACTIVOS: [ Chaotic Joker (♦️), Puzzled Joker (♥️) ]`);
  console.log("------------------------------------------------------------------");
  console.log("📋 TU MANO ACTUAL (Elige por su número de Slot):");
  
  gameState.hand.forEach((card, index) => {
    console.log(`  [Slot ${index + 1}]: ${card.rank}${card.suit} (val: ${getCardValue(card)})`);
  });
  console.log("------------------------------------------------------------------");
}

/**
 * Menú interactivo principal en la terminal.
 */
function promptUser() {
  console.log("\n¿Qué deseas hacer?");
  console.log("  [1] Jugar una mano (Selecciona hasta 5 cartas)");
  console.log("  [2] Descartar cartas (Selecciona cartas para reemplazar)");
  console.log("  [3] Rendirse (Salir del juego)");
  
  rl.question('\nElige una opción (1-3): ', (choice) => {
    if (choice === '1') {
      handlePlayMove();
    } else if (choice === '2') {
      handleDiscardMove();
    } else if (choice === '3') {
      console.log("\n👋 ¡Gracias por jugar a Not-Balatro! Prototipo finalizado.");
      rl.close();
    } else {
      console.log("❌ Opción inválida.");
      promptUser();
    }
  });
}

/**
 * Lógica para seleccionar cartas y enviarlas al motor de puntuación.
 */
function handlePlayMove() {
  if (gameState.handsLeft <= 0) {
    console.log("❌ No te quedan manos disponibles en esta ronda.");
    promptUser();
    return;
  }

  rl.question('Ingresa los números de Slot a JUGAR separados por espacios (ej: 1 3 4 5): ', (slotsInput) => {
    const selectedIndices = parseSlots(slotsInput);
    
    if (selectedIndices.length === 0 || selectedIndices.length > 5) {
      console.log("❌ Debes seleccionar entre 1 y 5 cartas válidas.");
      handlePlayMove();
      return;
    }

    // Separar las cartas jugadas de la mano
    const playedCards = selectedIndices.map(index => gameState.hand[index]);
    gameState.hand = gameState.hand.filter((_, index) => !selectedIndices.includes(index));

    // Calcular puntaje de la jugada
    const breakdown = calculateHandScore(playedCards, gameState.activeJokers);
    
    console.log("\n==================================================================");
    console.log(`💥 JUGADA EVALUADA: ${breakdown.handType.toUpperCase()}`);
    console.log(`👉 Base: ${breakdown.baseScore} | Suma: +${breakdown.cardSum} | Mult: x${breakdown.multiplier.toFixed(1)}`);
    console.log(`🔥 PUNTOS OBTENIDOS EN ESTA MANO: ${breakdown.score}`);
    console.log("==================================================================");

    // Actualizar estado del juego
    gameState.totalScore += breakdown.score;
    gameState.handsLeft--;

    // Robar nuevas cartas del mazo hasta volver a completar 8 en la mano
    const cardsNeeded = 8 - gameState.hand.length;
    const { hand: newCards, remainingDeck } = drawCards(gameState.deck, cardsNeeded);
    gameState.hand = [...gameState.hand, ...newCards];
    gameState.deck = remainingDeck;

    // Verificar condiciones de victoria o derrota de la ronda
    checkRoundEndConditions();
  });
}

/**
 * Lógica para seleccionar cartas y enviarlas al sistema de descarte.
 */
function handleDiscardMove() {
  if (gameState.discardsLeft <= 0) {
    console.log("❌ No te quedan descartes en esta ronda.");
    promptUser();
    return;
  }

  rl.question('Ingresa los números de Slot a DESCARTAR separados por espacios (ej: 2 6): ', (slotsInput) => {
    const selectedIndices = parseSlots(slotsInput);
    
    if (selectedIndices.length === 0) {
      console.log("❌ Selección vacía.");
      handleDiscardMove();
      return;
    }

    const selectedCards = selectedIndices.map(index => gameState.hand[index]);

    // Aplicar la lógica del Paso 14 de descartes
    const { newHand, newDeck } = discardCards(gameState.hand, selectedCards, gameState.deck);
    
    gameState.hand = newHand;
    gameState.deck = newDeck;
    gameState.discardsLeft--;

    console.log(`\n♻️  Cartas cambiadas con éxito. Te quedan ${gameState.discardsLeft} descartes.`);
    
    printGameStatus();
    promptUser();
  });
}

/**
 * Verifica si el jugador pasa de ronda, continúa jugando o cae en Game Over.
 */
function checkRoundEndConditions() {
  // Condición de Victoria de la Ronda
  if (gameState.totalScore >= gameState.targetScore) {
    console.log(`\n🎉 ¡Felicidades! Superaste la meta de ${gameState.targetScore} puntos.`);
    gameState.round++;
    
    rl.question('Presiona ENTER para avanzar a la siguiente ronda...', () => {
      startRound();
    });
    return;
  }

  // Condición de Derrota (Se quedó sin manos y no llegó a la meta)
  if (gameState.handsLeft <= 0 && gameState.totalScore < gameState.targetScore) {
    console.log("\n☠️ ==================================================");
    console.log("💥 GAME OVER: No lograste alcanzar el score objetivo.");
    console.log(`   Ronda alcanzada: ${gameState.round}`);
    console.log(`   Puntaje final: ${gameState.totalScore} / ${gameState.targetScore}`);
    console.log("================================================== ☠️");
    rl.close();
    return;
  }

  // Si no ha ganado ni perdido, la ronda continúa
  printGameStatus();
  promptUser();
}

/**
 * Helper para procesar el string de números que mete el usuario por teclado (ej: "1 4 5" -> [0, 3, 4])
 */
function parseSlots(input) {
  return input.trim().split(/\s+/)
    .map(num => parseInt(num, 10) - 1)
    .filter(index => !isNaN(index) && index >= 0 && index < gameState.hand.length);
}

// ARRANQUE DEL MOTOR INTERACTIVO
startRound();