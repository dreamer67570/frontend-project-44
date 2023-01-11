import processGame from '../index.js';

const calc = (numberOne, numberTwo, operation) => {
  let result = 0;
  if (operation === '+') {
    result = numberOne + numberTwo;
  } else if (operation === '-') {
    result = numberOne - numberTwo;
  } else if (operation === '*') {
    result = numberOne * numberTwo;
  }
  return result;
};

const gameCalc = () => {
  const operations = ['+', '-', '*'];
  const operationRandom = operations[Math.round(Math.random() * (operations.length - 1))];

  const numberOne = Math.round(Math.random() * 10);
  const numberTwo = Math.round(Math.random() * 10);

  const question = `${numberOne} ${operationRandom} ${numberTwo}`;
  const trueAnswer = String(calc(numberOne, numberTwo, operationRandom));

  return [question, trueAnswer];
};

const rulesOfTheGame = 'What is the result of the expression?';
const runBrainCalcGame = () => {
  processGame(gameCalc, rulesOfTheGame);
};

export default runBrainCalcGame;
