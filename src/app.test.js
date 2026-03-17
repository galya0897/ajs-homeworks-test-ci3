import rankingHeroes from './app';

const expected = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'мечник', health: 10 },
];

const received = rankingHeroes(
  [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ],
);

test('sort heroes from max health to min', () => {
  expect(received).toEqual(expected);
});

test('sort heroes from max health to minn', () => {
  const result = rankingHeroes(
    [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ],
  );

  const exp = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  expect(result).toEqual(exp);
});

test('sortHeroes: Not toBe', () => {
  expect(rankingHeroes(expected)).not.toBe(received);
});