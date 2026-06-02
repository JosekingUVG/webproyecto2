function ChipsMultiplier({ chips, multiplier }) {
  return (
    <div className="chips-multiplier">
      <span className="chips">{chips}</span>
      <span className="multiplier">{multiplier}</span>
    </div>
  );
}

export default ChipsMultiplier;