import processGame from '../index.js';

const isEven = () => {
  const question = Math.round(Math.random() * 100);
  let trueAnswer = '';

  if ((question % 2) === 0) {
    trueAnswer = 'yes';
  } else {
    trueAnswer = 'no';
  }

  return [question, trueAnswer];
};

const rulesOfTheGame = 'Answer "yes" if the number is even, otherwise answer "no".';
const runBrainEvenGame = () => {
  processGame(isEven, rulesOfTheGame);
};

export default runBrainEvenGame;
