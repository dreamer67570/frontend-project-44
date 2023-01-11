import processGame from '../index.js';

const algoritmEvklida = (a, b) => {
  if (a === 0 || b === 0) {
    return a + b;
  }

  if (a > b) {
    return algoritmEvklida(a - b, b);
  }

  return algoritmEvklida(a, b - a);
};

const nodGame = () => {
  const numberOne = Math.round(Math.random() * 10);
  const numberTwo = Math.round(Math.random() * 10);
  const question = `${numberOne} ${numberTwo}`;

  const trueAnswer = String(algoritmEvklida(numberOne, numberTwo));

  return [question, trueAnswer];
};

const rulesOfTheGame = 'Find the greatest common divisor of given numbers.';
const runBrainNodGame = () => {
  processGame(nodGame, rulesOfTheGame);
};

export default runBrainNodGame;
