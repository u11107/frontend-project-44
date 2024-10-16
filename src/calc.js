import { playGame, welcomeUser } from './index.js';
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
const getRandomOperation = () => {
  const operations = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operations.length);
  return operations[randomIndex];
};
export const gameCalc = () => {
  const userName = welcomeUser();
  // Выводим описание задания
  console.log('What is the result of the expression?');
  const getQuestionAndAnswer = () => {
    const num1 = Math.floor(Math.random() * 100);
    const num2 = Math.floor(Math.random() * 100);
    const operation = getRandomOperation();
    const question = `${num1} ${operation} ${num2}`;
    const correctAnswer = String(calculate(num1, num2, operation));
    return [question, correctAnswer];
  };
  playGame(userName, getQuestionAndAnswer);
};
