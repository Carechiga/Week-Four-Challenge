var timer = document.querySelector(".timer-box");
var startButton = document.getElementById("start-button");
var scoreName = document.querySelector(".nameInput");
var currentScore = document.getElementById("scoreLine");
var showScore = document.querySelector(".score-box");
var lastScore = document.querySelector(".scoreLine");
var timeLeft = 180;
var timeInterval = 0;
var questionCount = 0;
var scoreCount = 0;
var finalScore = 0;

// arrays with strings stored for answer and question numbers and separate arrays to change right or wrong flag as questions increment
var questions = ["What does API stand for?", "What symbols are used to denote an HTML element?", "Which of the following would be correct notation for a class attribute in CSS", "How would you increment a variable (i)?", "Which of the following is not a variable type?", "Which of the following is correct formatting of a for loop?", "What does DOM mean?", "How do you declare an object in JavaScript?", "How do you declare a variable in CSS?", "What is Git?"];
var answersA = ["Automatically Provided Information", "( )", "#class", "i++", "number", "for(i; i < array.length; i++)", "Document Object Method", "var obj = {property1: , property2: }", "var name = value;", "A programming language"];
var answersB = ["Application Performance Index", "[ ]", "*class", "i+", "array", "for(var i = 0; i < array.length;)", "Document Object Model", "var obj = [property1: , property2: ]", "var name = [value];", "Version control software"];
var answersC = ["Application Programming Interface", "{ }", "$(class)", "i = +1", "undefined", "for(i++; i < array.length;)", "Digital Office Model", "var obj = property1: , property2: ", "var(--name, value)", "A console command"];
var answersD = ["Artifical Program Interface", "< >", ".class", "incr(i)", "boolean", "for(var i = 0; i < array.length; i++)", "Direct Object Method", "var obj = (property1: , property2: )", "var name(value)", "A JavaScript object"];
var correctnessA = ["wrong", "wrong", "wrong", "correct", "wrong", "wrong", "wrong", "correct", "wrong", "wrong"];
var correctnessB = ["wrong", "wrong", "wrong", "wrong", "correct", "wrong", "correct", "wrong", "wrong", "correct"];
var correctnessC = ["correct", "wrong", "wrong", "wrong", "wrong", "wrong", "wrong", "wrong", "correct", "wrong"];
var correctnessD = ["wrong", "correct", "correct", "wrong", "wrong", "correct", "wrong", "wrong", "wrong", "wrong"];

//displays last quiz score from Local Storage
function pastresults() {
  var setScore = JSON.parse(localStorage.getItem("score"));
  if (setScore !== null) {
    lastScore.textContent = setScore.userName + " - " + setScore.score;
  }
}

pastresults();


//this function ends the quiz and brings up score submission
function gameOver(){
  document.querySelector(".submissionScreen").style.display = "block";
  document.getElementById("QandA").style.display = "none";
  document.getElementById("start-button").style.display = "inline";
  clearInterval(timeInterval);
  finalScore = Math.floor(scoreCount * (1 + (timeLeft / 60)) * 100);
  currentScore.textContent = "Score: " + finalScore;
  return;
}

function startQuiz(){   
    // we want the start button to dissappear once the quiz starts
    document.getElementById("start-button").style.display = "none";
    document.querySelector(".submissionScreen").style.display = "none";
    // we want the questions and answers to appear once the quiz starts
    document.getElementById("QandA").style.display = "grid";
     //resets the timer if played again 
    timeLeft = 180;
    scoreCount = 0;
    showScore.textContent = scoreCount;
    questionCount = 0;
    document.getElementById("question").textContent = questions[questionCount];
    document.getElementById("answer-A").textContent = answersA[questionCount];
    document.getElementById("answer-B").textContent = answersB[questionCount];
    document.getElementById("answer-C").textContent = answersC[questionCount];
    document.getElementById("answer-D").textContent = answersD[questionCount];
    document.getElementById("answer-A").setAttribute("data-check", correctnessA[questionCount]);
    document.getElementById("answer-B").setAttribute("data-check", correctnessB[questionCount]);
    document.getElementById("answer-C").setAttribute("data-check", correctnessC[questionCount]);
    document.getElementById("answer-D").setAttribute("data-check", correctnessD[questionCount]);
    
      //this is the timer that starts when the start quiz button is pressed  
    timer.textContent = "Time Remaining: 180";
    timeInterval = setInterval(function(){
      if(timeLeft > 0){
        timer.textContent = "Time Remaining: " + timeLeft;
        timeLeft--;
      }  else{
        timer.textContent = "Time Remaining: " + timeLeft;
        clearInterval(timeInterval);
        gameOver();}
        }, 1000);
      };

function answerSelect(event){
//checks the correctness of the option chosen through data-check if wrong decrements time if correct increases score count;
  if(event.target.getAttribute("data-check") !== "correct"){
    timeLeft = timeLeft - 20;
    if(timeLeft < 0){
      timeLeft = 0;
    };
   }else{
    scoreCount++;
    showScore.textContent = scoreCount;
  };
  //advances quiz to the next question
  questionCount++;

  document.getElementById("question").textContent = questions[questionCount];
  document.getElementById("answer-A").textContent = answersA[questionCount];
  document.getElementById("answer-B").textContent = answersB[questionCount];
  document.getElementById("answer-C").textContent = answersC[questionCount];
  document.getElementById("answer-D").textContent = answersD[questionCount];
  document.getElementById("answer-A").setAttribute("data-check", correctnessA[questionCount]);
  document.getElementById("answer-B").setAttribute("data-check", correctnessB[questionCount]);
  document.getElementById("answer-C").setAttribute("data-check", correctnessC[questionCount]);
  document.getElementById("answer-D").setAttribute("data-check", correctnessD[questionCount]);

//triggers end of game if last question is answered or if time runs out
  if(questionCount > 9 || timeLeft <= 0){
    gameOver();
    }
}

function highScore(event){
  var scoreFinal = {
  userName: scoreName.value,
  score: finalScore,
}
localStorage.setItem("score", JSON.stringify(scoreFinal));
}


 


    startButton.addEventListener("click", startQuiz);
    document.getElementById("answer-A").addEventListener("click", answerSelect);
    document.getElementById("answer-B").addEventListener("click", answerSelect);
    document.getElementById("answer-C").addEventListener("click", answerSelect);
    document.getElementById("answer-D").addEventListener("click", answerSelect);
    document.getElementById("scoreInput").addEventListener("submit", highScore);




   