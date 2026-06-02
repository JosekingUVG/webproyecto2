import SidebarLeft from "../components/game/SidebarLeft";
import SidebarRight from "../components/game/SidebarRight";
import "../styles/game.css";

function GameScreen({setScreen}) {
  return (
    <div className="game-screen">

    <SidebarLeft 
    targetScore={300}
    chips={50}
    multiplier={2}
    ante={1}
    round={1}
    />

      <SidebarRight />

    </div>
  );
}

export default GameScreen;