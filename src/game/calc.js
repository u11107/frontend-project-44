import playGame from '../index.js';
import getRandomNumber from '../utils/utils.js';

const calculate = (num1, num2, operation) => {
  switch (operation) {
  case '+':
    return num1 + num2;
  case '-':
    return num1 - num2;
  case '*':
    return num1 * num2;
  default:
    throw new Error(`Unknown operation: '${operation}'`);
  }
};

const generateQuestionAndAnswer = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const operations = ['+', '-', '*'];
  const operation = operations[getRandomNumber(0, operations.length - 1)];
  const question = `${num1} ${operation} ${num2}`;
  const answer = String(calculate(num1, num2, operation));
  return [question, answer];
};

const gameCalc = () => {
  const gameDescription = 'What is the result of the expression?';
  playGame(gameDescription, generateQuestionAndAnswer);
};

export default gameCalc;
