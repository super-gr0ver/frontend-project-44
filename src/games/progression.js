import gameEngine from '../index.js';
import getRandomInRange from '../randomizer.js';

const gameDescription = () => 'What number is missing in the progression?';
const gameTask = () => {
  const randomArrLength = getRandomInRange(5, 10);
  const randomArrIndex = (getRandomInRange(5, randomArrLength) - 1);
  const randomStartNumb = getRandomInRange(0, 100);

  const result = [];
  for (let i = 1; i < randomArrLength ** 2; i += randomArrLength) {
    result.push(randomStartNumb + i);
  }

  const answer = String(result[randomArrIndex]);
  result[randomArrIndex] = '..';
  const question = result.join(' ');
  return [question, answer];
};

export default () => {
  gameEngine(gameDescription, gameTask);
};
