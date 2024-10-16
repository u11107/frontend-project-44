import { playGame, welcomeUser } from './index.js';

const getGcd = (a, b) => {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
};
const gameGcd = () => {
  const userName = welcomeUser();
  console.log('Find the greatest common divisor of given numbers.');
  const getQuestionAndAnswer = () => {
    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;
    const question = `${num1} ${num2}`;
    const correctAnswer = String(getGcd(num1, num2));
    return [question, correctAnswer];
  };
  playGame(userName, getQuestionAndAnswer);
};
export default gameGcd;
