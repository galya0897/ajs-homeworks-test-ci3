export default function sortUnits(gamers) {
  gamers.sort((a, b) => b.health - a.health);
  return gamers;
}