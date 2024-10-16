import { playGame, welcomeUser } from './index.js';
// Функция для нахождения НОД
const getGcd = (a, b) => {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
};
export const gameGcd = () => {
  const userName = welcomeUser();
  console.log('Find the greatest common divisor of given numbers.');
  const getQuestionAndAnswer = () => {
    const num1 = Math.floor(Math.random() * 100) + 1; // Генерация случайного числа от 1 до 100
    const num2 = Math.floor(Math.random() * 100) + 1; // Генерация случайного числа от 1 до 100
    const question = `${num1} ${num2}`;
    const correctAnswer = String(getGcd(num1, num2)); // Приводим НОД к строке для сравнения
    return [question, correctAnswer];
  };
  playGame(userName, getQuestionAndAnswer);
};
