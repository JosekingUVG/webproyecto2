function GameInfo({ ante, round }) {
  return (
    <div className="game-info">
      <div className="ante-display">Ante: {ante}</div>
      <div className="round-display">Round: {round}</div>
    </div>
  );
}

export default GameInfo;