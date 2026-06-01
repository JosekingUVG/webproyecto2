import "../../styles/rules.css";
import "../../styles/global.css";
import "../../styles/buttons.css";

function RulesNavBar({ section, setSection }) {
  return (
    <nav className="rules-navbar">
      <button
        className={section === "score" ? "active" : ""}
        onClick={() => setSection("score")}
      >
        Puntajes
      </button>

      <button
        className={section === "cards" ? "active" : ""}
        onClick={() => setSection("cards")}
      >
        Manos
      </button>

      <button
        className={section === "discards" ? "active" : ""}
        onClick={() => setSection("discards")}
      >
        Descartes
      </button>

      <button
        className={section === "jokers" ? "active" : ""}
        onClick={() => setSection("jokers")}
      >
        Jokers
      </button>
    </nav>
  );
}

export default RulesNavBar;