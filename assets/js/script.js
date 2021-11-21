// --------------1. quiz content------------
// 1.1 creat quiz questions
const quizData = [
  {
    question: "What is the command we use to create a new file? ",
    a: "touch",
    b: "pwd",
    c: "mkdir",
    d: "cd",
    correct: "a",
  },
  {
    question:
      "When creating a form with HTML, which of the following is not typically used? ",
    a: "<label> for the name of the input field",
    b: "<input> for the type of input the user is expected to provide, like text or email",
    c: "<header> for the title of the form",
    d: "<button> for allowing the user to submit their data after they have filled out the form",
    correct: "c",
  },
  {
    question:
      "When using flexbox, which property needs to be adjusted in order to add space between items? ",
    a: "justify-content",
    b: "flex-flow",
    c: "align-content",
    d: "space-between",
    correct: "a",
  },
  {
    question: "What is one advantage of Responsive Design for a developer? ",
    a: "Faster page loading time",
    b: "Faster development",
    c: "More social sharing",
    d: "Improved SEO",
    correct: "b",
  },
  {
    question:
      "Which of the following type of variable is visible everywhere in your JavaScript code?",
    a: "global variable",
    b: "local variable",
    c: "Both of the above.",
    d: "None of the above.",
    correct: "a",
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    a: "<javascript",
    b: "scripting",
    c: "script",
    d: "js",
    correct: "c",
  },
];

// 1.2 show quiz questions
var questionEl = document.getElementById("question");
var a_text = document.getElementById("a");
var b_text = document.getElementById("b");
var c_text = document.getElementById("c");
var d_text = document.getElementById("d");

function loadQuiz() {
  var currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

// --------------2. start quiz------------
// 2.1 declare variables
var startButton = document.getElementById("start");
var resultEl = document.getElementById("result");
var timerEl = document.getElementById("timer");
var timeLeft = 60;

// 2.2 start the quiz and trigger the timer
function startQuiz() {
  loadQuiz();
  var timeInterval = setInterval(function () {
    if (timeLeft > 0) {
      timerEl.textContent = timeLeft + "s";
      timeLeft--;
    } else {
      timerEl.textContent = "";
      clearInterval(timeInterval);
      showScore();
    }
  }, 1000);
}

// 2.3 Add an event listener to the start button
startButton.addEventListener("click", startQuiz);

// ---------3. answer quetions---------
// 3.1 declare variables
var currentQuiz = 0;
var score = 0;

// 3.2 show the next question after answering the last one
function nextQuestion() {
  // get results from the last one
  if (quizData[currentQuiz].correct === this.id) {
    resultEl.textContent = "Correct!";
    score += 10;
  } else {
    resultEl.textContent = "Wrong!";
    timeLeft -= 20;
  }

  // show the next question
  currentQuiz++;
  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    showScore();
  }
}

// 3.3 Add an event listener to the start button
a_text.addEventListener("click", nextQuestion);
b_text.addEventListener("click", nextQuestion);
c_text.addEventListener("click", nextQuestion);
d_text.addEventListener("click", nextQuestion);

// -----------4. show scores-----------

function showScore() {
  // css display
}

// high score: localStorage
// goback: a TAG T
// CLEAR HIGH : DELETE LOCALSTORAGE
//view high score:
