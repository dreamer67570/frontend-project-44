import processGame from '../index.js';

const exceptionOfRandom = (diapason) => {
  const randomNumber = Math.round(Math.random() * diapason);
  if (randomNumber !== 0 && randomNumber !== 1) {
    return randomNumber;
  }
  return exceptionOfRandom(diapason);
};

const progressionGame = () => {
  const progressionArrays = [];

  const startProgression = exceptionOfRandom(10);
  const stepProgression = exceptionOfRandom(5);

  const countStopProgression = 10;

  progressionArrays[0] = startProgression;
  for (let iter = 1; iter < countStopProgression; iter += 1) {
    progressionArrays[iter] = progressionArrays[iter - 1] + stepProgression;
  }

  const questionArrays = [];
  const trueAnswer = progressionArrays[exceptionOfRandom(progressionArrays.length - 1)];

  for (let iter = 0; iter < progressionArrays.length; iter += 1) {
    if (progressionArrays[iter] === trueAnswer) {
      questionArrays[iter] = '..';
    } else {
      questionArrays[iter] = progressionArrays[iter];
    }
  }

  return [questionArrays, String(trueAnswer)];
};

const rulesOfTheGame = 'What number is missing in the progression?';
const runBrainProgressionGame = () => {
  processGame(progressionGame, rulesOfTheGame);
};

export default runBrainProgressionGame;
