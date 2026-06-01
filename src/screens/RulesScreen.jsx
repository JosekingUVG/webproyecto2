import { useState } from "react";

import RulesNavbar from "../components/rules/RulesNavBar";
import RulesContent from "../components/rules/RulesContent";
import "../styles/rules.css";

function RulesScreen({ setScreen }) {
  const [section, setSection] = useState("score");

  return (
    <main className="rules-screen">
      <RulesNavbar
        section={section}
        setSection={setSection}
      />

      <RulesContent section={section} />

      <button
      className="rules-btn"
       onClick={() => setScreen("menu")}>
        Volver
      </button>
    </main>
  );
}

export default RulesScreen;