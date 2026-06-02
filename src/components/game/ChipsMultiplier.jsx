import multiplierBox from "../../assets/ui/left_bar/Multiplier_Box.png";
import chipsCounter from "../../assets/ui/left_bar/Chips_Counter.png";
import multiplierCounter from "../../assets/ui/left_bar/Multiplier_Counter.png";

function ChipsMultiplier({ chips, multiplier }) {
  return (
    <div className="chips-multiplier">
      <img src={multiplierBox} alt="multiplier box" className="chips-multiplier-bg" />
      <div className="chips-multiplier-content">
        <div className="counter-wrapper">
          <img src={chipsCounter} alt="chips" className="counter-img" />
          <span className="counter-value">{chips}</span>
        </div>
        <div className="counter-wrapper">
          <img src={multiplierCounter} alt="multiplier" className="counter-img" />
          <span className="counter-value">{multiplier}</span>
        </div>
      </div>
    </div>
  );
}

export default ChipsMultiplier;