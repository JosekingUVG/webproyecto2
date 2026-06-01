// Importaciones de la carpeta actual (cards)
import { createDeck } from './createDeck.js';
import { shuffleDeck } from './shffleDeck.js'; // Usando el nombre exacto de tu archivo
import { drawCards } from './drawCards.js';
import { getCardValue } from './getCardValue.js';

// Importaciones de las nuevas carpetas (score y jokers) utilizando rutas relativas
import { calculateHandScore } from '../score/calculateHandScore.js';
import { detectHand } from '../score/detectHand.js';

function runBalatroEngineTest() {
  console.log("==================================================================");
  console.log("🃏🔥 SYSTEMA DE PRUEBAS BALATRO ENGINE (CON JOKERS) 🔥🃏");
  console.log("==================================================================\n");

  // 1. Crear y Barajar
  const baseDeck = createDeck();
  const playingDeck = shuffleDeck(baseDeck);
  console.log(`[MAZO] Inicializado con ${playingDeck.length} cartas y completamente mezclado.`);

  // 2. Extraer una mano aleatoria de 8 cartas
  const { hand, remainingDeck } = drawCards(playingDeck, 8);
  console.log(`[MANO] Se han repartido ${hand.length} cartas para la ronda actual.`);
  console.log(`[MAZO] Quedan ${remainingDeck.length} cartas restantes en la baraja.\n`);

  console.log("------------------------------------------------------------------");
  console.log("📋 TU MANO EN MESA:");
  console.log("------------------------------------------------------------------");
  hand.forEach((card, index) => {
    console.log(`   Slot ${index + 1}: [ ${card.rank}${card.suit} ] (Valor individual: ${getCardValue(card)})`);
  });
  console.log("------------------------------------------------------------------\n");

  // 3. Simular la selección del jugador (En Balatro juegas hasta 5 de tus 8 cartas)
  // Tomamos las primeras 5 cartas de la mano aleatoria para simular la jugada
  const playedCards = hand.slice(0, 5);
  
  console.log("🚀 CARTAS SELECCIONADAS PARA JUGAR (Top 5):");
  console.log(`   ${playedCards.map(c => `[${c.rank}${c.suit}]`).join("  ")}\n`);

  // 4. Configurar Jokers activos para la prueba
  // Vamos a simular que el jugador compró el "Chaotic Joker" (Diamantes) y el "Sad Joker" (Tréboles)
  const activeJokers = ['chaotic_joker', 'sad_joker'];
  console.log(`🌟 JOKERS EQUIPADOS: [ chaotic_joker (♦️), sad_joker (♣️) ]\n`);

  // 5. Ejecutar el cálculo del motor de puntuación
  const scoreResult = calculateHandScore(playedCards, activeJokers);

  // 6. Imprimir el desglose analítico (Breakdown)
  console.log("==================================================================");
  console.log("📊 RESULTADO DE LA JUGADA");
  console.log("==================================================================");
  console.log(`▶️  Jugada Detectada :  ${scoreResult.handType.toUpperCase()}`);
  console.log(`▶️  Puntaje Base     :  ${scoreResult.baseScore} pts`);
  console.log(`▶️  Suma de Cartas   :  + ${scoreResult.cardSum} chips`);
  console.log(`▶️  Mult. de Jokers  :  x ${scoreResult.multiplier.toFixed(1)}`);
  console.log("------------------------------------------------------------------");
  console.log(`🔥 SCORE TOTAL FINAL :  ${scoreResult.score} PUNTOS`);
  console.log("==================================================================\n");
}

// Ejecutar la simulación completa
runBalatroEngineTest();