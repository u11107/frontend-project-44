import { playGame, welcomeUser } from './index.js';

const isEven = (num) => num % 2 === 0;

const gameEven = () => {
  const userName = welcomeUser();

  const getQuestionAndAnswer = () => {
    const number = Math.floor(Math.random() * 100);
    const correctAnswer = isEven(number) ? 'yes' : 'no';
    return [number, correctAnswer];
  };

  playGame(userName, getQuestionAndAnswer);
};

export default gameEven;
