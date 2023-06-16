const userName = 'Jane';

userName ? console.log(`Hello, ${userName}`) : console.log('Hello!')

const userQuestions = 'the Magic Eight Ball'

console.log(`${userQuestions}, ${userName}`)

randomNumber = Math.floor(Math.random()*8)
let eightBall = ''; 

switch(randomNumber){
  case 1 :
  eightBall = 'It is certain'
  break;
  case 2 :
  eightBall = 'It is decidedly so'
  break;
  case 3 :
  eightBall = 'Reply hazy try again'
  break;
  case 4 :
  eightBall = 'Cannot predict now'
  break;
  case 5 :
  eightBall = 'Do not count on it'
  break;
  case 6 :
  eightBall = 'My sources say no'
  break;
  case 7 :
  eightBall = 'Outlook not so good'
  break;
  case 8 :
  eightBall = 'Signs point to yes'
  break;
  default:
  eightBall = 'invalid'
  break;
}
randomNumber === 0 ? console.log('not zerro') : 
console.log(eightBall)