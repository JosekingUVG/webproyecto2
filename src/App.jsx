import { useState } from "react";

import MainMenu from "./screens/MainMenu";
import RulesScreen from "./screens/RulesScreen";

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
    </>
  );
}

export default App;