// create a variable that holds all questions, choices, and correct answers:
var questions = [
    {
        question: "Javascript code is run on the _________.",
        choices: ["Code Editor", "Browser", "Local Machine", "Repository"],
        answer: "Browser"
    },
    {
        question: "What are the two possible boolean values?",
        choices: ["True or False", "Positive or Negative", "String or Array", "Equal or Not Equal"],
        answer: "True or False"
    },
    {
        question: "When writing an array, what symbols should it be contained within?",
        choices: ["()", "{}", "<>", "[]"],
        answer: "[]"
    },
    {
        question: "What is the index position of 'train' in the following array? ['bike', 'car', 'bus', 'train', 'plane']",
        choices: ["1", "2", "3", "4"],
        answer: "3"
    },
    {
        question: "What does '===' mean in javascript when comparing two things?",
        choices: ["They have the same value", "They are the same type", "They are the same value and type", "They are the same value, type, and style"],
        answer: "They are the same value and type"
    },
];

// create other needed variables:

// start score at 0
var currentScore = 0; 

// starting index of question array
var questionNumber = 0;

// time left on timer
var timeLeft = document.querySelector("#time-left");

// button to start game and timer
var startGame = document.querySelector("#start-button");

// where each question will be displayed
var quizQuestion = document.querySelector("#quiz-question");

// area where questions, choices, and start button will be held
var card = document.querySelector("#card");

// amount of time at beginning of game
var startingTime = 61;

// Interval declared globally for use in functions
var timerInterval = 0;

// penalty for wrong answer
var incorrectPenalty = 10;

// create ul elements
var createList = document.createElement("ul");


// start timer on click and show timer on screen
startGame.addEventListener("click", function() {
    if (timerInterval === 0) {
        timerInterval = setInterval(function() {
            startingTime--;
            timeLeft.textContent = "Seconds Left: " + startingTime;

            if (startingTime <= 0) {
                clearInterval(timerInterval);
                allDone ();
                timeLeft.textContent = "Out of Time!"
            }
        }, 1000);
    }
    render(questionNumber);
});

// render question and choices to the card
function render(questionNumber) {
    questionNumber.innerHTML = "";
    createList.innerHTML = "";
    
    for (var i = 0; i < questions.length; i++) {
        var displayQuestion = questions[questionNumber].question;
        var displayChoices = questions[questionNumber].choices;
        quizQuestion.textContent = displayQuestion;
    }
    // use for each to display choices
    displayChoices.forEach(function (newEl) {
        var li = document.createElement("li");
        li.textContent = newEl;
        quizQuestion.appendChild(createList);
        createList.appendChild(li);
        li.addEventListener("click", (compareAnswer));
    })
}

function compareAnswer(e) {
    var selection = e.target;
    
    if (selection.matches("li")) {
        var createDiv = docuement.createElement("div");
        createDiv.setAttribute("id", "createDiv");
        if (selection.textContent == questions[questionNumber].answer) {
            score++;
            createDiv.textContent = questions[questionNumber].answer + " is correct!";
        } else {
            startingTime = startingTime - incorrectPenalty;
            createDiv.textContent = "That is incorrect, the answer is: " + questions[questionNumber].answer;
        }
    }
    questionNumber++;

    if (questionNumber >= questions.length) {
        allDone();
        createDiv.textContent = "Game Over! You correctly answered " + currentScore + "/" + questions.length + " questions";
    } else {
        render(questionNumber);
    }
    quizQuestion.appendChild(createDiv);
}


