import playGame from '../index.js';
import getRandomNumber from '../utils/utils.js';

const progressionStart = getRandomNumber(0, 49);
const progressionStep = getRandomNumber(1, 10);
const progressionLength = 10;

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

const generateQuestionAndAnswer = () => {
  const progression = generateProgression(progressionStart, progressionStep, progressionLength);
  const hiddenIndex = getRandomNumber(0, progression.length - 1);
  const correctAnswer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const gameProgression = () => {
  const gameDescription = 'What number is missing in the progression?';
  playGame(gameDescription, generateQuestionAndAnswer);
};

export default gameProgression;
