import multiplierBox from "../../assets/ui/left_bar/Multiplier_Box.png";
import chipsCounter from "../../assets/ui/left_bar/Chips_Counter.png";
import multiplierCounter from "../../assets/ui/left_bar/Multiplier_Counter.png";

function ChipsMultiplier({ handsLeft, discardsLeft }) {
  return (
    <div className="chips-multiplier">
      <img src={multiplierBox} alt="box" className="chips-multiplier-bg" />
      <div className="chips-multiplier-content">
        <div className="counter-wrapper">
          <img src={chipsCounter} alt="hands" className="counter-img" />
          <span className="counter-value">{handsLeft}</span>
        </div>
        <div className="counter-wrapper">
          <img src={multiplierCounter} alt="discards" className="counter-img" />
          <span className="counter-value">{discardsLeft}</span>
        </div>
      </div>
    </div>
  );
}

export default ChipsMultiplier;