'use strict';

let score = 0;
let username = prompt('What is your name?');
console.log('User name: ' + username);

alert('Hi ' + username + ', Welcome to my page!');
alert('let\'s play a guessing game about me. \nOnly Yes or No answers are valid.');

function yesCorrect(question) {
  if (question.toUpperCase() === 'YES') {
    score++;
    alert('Yes!, you are right.');
  }
  else if (question.toUpperCase() === 'NO') {
    alert('Sorry, wrong answer.');
  }
  else {
    alert('This answer is not valid');
  }
}

function noCorrect(question) {
  if (question.toUpperCase() === 'YES') {
    alert('Sorry, wrong answer.');
  }
  else if (question.toUpperCase() === 'NO') {
    score++;
    alert('Yes! you are right.');
  }
  else {
    alert('This answer is not valid');
  }
}


// Guess Question 1
let favColor = prompt(username + ' Is my favorite color Red? Yes or No:');
console.log('my favorite color: ' + favColor);

noCorrect(favColor);


// Guess Question 2
let coffee = prompt(username + ' Do I like coffee? Yes or No:');
console.log('coffee: ' + coffee);

noCorrect(coffee);


// Guess Question 3
let loveDubai = prompt(username + ' Do I love Dubai ? Yes or No');
console.log('love Dubai: ' + loveDubai);

noCorrect(loveDubai);

// Guess Question 4
let HPUser = prompt(username + ' Do I prefer HP computers? Yes or No');
console.log('HP user: ' + HPUser);

yesCorrect(HPUser);


// Guess Question 5
let ChocolatecakeUser = prompt(username + ' Do I prefer Chocolate cake? Yes or No');
console.log('Chocolate cake user: ' + ChocolatecakeUser);

noCorrect(ChocolatecakeUser);


// Guess Question 6
function guessFavNumber() {
  let counter = 1;
  let number;
  if (counter === 5) {
    alert('Sorry you run out of guesses');
  }
  while (counter < 5 && number !== 33) {
    number = parseInt(prompt('Guess my favorite number'));
    if (number > 33) {
      alert('You guessed too high! Guess again');
      counter++;
    } else if (number < 33) {
      alert('You guessed too low! Guess again');
      counter++;
    }
  }
  if (number === 33) {
    alert('That is correct! My favorite number is 33!');
    score++;
    counter = 5;
  }
}

guessFavNumber();


// Guess Question 7

function questionSeven() {
  let userFavFruit = ['apple', 'strawberry', 'orange', 'grape', 'watermelon'];

  for (let i = 0; i < 6; i++) {
    let userAnsw = prompt('Can you guess my favorite fruit?');
    let guess = userAnsw.toLowerCase();

    for (var j = 0; j < userFavFruit.length; j++) {
      if (guess === userFavFruit[j]) {
        alert('Congrats you got it right!!!');
        score++;
        i = 6;
        break;}
    }
    if (i !== 6) {
      alert('Sorry wrong answer, try again');
    }
  }
}

questionSeven();

alert('My favorite fruits are: apple, strawberry, orange, grape and watermelon');

alert('Good Job!... You got ' + score + ' correct answers!');
