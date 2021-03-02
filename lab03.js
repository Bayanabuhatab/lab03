'use strict';

var score = 0;
var name = prompt('What is your name?');
console.log('User name: ' + name);

alert('Hi ' + name + ', Welcome to my page!');
alert('let\'s play a guessing game about me. \nOnly Yes or No answers are valid.');

function yesCorrect (question) {
    if (question.toUpperCase() === 'YES') {
        score++;
        alert("Yes!, you are right.");
    }
    else if (question.toUpperCase() === 'NO'){
        alert("Sorry, wrong answer.");
    }
    else {
        alert("This answer is not valid");
    }
}

function noCorrect (question) {
    if (question.toUpperCase() === 'YES') {
        alert("Sorry, wrong answer.");
    }
    else if (question.toUpperCase() === 'NO'){
        score++;
        alert("Yes! you are right.");
    }
    else {
        alert("This answer is not valid");
    }
}


// Guess Question 1
var favColor = prompt(name + " Is my favorite color Red? Yes or No:");
console.log('my favorite color: ' + favColor);

noCorrect(favColor);


// Guess Question 2
var coffee = prompt(name + ' Do I like coffee? Yes or No:');
console.log('coffee: ' + coffee);

noCorrect(coffee);


// Guess Question 3
let loveDubai = prompt(name + ' Do I love Dubai ? Yes or No');
console.log('love Dubai: ' + loveDubai);

noCorrect(loveDubai);

// Guess Question 4
var HPUser = prompt(name + ' Do I prefer HP computers? Yes or No');
console.log('HP user: ' + HPUser);

yesCorrect(HPUser);


// Guess Question 5
let ChocolatecakeUser = prompt(name + ' Do I prefer Chocolate cake? Yes or No');
console.log('Chocolate cake user: ' + ChocolatecakeUser);

noCorrect(ChocolatecakeUser);


// Guess Question 6
function guessFavNumber() {
    var counter = 1;
    if (counter == 5) {
        alert('Sorry you run out of guesses');
    }
    while (counter < 5 && number !==33) {
        var number = parseInt(prompt('Guess my favorite number'));
        if (number > 33) {
            alert('You guessed too high! Guess again');
            counter++;
        } else if (number < 33) {
            alert('You guessed too low! Guess again');
            counter++;
        }
    }
    if (number == 33) {
        alert('That is correct! My favorite number is 33!');
        score++;
        counter = 5;
    }
}

guessFavNumber();


// Guess Question 7

function questionSeven() {
    var userFavFruit = ['apple', 'strawberry', 'orange', 'grape', 'watermelon'];

    for (var i = 0; i < 6; i++) {
        var userAnsw = prompt('Can you guess my favorite fruit?');
        var guess = userAnsw.toLowerCase();

        for (var j = 0; j < userFavFruit.length; j++){
            if (guess === userFavFruit[j]) {
                alert('Congrats you got it right!!!');
                score++;
                i = 6;
                break;
            }
        }
        if (i !==6){
            alert('Sorry wrong answer, try again');
        }
    }
}

questionSeven();

alert('My favorite fruits are: apple, strawberry, orange, grape and watermelon');

alert('Good Job!... You got ' + score + ' correct answers!');
