import React from "react";
import CardContainer from "../cards/CardContainer";

const hands = [
  {
    title: "Escalera Real",
    cards: [
      { rank: "A", suit: "C" },
      { rank: "K", suit: "C" },
      { rank: "Q", suit: "C" },
      { rank: "J", suit: "C" },
      { rank: "T", suit: "C" }
    ]
  },
  {
    title: "Escalera de Color",
    cards: [
      { rank: "9", suit: "H" },
      { rank: "8", suit: "H" },
      { rank: "7", suit: "H" },
      { rank: "6", suit: "H" },
      { rank: "5", suit: "H" }
    ]
  },
  {
    title: "Póker (Four of a Kind)",
    cards: [
      { rank: "J", suit: "S" },
      { rank: "J", suit: "C" },
      { rank: "J", suit: "D" },
      { rank: "J", suit: "H" },
      { rank: "2", suit: "S" }
    ]
  },
  {
    title: "Full House",
    cards: [
      { rank: "3", suit: "H" },
      { rank: "3", suit: "S" },
      { rank: "3", suit: "C" },
      { rank: "Q", suit: "D" },
      { rank: "Q", suit: "S" }
    ]
  },
  {
    title: "Color (Flush)",
    cards: [
      { rank: "K", suit: "S" },
      { rank: "T", suit: "S" },
      { rank: "8", suit: "S" },
      { rank: "4", suit: "S" },
      { rank: "2", suit: "S" }
    ]
  },
  {
    title: "Escalera (Straight)",
    cards: [
      { rank: "8", suit: "C" },
      { rank: "7", suit: "H" },
      { rank: "6", suit: "S" },
      { rank: "5", suit: "D" },
      { rank: "4", suit: "C" }
    ]
  },
  {
    title: "Trío (Three of a Kind)",
    cards: [
      { rank: "9", suit: "D" },
      { rank: "9", suit: "H" },
      { rank: "9", suit: "S" },
      { rank: "A", suit: "C" },
      { rank: "K", suit: "H" }
    ]
  },
  {
    title: "Doble Pareja (Two Pair)",
    cards: [
      { rank: "Q", suit: "C" },
      { rank: "Q", suit: "D" },
      { rank: "5", suit: "S" },
      { rank: "5", suit: "H" },
      { rank: "9", suit: "C" }
    ]
  },
  {
    title: "Pareja (Pair)",
    cards: [
      { rank: "T", suit: "H" },
      { rank: "T", suit: "C" },
      { rank: "A", suit: "D" },
      { rank: "K", suit: "S" },
      { rank: "6", suit: "H" }
    ]
  }
];

const PokerHandsExamples = () => {
  return (
    <div className="poker-examples-container">
      {hands.map(hand => (
        <div key={hand.title} className="hand-section mb-6">
          <h3 className="text-lg font-bold text-slate-200 mb-2">{hand.title}</h3>
          
          {/* Inyección de los datos estructurados en tu contenedor de cartas */}
          <CardContainer cards={hand.cards} />
        </div>
      ))}
    </div>
  );
};

export default PokerHandsExamples;