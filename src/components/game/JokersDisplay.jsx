import { JOKERS_CONFIG } from "../../utils/jokers/jokerConfig";

function JokersDisplay({ activeJokers }) {
  const hasJokers = Array.isArray(activeJokers) && activeJokers.length > 0;

  return (
    <div className="jokers-display">
      <p className="jokers-title">Jokers activos</p>
      {hasJokers ? (
        <ul className="jokers-list">
          {activeJokers.map((jokerId) => {
            const joker = JOKERS_CONFIG[jokerId];
            return (
              <li key={jokerId} className="jokers-item">
                {joker?.name ?? jokerId}
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="jokers-empty">No hay jokers equipados para esta ronda.</p>
      )}
    </div>
  );
}

export default JokersDisplay;
