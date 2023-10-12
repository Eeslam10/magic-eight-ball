//In this project we will build a Magic Eight Ball using control flow in JavaScript.  The user will be able to input a question, then our program will output a random fortune.


// define a variable called userName 
let userName = 'islam';

//create a ternary expression that decides what to do if the user enters a name or not
userName ? console.log(`Hello, ${userName}!`)
: console.log('Hello!');

//Create a variable named userQuestion
let userQuestion = "What is the population of the world?";

console.log(`${userName} has asked ${userQuestion}`);


//generating a random number between 0 and 7.
let randomNumber = Math.floor(Math.random() * 8);
console.log(randomNumber);


// Create one more variable named eightBall, and setting it equal to an empty string
let eightBall = '';


//We need to create a control flow that takes in the randomNumber we made in step 5, and then assigns eightBall to a reply that a Magic Eight Ball would return
switch(randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again'
;
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
  // default:
  //   eightBall = 'Invalid'
}

console.log(eightBall)
