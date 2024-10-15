import readlineSync from 'readline-sync';

// Приветствие пользователя
export const welcomeUser = () => {
    console.log('brain-games');
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('What is your name? ');
    console.log(`Hello, ${userName}!`);
    return userName;
};

// Общая функция игры
export const playGame = (userName, getQuestionAndAnswer, roundsCount = 3) => {
    for (let i = 0; i < roundsCount; i++) {
        const [question, correctAnswer] = getQuestionAndAnswer();
        console.log(`Question: ${question}`);

        const userAnswer = readlineSync.question('Your answer: ').toLowerCase();

        if (userAnswer !== correctAnswer) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${userName}!`);
            return;
        }

        console.log('Correct!');
    }

    console.log(`Congratulations, ${userName}!`);
};
