import "../../styles/rules.css";

function RulesNavBar({ setSection }) {
  return (
    <nav className="rules-navbar">
      <button
        className="rules-btn"
        onClick={() => setSection("score")}
      >
        Puntajes
      </button>

      <button
        className="rules-btn"
        onClick={() => setSection("cards")}
      >
        Manos
      </button>

      <button
        className="rules-btn"
        onClick={() => setSection("discards")}
      >
        Descartes
      </button>

      <button
        className="rules-btn"
        onClick={() => setSection("jokers")}
      >
        Jokers
      </button>
    </nav>
  );
}

export default RulesNavBar;