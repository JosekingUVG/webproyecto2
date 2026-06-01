const CLOUD_NAME = "dkrjxumbb";

export function getCardImage(
  rank,
  suit,
  resolution = "2x"
) {
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/balatro/face/${rank}${suit}_${resolution}.png`;
}