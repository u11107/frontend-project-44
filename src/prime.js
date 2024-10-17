import { playGame, welcomeUser } from './index.js';

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};
const gamePrime = () => {
  const userName = welcomeUser();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const getQuestionAndAnswer = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
    const question = String(randomNumber);
    return [question, correctAnswer];
  };
  playGame(userName, getQuestionAndAnswer);
};
export default gamePrime;
