import { useState, useEffect, useMemo } from "react";
import SidebarLeft from "../components/game/SidebarLeft";
import SidebarRight from "../components/game/SidebarRight";
import CardContainer from "../components/cards/CardContainer";
import StoreDisplay from "../components/game/StoreDisplay";
import { createDeck } from "../utils/cards/createDeck";
import { shuffleDeck } from "../utils/cards/shffleDeck";
import { drawCards } from "../utils/cards/drawCards";
import { generateTargetScore } from "../utils/game/generateTargetScore";
import { calculateTotalMultiplier } from "../utils/jokers/calculateMultiplier";
import { calculateHandScore } from "../utils/score/calculateHandScore";
import { discardCards } from "../utils/game/discardCards";
import discardImg from "../assets/ui/Center/Discard.png";
import playImg from "../assets/ui/Center/Play.png";
import lossImg from "../assets/ui/Center/Loss.png";
import JokersBar from "../components/game/JokersBar";
import "../styles/game.css";

function GameScreen({ setScreen }) {
  const [playerHand, setPlayerHand] = useState([]);
  const [round, setRound] = useState(1);
  const [targetScore, setTargetScore] = useState(0);
  const [activeJokers, setActiveJokers] = useState([]);
  const [deck, setDeck] = useState([]);
  const [totalScore, setTotalScore] = useState(0);
  const [handsLeft, setHandsLeft] = useState(4);
  const [discardsLeft, setDiscardsLeft] = useState(3);
  const [selectedIndices, setSelectedIndices] = useState([]);
  const [showLoss, setShowLoss] = useState(false);
  const [showStore, setShowStore] = useState(false);
  const [showRoundMessage, setShowRoundMessage] = useState(false);
  const [roundMessage, setRoundMessage] = useState("");

  const multiplier = useMemo(
    () => calculateTotalMultiplier(activeJokers, playerHand),
    [activeJokers, playerHand]
  );

  useEffect(() => {
    // Inicializar mazo y estado de ronda cuando el componente se monta
    const freshDeck = createDeck();
    const shuffledDeck = shuffleDeck(freshDeck);
    const { hand, remainingDeck } = drawCards(shuffledDeck, 8);

    setPlayerHand(hand);
    setDeck(remainingDeck);
    setTargetScore(generateTargetScore(1, 0));
  }, []);

  const handlePlay = () => {
    if (handsLeft <= 0) return;
    if (selectedIndices.length === 0 || selectedIndices.length > 5) {
      alert("Selecciona entre 1 y 5 cartas para jugar");
      return;
    }

    const playedCards = selectedIndices.map(i => playerHand[i]);
    const remainingHand = playerHand.filter((_, idx) => !selectedIndices.includes(idx));

    const breakdown = calculateHandScore(playedCards, activeJokers);
    const newTotal = totalScore + breakdown.score;
    setTotalScore(newTotal);
    setHandsLeft(h => h - 1);

    // Robar cartas para volver a 8
    const cardsNeeded = 8 - remainingHand.length;
    const { hand: newCards, remainingDeck } = drawCards(deck, cardsNeeded);
    const updatedHand = [...remainingHand, ...newCards];
    setPlayerHand(updatedHand);
    setDeck(remainingDeck);
    setSelectedIndices([]);

    // Verificar victoria y pasar a tienda/segunda fase si aplica
    if (newTotal >= targetScore) {
      // Mostrar tienda para elegir jokers antes de la siguiente ronda
      setTimeout(() => {
        setShowStore(true);
      }, 250);
      return;
    }

    // Verificar derrota
    if (newTotal < targetScore && (handsLeft - 1) <= 0) {
      setShowLoss(true);
    }
  };

  const handleDiscard = () => {
    if (discardsLeft <= 0) {
      alert("No te quedan descartes");
      return;
    }
    if (selectedIndices.length === 0) {
      alert("Selecciona cartas para descartar");
      return;
    }

    const selectedCards = selectedIndices.map(i => playerHand[i]);
    const { newHand, newDeck } = discardCards(playerHand, selectedCards, deck);
    setPlayerHand(newHand);
    setDeck(newDeck);
    setDiscardsLeft(d => d - 1);
    setSelectedIndices([]);
  };

  const handleStoreConfirm = (selectedJokers) => {
    // Equipar los jokers seleccionados y avanzar de ronda
    setActiveJokers(selectedJokers);
    setShowStore(false);

    const nextRound = round + 1;
    setRound(nextRound);

    // Regenerar meta basada en la anterior
    const newTarget = generateTargetScore(nextRound, targetScore);
    setTargetScore(newTarget);

    // Resetear estado de ronda
    setTotalScore(0);
    setDiscardsLeft(3);
    setHandsLeft(4);

    // Nuevo mazo y mano
    const freshDeck = createDeck();
    const shuffledDeck = shuffleDeck(freshDeck);
    const { hand: newHand, remainingDeck } = drawCards(shuffledDeck, 8);
    setPlayerHand(newHand);
    setDeck(remainingDeck);
    setShowLoss(false);

    // Mostrar mensaje breve de inicio de ronda
    const msg = `Ronda ${nextRound} — ¡Buena suerte!`;
    setRoundMessage(msg);
    setShowRoundMessage(true);
    setTimeout(() => setShowRoundMessage(false), 2000);
  };
  
  return (
    <div className="game-screen">

      <SidebarLeft
        targetScore={targetScore}
        handsLeft={handsLeft}
        discardsLeft={discardsLeft}
        round={round}
        totalScore={totalScore}
        activeJokers={activeJokers}
      />

      <div className="game-center">
        <JokersBar activeJokers={activeJokers} />
        <div className="play-area"></div>
        <div className="player-hand">
          <CardContainer cards={playerHand} selectedIndices={selectedIndices} onSelectionChange={setSelectedIndices} />
        </div>

        <div className="center-controls">
          <button className="control-btn" onClick={handleDiscard}>
            <img src={discardImg} alt="discard" />
          </button>
          <button className="control-btn" onClick={handlePlay}>
            <img src={playImg} alt="play" />
          </button>
        </div>

        {showLoss && (
          <div className="loss-overlay">
            <img src={lossImg} alt="loss" />
            <div className="loss-buttons">
              <button className="loss-btn" onClick={() => setScreen("menu")}>
                Menú Principal
              </button>
            </div>
          </div>
        )}

        {showStore && (
          <StoreDisplay totalScore={totalScore} targetScore={targetScore} onConfirm={handleStoreConfirm} />
        )}

        {showRoundMessage && (
          <div className="round-message">
            <div className="round-message-box">{roundMessage}</div>
          </div>
        )}
      </div>

      <SidebarRight deck={deck} />

    </div>
  );
}

export default GameScreen;