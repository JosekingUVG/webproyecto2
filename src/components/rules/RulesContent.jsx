import ReactMarkdown from "react-markdown";

import score from "../../data/rules/score";
import cards from "../../data/rules/cards";
import discards from "../../data/rules/discards";
import jokers from "../../data/rules/jokers";

import PokerHandsExamples from "./PokerHandsExample";

const contentMap = {
  score,
  cards,
  discards,
  jokers
};

function RulesContent({ section }) {

  if (section === "cards") {
    return (
      <div className="rules-content">
        <ReactMarkdown>
          {cards}
        </ReactMarkdown>

        <PokerHandsExamples />
      </div>
    );
  }

  const content = contentMap[section];

  if (!content) {
    return null;
  }

  return (
    <div className="rules-content">
      <ReactMarkdown>
        {content}
      </ReactMarkdown>
    </div>
  );
}

export default RulesContent;