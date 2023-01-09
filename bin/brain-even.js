#!/usr/bin/env node
import readlineSync from 'readline-sync';

const gameBrainEven = () => {
  let trueAnswer = 'yes';
  let yourAnswer = 'yes';
  const max = 100;
  const min = 1;

  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('Your name: ');
  console.log(`Hi ${name}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let iter = 0; iter < 3; iter += 1) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(`Question: ${randomNumber}`);
    if ((randomNumber % 2) === 0) {
      trueAnswer = 'yes';
    } else {
      trueAnswer = 'no';
    }
    yourAnswer = readlineSync.question('Your answer: ');
    if (yourAnswer === trueAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${yourAnswer}! is wrong answer ;(. Correct answer was ${trueAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default gameBrainEven;
gameBrainEven();
