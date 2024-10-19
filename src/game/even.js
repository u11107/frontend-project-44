import { playGame, welcomeUser } from './index.js';
import { getRandomNumber } from "../utils/utils.js";

const isEven = (num) => num % 2 === 0;

const gameEven = () => {
  const userName = welcomeUser();

  const getQuestionAndAnswer = () => {
    const number = getRandomNumber(1, 100);
    const correctAnswer = isEven(number) ? 'yes' : 'no';
    const question = `Question: ${number}`;
    return [question, correctAnswer];
  };

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  playGame(userName, getQuestionAndAnswer);
};

export default gameEven;
