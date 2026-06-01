import { getCardImage } from "../../utils/cloudinary/getCardImage";

function Card({
  rank,
  suit,
  selected,
  onClick,
  size = "medium"
}) {
  return (
    <img
      className={`card card-${size} ${
        selected ? "selected" : ""
      }`}
      src={getCardImage(rank, suit)}
      alt={`${rank}${suit}`}
      onClick={onClick}
    />
  );
}

export default Card;