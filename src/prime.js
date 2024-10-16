import { playGame, welcomeUser } from './index.js';

// Функция для проверки, является ли число простым
const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

export const gamePrime = () => {
    const userName = welcomeUser();

    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

    const getQuestionAndAnswer = () => {
        const randomNumber = Math.floor(Math.random() * 100) + 1; // Случайное число от 1 до 100
        const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no'; // Правильный ответ
        const question = String(randomNumber); // Число как вопрос
        return [question, correctAnswer];
    };

    playGame(userName, getQuestionAndAnswer);
};
