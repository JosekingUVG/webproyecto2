import { useState } from "react";

import MainMenu from "./screens/MainMenu";
import RulesScreen from "./screens/RulesScreen";
import GameScreen from "./screens/GameScreen";

function App() {
  const [screen, setScreen] = useState("menu");

  return (
    <>
      {screen === "menu" && (
        <MainMenu setScreen={setScreen} />
      )}

      {screen === "rules" && (
        <RulesScreen setScreen={setScreen} />
      )}

      {screen === "game" && (
        <GameScreen setScreen={setScreen} />
      )}
    </>
  );
}

export default App;