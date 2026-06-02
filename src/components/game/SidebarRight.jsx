import rightBar from "../../assets/ui/right_bar/Right_Bar.png";

import aceImg from "../../assets/ui/right_bar/ranks/Ace.png";
import kingImg from "../../assets/ui/right_bar/ranks/King.png";
import queenImg from "../../assets/ui/right_bar/ranks/Queen.png";
import jackImg from "../../assets/ui/right_bar/ranks/Jack.png";
import tenImg from "../../assets/ui/right_bar/ranks/Ten.png";
import nineImg from "../../assets/ui/right_bar/ranks/Nine.png";
import eightImg from "../../assets/ui/right_bar/ranks/Eight.png";
import sevenImg from "../../assets/ui/right_bar/ranks/Seven.png";
import sixImg from "../../assets/ui/right_bar/ranks/Six.png";
import fiveImg from "../../assets/ui/right_bar/ranks/Five.png";
import fourImg from "../../assets/ui/right_bar/ranks/Four.png";
import threeImg from "../../assets/ui/right_bar/ranks/Three.png";
import twoImg from "../../assets/ui/right_bar/ranks/Two.png";

import diamondImg from "../../assets/ui/right_bar/suits/Diamond.png";
import heartImg from "../../assets/ui/right_bar/suits/Heart.png";
import clubImg from "../../assets/ui/right_bar/suits/Club.png";
import spadeImg from "../../assets/ui/right_bar/suits/Spade.png";

const rankData = [
  { rank: "A", img: aceImg },
  { rank: "K", img: kingImg },
  { rank: "Q", img: queenImg },
  { rank: "J", img: jackImg },
  { rank: "T", img: tenImg },
  { rank: "9", img: nineImg },
  { rank: "8", img: eightImg },
  { rank: "7", img: sevenImg },
  { rank: "6", img: sixImg },
  { rank: "5", img: fiveImg },
  { rank: "4", img: fourImg },
  { rank: "3", img: threeImg },
  { rank: "2", img: twoImg },
];

const suitData = [
  { suit: "D", img: diamondImg },
  { suit: "H", img: heartImg },
  { suit: "C", img: clubImg },
  { suit: "S", img: spadeImg },
];

function SidebarRight({ deck }) {
  const countByRank = (rank) => deck.filter(c => c.rank === rank).length;
  const countBySuit = (suit) => deck.filter(c => c.suit === suit).length;

  return (
    <div className="sidebar-right">
      <img src={rightBar} alt="sidebar right" className="sidebar-right-bg" />
      <div className="sidebar-right-content">
        <div className="ranks-list">
          {rankData.map(({ rank, img }) => (
            <div key={rank} className="counter-row">
              <img src={img} alt={rank} className="counter-icon" />
              <span className="counter-num">{countByRank(rank)}</span>
            </div>
          ))}
        </div>
        <div className="suits-list">
          {suitData.map(({ suit, img }) => (
            <div key={suit} className="counter-row">
              <img src={img} alt={suit} className="counter-icon" />
              <span className="counter-num">{countBySuit(suit)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SidebarRight;