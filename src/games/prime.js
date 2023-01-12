import processGame from '../index.js';

const primeGame = () => {
  const integerNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23];

  const question = Math.round(Math.random() * 25);
  let trueAnswer = '';
  if (integerNumbers.includes(question)) {
    trueAnswer = 'yes';
  } else {
    trueAnswer = 'no';
  }
  return [question, trueAnswer];
};

const rulesOfTheGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const runBrainPrimeGame = () => {
  processGame(primeGame, rulesOfTheGame);
};

export default runBrainPrimeGame;
