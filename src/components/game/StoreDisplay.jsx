import { useState } from "react";
import { JOKERS_CONFIG } from "../../utils/jokers/jokerConfig";
import storeImg from "../../assets/ui/Center/Store.png";
import chaoticImg from "../../assets/jokers/Chaotic_Joker.png";
import sadImg from "../../assets/jokers/Sad_Joker.png";
import wishfulImg from "../../assets/jokers/Wishful_Joker.png";
import puzzledImg from "../../assets/jokers/Puzzled_Joker.png";

function StoreDisplay({ totalScore, targetScore, onConfirm }) {
  const jokerKeys = Object.keys(JOKERS_CONFIG);
  const [selected, setSelected] = useState([]);

  const images = {
    chaotic_joker: chaoticImg,
    sad_joker: sadImg,
    wishful_joker: wishfulImg,
    puzzled_joker: puzzledImg,
  };

  const toggle = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter(s => s !== id));
      return;
    }
    if (selected.length >= 2) return;
    setSelected([...selected, id]);
  };

  return (
    <div className="store-overlay">
      <img src={storeImg} alt="store" className="store-img" />
      <div className="store-info">
        <p className="store-placeholder">TIENDA</p>
        <p className="store-score">Puntaje: {totalScore} / {targetScore}</p>
        <div className="jokers-grid">
          {jokerKeys.map((key) => {
            const cfg = JOKERS_CONFIG[key];
            return (
              <button
                key={key}
                className={`joker-card ${selected.includes(key) ? 'selected' : ''}`}
                onClick={() => toggle(key)}
              >
                <img src={images[key]} alt={cfg.name} />
                <span>{cfg.name}</span>
              </button>
            );
          })}
        </div>
        <div className="store-actions">
          <button className="confirm-btn" onClick={() => onConfirm(selected)} disabled={selected.length !== 2}>
            Confirmar selección ({selected.length}/2)
          </button>
        </div>
      </div>
    </div>
  );
}

export default StoreDisplay;
