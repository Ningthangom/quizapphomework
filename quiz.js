var currentIndex = 0;
var questionsTitle = document.getElementById("question")
var choicesSection = document.getElementById("choices")
var rightOrwrong = document.getElementById('showAndhide')

let questions = [
    {
        question: "What are JavaScript Data Types?",
        answers: ["Number", "String", "Boolean","Object","All of them"],
        answer: "All of them"
    },
    {
        question: "Is it possible to break JavaScript Code into several lines?",
        answers: ["Yes", "No", "Maybe"],
        answer: "Yes"
    },
    {
        question: " Which company developed JavaScript?",
        answers: ["Google", "Microsoft", "Netscape","Amazon"],
        answer: "Netscape"
    },
    {
        question: " What are global variables? ",
        answers: ["the ones inside a loop", "the ones defined in side a function", "the ones available throughout the length of the code"],
        answer: "the ones available throughout the length of the code"
    },
    {
        question: "What is 'this' keyword in JavaScript?",
        answers: ["Nothing", "the object from where it was called", "pronoun"],
        answer: "the object from where it was called"
    },
  
  ]
function getQuestion()
{
    choicesSection.innerHTML = ""; 
    /* currentQuestion.innerHTML = "";  */
   var currentQuestion = questions[currentIndex];
   console.log(currentQuestion);
  currentQuestion.innerHTML = "";

  questionsTitle.innerHTML = currentQuestion.question;
  currentQuestion.answers.forEach(function(choice, i)
  {
    var choiceNode = document.createElement("button");
    choiceNode.setAttribute("class", "choice");
    choiceNode.setAttribute("value", choice);
    choiceNode.textContent = i + 1+ "." + choice;
    choiceNode.onclick = questionClick;
    choicesSection.appendChild(choiceNode);
  }) 
}

//Timer
/* var timerInterval;
let time = 0;
/* document.getElementsByClassName("start").onclick =  */
/* function startTimer(){   
  
        timerInterval = setInterval(function(){
        document.getElementById("timer").innerHTML = time
        time ++;
        if(time == 100){
            clearInterval(timerInterval);
            alert("Time's Up")

        } 
        if (questions[currentIndex]==questions.length - 1 ){
          clearInterval(timerInterval);
          alert("Well Done");

        }                   
    },1000);
}

startTimer(); */ 

let time;
//Countdown timer for time trial
var timerInterval;
function startTimer(){   
        time = 60; //Sets time
        timerInterval = setInterval(function(){
        document.getElementById("timer").innerHTML = time //Displays time
        time --; //counts down
        if(time == -1){ //Stops timer when it reads zero
         
            clearInterval(timerInterval); //Clears the interval
            alert("Game Over")
            window.location.href = "index.html";
        }                    
    },1000);
}
startTimer()


function questionClick()
{
    if(this.value === questions[currentIndex].answer)
    {
      console.log("Correct")
      /* rightOrwrong.style.display = "Correct"; */
      alert("Right")

      currentIndex++;
      console.log(currentIndex);
      if (currentIndex <= 4){

        getQuestion();
      }else{

        alert("Game End and you finished the quiz at " + time + "s");
        window.location.href = "resultpage.html";
        //stop the timer
        // go to result page
      }
    
    }else {
      alert("Wrong");
    }
}

getQuestion();