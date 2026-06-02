import { useState } from "react";
import backBtn from "../assets/ui/General/Back.png";

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

    <button className="back-btn" onClick={() => setScreen("menu")}>
      <img src={backBtn} alt="back" />
    </button>
    </main>
  );
}

export default RulesScreen;