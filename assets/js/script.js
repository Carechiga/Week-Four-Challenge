var timer = document.querySelector(".timer-box");
var startButton = document.getElementById("start-button");
var answerButton = document.querySelectorAll(".answer-button");

function startQuiz(){   
    document.getElementById("start-button").style.display = "none";
    document.getElementById("QandA").style.display = "grid";
    timer.textContent = "Time Remaining: 180";
    var timeLeft = 180;
   
    var timeInterval = setInterval(function () {
      if(timeLeft > 0){
        timer.textContent = "Time Remaining: " + timeLeft;
        timeLeft--;
      }  else{
        timer.textContent = "Time Remaining: " + timeLeft;
        clearInterval(timeInterval);}
        }, 1000);
    };
  
    startButton.addEventListener("click", function(){startQuiz()});
