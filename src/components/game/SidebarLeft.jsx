import leftBar from "../../assets/ui/left_bar/Left_Bar.png";
import ScoreDisplay from "./ScoreDisplay";
import ChipsMultiplier from "./ChipsMultiplier";
import GameInfo from "./GameInfo";

function SidebarLeft({ targetScore, round, totalScore, handsLeft, discardsLeft, activeJokers }) {
  return (
    <div className="sidebar-left">
      <img src={leftBar} alt="sidebar" className="sidebar-bg" />
      <div className="sidebar-content">
        <ScoreDisplay targetScore={targetScore} />
        <ChipsMultiplier handsLeft={handsLeft} discardsLeft={discardsLeft} />
        <GameInfo round={round} totalScore={totalScore} />
      </div>
    </div>
  );
}

export default SidebarLeft;