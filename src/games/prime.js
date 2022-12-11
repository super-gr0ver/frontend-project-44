import gameEngine from '../index.js';
import getRandomInRange from '../randomizer.js';

const gameDescription = () => 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (checkNumber) => {
  for (let i = 2; i < checkNumber - 1; i += 1) {
    if (Number.isInteger(checkNumber / i)) {
      return true;
    }
  }
  return false;
};

const gameTask = () => {
  const randomNumber = getRandomInRange(2, 101);
  let answer = '';
  answer = (isPrime(randomNumber) === true) ? answer = 'no' : answer = 'yes';

  return [randomNumber, answer];
};

export default () => {
  gameEngine(gameDescription, gameTask);
};