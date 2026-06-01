import { useState } from "react";
import Card from "./Card";
import "./Card.css";

function CardContainer({ cards }) {
  const [selectedCards, setSelectedCards] =
    useState([]);

  const toggleCard = (index) => {
    if (selectedCards.includes(index)) {
      setSelectedCards(
        selectedCards.filter(
          (i) => i !== index
        )
      );
    } else {
      setSelectedCards([
        ...selectedCards,
        index,
      ]);
    }
  };

  return (
    <div className="card-container">
      {cards.map((card, index) => (
        <Card
          key={index}
          rank={card.rank}
          suit={card.suit}
          selected={selectedCards.includes(
            index
          )}
          onClick={() =>
            toggleCard(index)
          }
        />
      ))}
    </div>
  );
}

export default CardContainer;