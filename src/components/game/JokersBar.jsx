import chaoticJoker from "../../assets/jokers/Chaotic_Joker.png";
import sadJoker from "../../assets/jokers/Sad_Joker.png";
import wishfulJoker from "../../assets/jokers/Wishful_Joker.png";
import puzzledJoker from "../../assets/jokers/Puzzled_Joker.png";
import { JOKERS_CONFIG } from "../../utils/jokers/jokerConfig";

const jokerImages = {
  'chaotic_joker': chaoticJoker,
  'sad_joker': sadJoker,
  'wishful_joker': wishfulJoker,
  'puzzled_joker': puzzledJoker,
};

function JokersBar({ activeJokers }) {
  return (
    <div className="jokers-bar">
      {activeJokers.map((jokerKey, index) => (
        <div key={index} className="joker-item">
          <img src={jokerImages[jokerKey]} alt={jokerKey} className="joker-img" />
          <span>{JOKERS_CONFIG[jokerKey]?.name}</span>
        </div>
      ))}
    </div>
  );
}

export default JokersBar;