import playGame from '../index.js';
import getRandomNumber from '../utils/utils.js';

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const number = getRandomNumber(1, 100);
  const answer = isEven(number) ? 'yes' : 'no';
  return [String(number), answer];
};

const gameEven = () => {
  const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
  playGame(gameDescription, generateRound);
};

export default gameEven;
