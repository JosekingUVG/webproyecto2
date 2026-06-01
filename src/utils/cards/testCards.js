// IMPORTANTE: Asegúrate de que todos tengan el ".js" al final
import { createDeck } from './createDeck.js';
import { shuffleDeck } from './shffleDeck.js'; // Ajusta al nombre real de tu archivo de barajado
import { drawCards } from './drawCards.js';
import { getCardValue } from './getCardValue.js';

function runDeckTest() {
  console.log("==================================================");
  console.log("♠️ ♥️ ♦️ ♣️  INICIANDO PRUEBA DE MAZO BALATRO  ♣️ ♦️ ♥️ ♠️");
  console.log("==================================================\n");

  // 1. Crear el mazo
  const freshDeck = createDeck();
  console.log(`1. Mazo creado exitosamente. Total de cartas: ${freshDeck.length}`);

  // 2. Mezclar el mazo
  console.log("2. Mezclando el mazo de cartas...");
  const shuffledDeck = shuffleDeck(freshDeck);

  // 3. Extraer 8 cartas al azar
  console.log("3. Extrayendo 8 cartas aleatorias para la mano...");
  const { hand, remainingDeck } = drawCards(shuffledDeck, 8);
  
  console.log(`   Cartas restantes en el mazo: ${remainingDeck.length}`);
  console.log("   ----------------------------------------");
  console.log("   MANO GENERADA AL AZAR:");
  console.log("   ----------------------------------------");

  // 4. Evaluar el valor de cada carta
  hand.forEach((card, index) => {
    const numericValue = getCardValue(card);
    console.log(`   [Carta ${index + 1}]: ${card.rank}${card.suit}  =>  Valor numérico: ${numericValue}`);
  });

  console.log("   ----------------------------------------\n");
  console.log("==================================================");
}

// CRUCIAL: Asegúrate de que esta línea exista al final del archivo para arrancar la prueba
runDeckTest();