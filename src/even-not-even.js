import readlineSync from 'readline-sync';


const isEven = (num) => num % 2 === 0;

export const welcomeUser = () => {
    console.log('brain-games')
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('What is your name? ');
    console.log(`Hello, ${userName}`);
    return userName;
}


export const playGame = (userName) => {
    const rounds = 3;
    for (let i = 0; i < rounds; i++) {
        const number = Math.floor(Math.random() * 100);
        console.log();
        console.log(`Question: ${number}`);

        const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
        const correctAnswer = isEven(number) ? 'yes' : 'no';

        if (userAnswer !== correctAnswer) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${userName}!`);
            return;
        }

        console.log('Correct!');
    }

    console.log(`Congratulations, ${userName}!`);
};

