import leftBar from "../../assets/ui/Left_Bar.png";
import ScoreDisplay from "./ScoreDisplay";
import ChipsMultiplier from "./ChipsMultiplier";
import GameInfo from "./GameInfo";

function SidebarLeft({ targetScore, chips, multiplier, ante, round }) {
  return (
    <div 
      className="sidebar-left"
      style={{ backgroundImage: `url(${leftBar})` }}
    >
      <ScoreDisplay targetScore={targetScore} />
      <ChipsMultiplier chips={chips} multiplier={multiplier} />
      <GameInfo ante={ante} round={round} />
    </div>
  );
}

export default SidebarLeft;