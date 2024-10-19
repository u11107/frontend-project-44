import { playGame } from './index.js';
import {getRandomNumber} from "../utils/utils.js";

const getGcd = (a, b) => {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const generateQuestionAndAnswer = () => {
  const num1 = getRandomNumber(1,100);
  const num2 = getRandomNumber(1,100);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(getGcd(num1, num2));
  return [question, correctAnswer];
};

const gameGcd = () => {
  const gameDescription = 'Find the greatest common divisor of given numbers.';
  playGame(gameDescription, generateQuestionAndAnswer);
};

export default gameGcd;
