'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  printGoals: function (...number) {
    for (let i = 0; i < number.length; i++) {
      console.log(number[i]);
    }
    console.log(number.length);
  },
};

for (const [i, name] of Object.entries(game.scored)) {
  console.log(`Goal ${Number(i) + 1}: ${name}`);
}

let sum = 0;

for (const odd of Object.values(game.odds)) {
  sum += odd;
}

// console.log(sum / 3);

// console.log(Object.entries(game.odds));

for (const [name, odd] of Object.entries(game.odds)) {
  console.log(`Odd of ${'victory ' + (game[name] || 'draw')}: ${odd}`);
}

const scorers = {};

for (const name of game.scored) {
  scorers[name] ? scorers[name]++ : (scorers[name] = 1);
}

console.log(scorers);
