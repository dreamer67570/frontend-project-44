import readlineSync from 'readline-sync';

const processGame = (getQuestionAnswer, rulesOfTheGame) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('Your name: ');
  console.log(`Hi ${name}!`);
  console.log(rulesOfTheGame);

  const numberOfRound = 3;

  for (let iter = 0; iter < numberOfRound; iter += 1) {
    const [question, trueAnswer] = getQuestionAnswer();
    console.log(`Question: ${question}`);
    const yourAnswer = readlineSync.question('Your answer: ');
    if (yourAnswer === trueAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${yourAnswer} is wrong answer ;(. Correct answer was ${trueAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      return 1;
    }
  }
  console.log(`Congratulations, ${name}!`);
  return 0;
};

export default processGame;
