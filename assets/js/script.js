var timer = document.querySelector(".timer-box");
var startButton = document.getElementById("start-button");
var timeLeft = 180;
var questionCount = 0;
var scoreCount = 0;

// arrays with strings stored for answer and question numbers and separate arrays to change right or wrong flag as questions increment
var questions = ["This is question 1", "This is question 2", "This is question 3", "This is question 4", "This is question 5"];
var answersA = ["Question 1 answer A", "Question 2 answer A", "Question 3 answer A", "Question 4 answer A", "Question 5 answer A"];
var answersB = ["Question 1 answer B", "Question 2 answer B", "Question 3 answer B", "Question 4 answer B", "Question 5 answer B"];
var answersC = ["Question 1 answer C", "Question 2 answer C", "Question 3 answer C", "Question 4 answer C", "Question 5 answer C"];
var answersD = ["Question 1 answer D", "Question 2 answer D", "Question 3 answer D", "Question 4 answer D", "Question 5 answer D"];
var correctnessA = ["correct", "wrong", "wrong", "correct", "wrong"];
var correctnessB = ["wrong", "wrong", "wrong", "wrong", "correct"];
var correctnessC = ["wrong", "wrong", "wrong", "wrong", "wrong"];
var correctnessD = ["wrong", "correct", "correct", "wrong", "wrong"];

function gameOver(){
  document.querySelector(".submissionScreen").style.display = "block";
  document.getElementById("QandA").style.display = "none";
  return;
}

function startQuiz(){   
    // we want the start button to dissappear once the quiz starts
    document.getElementById("start-button").style.display = "none";
    // we want the questions and answers to appear once the quiz starts
    document.getElementById("QandA").style.display = "grid";
        //this is the timer that starts when the start quiz button is pressed
    timer.textContent = "Time Remaining: 180";
    var timeInterval = setInterval(function(){
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

  if(event.target.getAttribute("data-check") !== "correct"){
    timeLeft = timeLeft - 15;
   }else{
    scoreCount++;
  };
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
  console.log(questionCount);
  console.log(scoreCount);
  if(questionCount > 9 || timeLeft <= 0){
    gameOver();
    }
}


 


    startButton.addEventListener("click", startQuiz);
    document.getElementById("answer-A").addEventListener("click", answerSelect);
    document.getElementById("answer-B").addEventListener("click", answerSelect);
    document.getElementById("answer-C").addEventListener("click", answerSelect);
    document.getElementById("answer-D").addEventListener("click", answerSelect);
  




   