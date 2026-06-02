import scoreBox from "../../assets/ui/left_bar/Score_Box.png";

function ScoreDisplay({ targetScore }) {
  return (
    <div className="score-display">
      <img src={scoreBox} alt="score box" />
      <p>{targetScore}</p>
    </div>
  );
}

export default ScoreDisplay;