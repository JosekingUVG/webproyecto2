function RulesScreen({ setScreen }) {
  return (
    <main>
      <h1>📜 Reglas</h1>

      <p>
        Aquí van las reglas del juego...
      </p>

      <button onClick={() => setScreen("menu")}>
        Volver
      </button>
    </main>
  );
}

export default RulesScreen;