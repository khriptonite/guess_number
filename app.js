'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 41;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let random = Math.floor(Math.random() * 20) + 1;
console.log(random);
let score = 20;
let highscore = 0;

//Functions
//Message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
//Number
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  //When there is no input
  if (!guess) {
    if (score > 1) {
      //   document.querySelector('.message').textContent = '⛔ Input a number!';
      displayMessage('⛔ Input a number!');
      displayNumber('X');
      //   document.querySelector('.number').textContent = 'X';
      document.querySelector('.number').style.color = '#c31432';
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      //   document.querySelector('.message').textContent = '❌ Потрачено!';
      displayMessage('❌ Потрачено!');
      document.querySelector('.score').textContent = 0;
      document.body.style.background = '#c31432';
    }

    //When guess is too low
  } else if (guess !== random) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess < random ? 'Too low!' : 'Too high!';
      displayMessage(guess < random ? 'Too low!' : 'Too high!');
      displayNumber('X');
      document.querySelector('.number').style.color = '#c31432';
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('❌ Потрачено!');
      document.querySelector('.score').textContent = 0;
      document.body.style.background = '#c31432';
    }
  }
  //   else if (guess < random) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too low!';
  //       document.querySelector('.number').textContent = 'X';
  //       document.querySelector('.number').style.color = '#c31432';
  //       score -= 1;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '❌ Потрачено!';
  //       document.querySelector('.score').textContent = 0;
  //       document.body.style.background = '#c31432';
  //     }

  //     //When guess is too high
  //   } else if (guess > random) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too high!';
  //       document.querySelector('.number').textContent = 'X';
  //       document.querySelector('.number').style.color = '#c31432';
  //       score -= 1;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '❌ Потрачено!';
  //       document.querySelector('.score').textContent = 0;
  //       document.body.style.background = '#c31432';
  //     }

  //When player wins
  else {
    // document.querySelector('.message').textContent = '🎉 Correct number!';
    displayMessage('🎉 Correct number!');
    // document.querySelector('.number').textContent = random;
    displayNumber(random);
    document.body.style.background = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').style.color = '#333';
    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  random = Math.floor(Math.random() * 20) + 1;
  //   document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  displayNumber('?');
  document.querySelector('.number').style.color = '#333';
  document.body.style.background = '#222';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  console.log(random);
});
