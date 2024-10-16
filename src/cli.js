import readlineSync from 'readline-sync';

export const welcomeUser = () => {
    console.log('brain-games');
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('What is your name? ');
    console.log(`Hello, ${userName}!`);
};

