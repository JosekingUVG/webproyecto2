import anteBox from "../../assets/ui/left_bar/Ante_Box.png";
import roundBox from "../../assets/ui/left_bar/Round_Box.png";

function GameInfo({ round, totalScore }) {
  return (
    <div className="game-info">
      <div className="info-wrapper">
        <img src={anteBox} alt="round" className="info-img" />
        <span className="info-value">{round}</span>
      </div>
      <div className="info-wrapper">
        <img src={roundBox} alt="score" className="info-img" />
        <span className="info-value">{totalScore}</span>
      </div>
    </div>
  );
}

export default GameInfo;