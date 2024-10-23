import playGame from '../index.js';
import getRandomNumber from '../utils/utils.js';

const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i += 1) {
        if (num % i === 0) return false;
    }
    return true;
};

const generateQuestionAndAnswer = () => {
    const randomNumber = getRandomNumber(1, 100);
    const answer = isPrime(randomNumber) ? 'yes' : 'no';
    const question = String(randomNumber);
    return [question, answer];
};

const gamePrime = () => {
    const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
    playGame(gameDescription, generateQuestionAndAnswer);
};

export default gamePrime;
