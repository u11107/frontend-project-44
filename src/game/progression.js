import { playGame } from './index.js';
import {getRandomNumber} from "../utils/utils.js";

const generateProgression = () => {
  const progression = [];
  const start = getRandomNumber(0, 49);
  const step = getRandomNumber(1, 10);
  const length = 10;
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

const generateQuestionAndAnswer = () => {
  const progression = generateProgression();
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
