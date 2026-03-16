export default function showHealth(gamers) {
  let result;
  if (gamers.health > 50) {
    result = 'healthy';
  }
  if (gamers.health <= 50 && gamers.health > 15) {
    result = 'wounded';
  }
  if (gamers.health <= 15 && gamers.health > 0) {
    result = 'critical';
  }
  if (Number.isNaN(gamers.health) || gamers.health === undefined || gamers.health < 0 || typeof (gamers.health) !== 'number') {
    throw new Error('Parameter is not a number!');
  }
  return result;
}