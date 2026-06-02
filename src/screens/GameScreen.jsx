import { useState, useEffect, useMemo } from "react";
import SidebarLeft from "../components/game/SidebarLeft";
import SidebarRight from "../components/game/SidebarRight";
import CardContainer from "../components/cards/CardContainer";
import { createDeck } from "../utils/cards/createDeck";
import { shuffleDeck } from "../utils/cards/shffleDeck";
import { drawCards } from "../utils/cards/drawCards";
import { generateTargetScore } from "../utils/game/generateTargetScore";
import { calculateTotalMultiplier } from "../utils/jokers/calculateMultiplier";
import "../styles/game.css";

function GameScreen({ setScreen }) {
  const [playerHand, setPlayerHand] = useState([]);
  const [round] = useState(1);
  const [targetScore, setTargetScore] = useState(0);
  const [activeJokers] = useState([]);
  const [chips] = useState(50);
  const [ante] = useState(1);

  const multiplier = useMemo(
    () => calculateTotalMultiplier(activeJokers, playerHand),
    [activeJokers, playerHand]
  );

  useEffect(() => {
    // Inicializar mazo y estado de ronda cuando el componente se monta
    const freshDeck = createDeck();
    const shuffledDeck = shuffleDeck(freshDeck);
    const { hand } = drawCards(shuffledDeck, 8);

    setPlayerHand(hand);
    setTargetScore(generateTargetScore(1, 0));
  }, []);

  return (
    <div className="game-screen">

      <SidebarLeft
        targetScore={targetScore}
        chips={chips}
        multiplier={multiplier}
        ante={ante}
        round={round}
        activeJokers={activeJokers}
      />

      <div className="game-center">
        <div className="jokers-bar"></div>
        <div className="play-area"></div>
        <div className="player-hand">
          <CardContainer cards={playerHand} />
        </div>
      </div>

      <SidebarRight />

    </div>
  );
}

export default GameScreen;