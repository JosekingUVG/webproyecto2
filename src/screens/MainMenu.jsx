function MainMenu({ setScreen }) {
  return (
    <main className="main-menu">
      <h1>🎴 Not-Balatro</h1>

      <button onClick={() => setScreen("game")}>
        Jugar
      </button>

      <button onClick={() => setScreen("rules")}>
        Reglas
      </button>

      <button onClick={() => setScreen("scores")}>
        Puntajes
      </button>
    </main>
  );
}

export default MainMenu;