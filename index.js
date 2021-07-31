var readlineSync = require('readline-sync');
var userName = readlineSync.question('Hey! What is your name? ');

console.log(`Welcome! ${userName} Let's find how much you know Hardik.`);
console.log("Please answer these questions...");

var score=0;

function quiz(ques,answer){
  console.log("-----");
  var userAnswer=readlineSync.question(ques);
  if(userAnswer.toLowerCase()===answer.toLowerCase()){
    console.log("Right! well done");
    score++;
  }else{
    console.log("Wrong! oops!");
  }
  console.log("Current Score: ",score);
}

var quesOne={
  ques:"From which state I belongs to? ",
  answer:"Haryana"
}

var quesTwo={
  ques:"I am pursuing my B.E from which college? ",
  answer:"Chandigarh University"
}

var quesThree={
  ques:"My Birthday month is? ",
  answer:"February"
}

var quesBank = [quesOne,quesTwo,quesThree];

for(var i=0; i<quesBank.length; i++){
  quiz(quesBank[i].ques,quesBank[i].answer)
}


var highScores = [
  {
    name: "Hardik",
    score: 3,
  },
  {
    name: "Rohan",
    score: 3,
  },
]

function showScores() {
  console.log("-------------------");
  console.log("Your Total score: ", score);
  console.log("Check out the high scores, if your score is high then ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}

showScores();