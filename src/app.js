export default function rankingHeroes(arrHeroes) {
  return arrHeroes.sort((a, b) => b.health - a.health);
}
