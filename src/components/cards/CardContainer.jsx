import { useState, useEffect } from "react";
import Card from "./Card";
import "./Card.css";

// CardContainer ahora soporta modo controlado mediante `selectedIndices` y `onSelectionChange`.
function CardContainer({ cards, selectedIndices: controlledSelected, onSelectionChange }) {
  const isControlled = Array.isArray(controlledSelected);

  const [internalSelected, setInternalSelected] = useState([]);

  // Si es controlado, usamos el array pasado desde el padre, sino el estado interno
  const selected = isControlled ? controlledSelected : internalSelected;

  useEffect(() => {
    if (!isControlled) return;
    // no-op: cuando es controlado el padre decide la fuente de la verdad
  }, [isControlled, controlledSelected]);

  const toggleCard = (index) => {
    if (isControlled) {
      const next = selected.includes(index) ? selected.filter(i => i !== index) : [...selected, index];
      onSelectionChange && onSelectionChange(next);
    } else {
      if (internalSelected.includes(index)) {
        setInternalSelected(internalSelected.filter(i => i !== index));
      } else {
        setInternalSelected([...internalSelected, index]);
      }
    }
  };

  return (
    <div className="card-container">
      {cards.map((card, index) => (
        <Card
          key={index}
          rank={card.rank}
          suit={card.suit}
          selected={selected.includes(index)}
          onClick={() => toggleCard(index)}
        />
      ))}
    </div>
  );
}

export default CardContainer;