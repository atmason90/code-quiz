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
var interval = 0;

// penalty for wrong answer
var incorrectPenalty = 10;

// create ul elements
var createList = document.createElement("ul");


