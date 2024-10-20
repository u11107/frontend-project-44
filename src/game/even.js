import playGame from './index.js';
import getRandomNumber from '../utils/utils.js';

const isEven = (num) => num % 2 === 0;

const getQuestionAndAnswer = () => {
  const number = getRandomNumber(1, 100);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [String(number), correctAnswer];
};

const gameEven = () => {
  const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
  playGame(gameDescription, getQuestionAndAnswer);
};

export default gameEven;
