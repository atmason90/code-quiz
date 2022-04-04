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
var createList = document.createElement("ol");


// start timer on click and show timer on screen
startGame.addEventListener("click", function() {
    if (timerInterval === 0) {
        timerInterval = setInterval(function() {
            startingTime--;
            timeLeft.textContent = "Seconds Left: " + startingTime;

            if (startingTime <= 0) {
                clearInterval(timerInterval);
                endGame();
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
        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
        if (selection.textContent == questions[questionNumber].answer) {
            currentScore++;
            createDiv.textContent = questions[questionNumber].answer + " is correct!";
        } else {
            startingTime = startingTime - incorrectPenalty;
            createDiv.textContent = "That is incorrect, the answer is: " + questions[questionNumber].answer;
        }
    }
    questionNumber++;

    if (questionNumber >= questions.length) {
        endGame();
        createDiv.textContent = "Game Over! You correctly answered " + currentScore + "/" + questions.length + " questions";
    } else {
        render(questionNumber);
    }
    quizQuestion.appendChild(createDiv);
}

function endGame() {
    quizQuestion.innerHTML = "";
    timeLeft.innerHTML = "";

    var createHeading = document.createElement("h1");
    createHeading.setAttribute("id", "create-heading");
    createHeading.textContent = "Quiz Complete!";

    quizQuestion.appendChild(createHeading);

    var createParagraph = document.createElement("p");
    createParagraph.setAttribute("id", "create-paragraph");

    quizQuestion.appendChild(createParagraph);

    if (startingTime >= 0) {
        var timeRemaining = startingTime;
        var createParagraph2 = document.createElement("p");
        clearInterval(timerInterval);
        createParagraph.textContent = "Final Score: " + timeRemaining;

        quizQuestion.appendChild(createParagraph2);
    }

    var createLabel = document.createElement("label");
    createLabel.setAttribute("id", "create-label");
    createLabel.textContent = "Enter your initials: ";

    quizQuestion.appendChild(createLabel);

    var createInput = document.createElement("input");
    createInput.setAttribute("id", "initials");
    createInput.setAttribute("type", "text");
    createInput.textContent = "";

    quizQuestion.appendChild(createInput);

    var createSubmitButton = document.createElement("button");
    createSubmitButton.setAttribute("id", "submit-button");
    createSubmitButton.setAttribute("type", "submit");
    createSubmitButton.textContent = "Submit";

    quizQuestion.appendChild(createSubmitButton);

    createSubmitButton.addEventListener("click", function() {
        var initials = createInput.value;
        if(initials === null) {
            console.log("No initials entered");
        } else {
            var endScore = {
                initials: initials,
                score: timeRemaining
            }
            console.log(endScore);
            var allScores = localStorage.getItem("allScores");
            if(allScores === null) {
                allScores = [];
            } else {
                allScores = JSON.parse(allScores);
            }
            allScores.push(endScore);
            var newAllScores = JSON.stringify(allScores);
            localStorage.setItem("allScores", newAllScores);

            window.location.replace("./highscores.html");
        }
    });

}


