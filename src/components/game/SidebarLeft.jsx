import leftBar from "../../assets/ui/left_bar/Left_Bar.png";
import ScoreDisplay from "./ScoreDisplay";
import ChipsMultiplier from "./ChipsMultiplier";
import GameInfo from "./GameInfo";
import JokersDisplay from "./JokersDisplay";

function SidebarLeft({ targetScore, chips, multiplier, ante, round, activeJokers }) {
  return (
    <div className="sidebar-left">
      <img src={leftBar} alt="sidebar" className="sidebar-bg" />
      <div className="sidebar-content">
        <ScoreDisplay targetScore={targetScore} />
        <JokersDisplay activeJokers={activeJokers} />
        <ChipsMultiplier chips={chips} multiplier={multiplier} />
        <GameInfo ante={ante} round={round} />
      </div>
    </div>
  );
}

export default SidebarLeft;