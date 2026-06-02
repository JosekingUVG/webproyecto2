import anteBox from "../../assets/ui/left_bar/Ante_Box.png";
import roundBox from "../../assets/ui/left_bar/Round_Box.png";

function GameInfo({ ante, round }) {
  return (
    <div className="game-info">
      <div className="info-wrapper">
        <img src={anteBox} alt="ante" className="info-img" />
        <span className="info-value">{ante}</span>
      </div>
      <div className="info-wrapper">
        <img src={roundBox} alt="round" className="info-img" />
        <span className="info-value">{round}</span>
      </div>
    </div>
  );
}

export default GameInfo;