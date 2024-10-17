import { playGame, welcomeUser } from './index.js';

const getGcd = (a, b) => {
  let num1 = a;
  let num2 = b;

  while (num2 !== 0) {
    [num1, num2] = [num2, num1 % num2];
  }

  return num1;
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
