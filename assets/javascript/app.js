//You'll create a trivia form with multiple choice or true/false options (your choice).

//The player will have a limited amount of time to finish the quiz. 


//The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.


//Don't let the player pick more than one answer per question.
//Don't forget to include a countdown timer.


var question = [{
    question: "Which of the following mascots is not from Seattle?",
    answers: {
        a: "mariners",
        b: "seahawks",
        c: "sounders",
        d: "cascades"
    },

    correctAnswer: "d"
},

{
    question: "Who of the following is not a Seattle band?",
    answers: {
        a: "Pearl Jam",
        b: "Dave Matthews Band",
        c: "Nirvana",
        d: "No Doubt"
    },

    correctAnswer: "d"

},

{
    question: "What is thrown at Pike's Place Market",
    answers: {
        a: "fish",
        b: "money",
        c: "coins",
        d: "crab"
    },

    correctAnswer: "a"
},

{
    question: "What animal is the bronze statue by the fish market?",
    answers: {
        a: "pig",
        b: "turkey",
        c: "salmon",
        d: "crab"
    },

    correctAnswer: "a"
},


{
    question: "What is the name of the airport?",
    answers: {
        a: "Seattle Airport",
        b: "Greater Seattle Airport",
        c: "SEATAC Airport",
        d: "Seattle's Airport"
    },

    correctAnswer: "c"
},


{
    question: "What is NOT a neighborhood in Seattle proper",
    answers: {
        a: "Capitol Hill",
        b: "Belltown",
        c: "Queen Anne",
        d: "Crab Town"
    },

    correctAnswer: "d"
},


];
//  This code will run as soon as the start button is clicked
var value;
//this sets up the game
function setUpGame() {
    $(".start-button").click(function () {
        value = setInterval(updateTimeInfo, 1000)
    })
}

function getInputHTML(answer, group, letterValue) {

    var inputA = $("<input>").attr("type", "radio").attr("name", group);
    inputA.val(letterValue);
    var label = $("<label>").text(answer);
    var inputDiv = $("<div>").append(label).append(inputA);
    return (inputDiv);
}


var selectedQuestion;

function getQuestionHtml(currentQuestion) {
    var questionTitle = $("<div>").addClass("question-style");
    questionTitle.text(currentQuestion.question);
    var input1 = getInputHTML(currentQuestion.answers.a, currentQuestion.question, "a");
    var input2 = getInputHTML(currentQuestion.answers.b, currentQuestion.question, "b");
    var input3 = getInputHTML(currentQuestion.answers.c, currentQuestion.question, "c");
    var input4 = getInputHTML(currentQuestion.answers.d, currentQuestion.question, "d");

    $("<div>").append([questionTitle, input1, input2, input3, input4]);
    var questionForm = $("<div>").append([questionTitle, input1, input2, input3, input4]);
    return (questionForm);
}


function setUpQuestions() {
    selectedQuestion = question[0];
    console.log(selectedQuestion.question);
    $(".questions").text(selectedQuestion.question);
    console.log(selectedQuestion.answers);
    $(".answers").text(selectedQuestion.answers);
    console.log(selectedQuestion.correctAnswer);
    $(".correct-answer").text(selectedQuestion.correctAnswer);
    for (var i = 0; i < question.length; i++) {
        var currentQuestion = question[i];
        console.log(currentQuestion);
        var questionForm = getQuestionHtml(currentQuestion);
        $("form").append(questionForm);

    }

    submitButton = $("<button>").addClass("submit-button");
    // submitButton.click(function () {
    //      console.log(selectedQuestion.answer);
    // })

    $(submitButton).text("Check Score")
    $("form").append(submitButton);


    var incorrect = 0
    var correct = 0

    $('form').on('submit', function (e) {
        e.preventDefault();
        var $inputs = $('form :input');

        var values = {

        };
        $inputs.each(function () {
            if ($(this).is(':checked')) {
                values[this.name] = $(this).val();
            }
        });

        for (var i = 0; i < question.length; i++) {
            var currentQuestion = question[i];
            var userAnswer = values[currentQuestion.question];


            if (userAnswer == currentQuestion.correctAnswer) {
                console.log("correct");
                $(".game-score").text("correct:" + ++correct + "incorrect:" + incorrect);

            }
            else {
                console.log("incorrect");
                $(".game-score").text("correct:" + correct + "incorrect:" + ++incorrect);


            }

        }


    })
}






//this submits the answer choice
function submitAnswer() {

}







//add in gif to game over
function gameover() {
    //  console.log("Game Over");
    //  $("").text()
}

//restart timer
function restartTimer() {
    clearInterval(value);
}
function reset() {
    restartTimer();
}

//this is how the user restarts the game to play again
function startGameOver() {
    console.log(again);
    $(".start-button").click(function () {
        restartTimer(); {
            clearInterval(value);
        }


    })
}


//this tracks the time
var time = 30

function updateTimeInfo() {
    console.log(time);
    $(".timer-countdown").text(--time);
    if (time == 0) {
        clearInterval(value);
        console.log("Game Over");
        alert("game over");
    }
}



$('.submit-button').on('click', function () {
    $('.pop-up').show(".game-score");
});

$('.pop-up').on('click', function (e) {
    e.stopPropagation();
    $(this).hide();
});


//game steps
setUpGame();
setUpQuestions();
submitAnswer();
