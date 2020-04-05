window.onload = function () {
    console.log("starting");
};

var index = 0;
var countDown = 75;
var score = 75;
var highScore = 0;
var quizTime;

document.getElementById("start-button").addEventListener("click", event=> {
    console.log("hello");
    document.getElementById("start-quiz").classList.add("d-none");
    document.getElementById("quiz-questions").classList.remove("d-none");
    setTime();
    renderQuestions();
    quizTime = setInterval(setTime, 1000);
});

function renderQuestions() {
    var questionsIndexLength = questions.length - 1;
    if (index <= questionsIndexLength) {
        document.getElementById("question").innerHTML = questions[index].title;
        renderQuestionChoices();
    }
    quizOver();
}

function renderQuestionChoices() {
    var question = questions[index].choices;
    console.log(question);
    for (var option = 0; option < question.length; option++) {
        var questionOptionsDiv = document.getElementById("question-choices");
        var questionButtons = document.createElement("button");
        questionButtons.className =
            "btn btn-outline-primary btn-lg d-flex justify-content-around";
        questionButtons.innerHTML = question[option];

        questionButtons.setAttribute(
            "onclick",
            "checkAnswer(" + index + "," + option + ");"
        );
        questionOptionsDiv.append(questionButtons);
    }
    quizOver();
}

function clearQuestionDiv() {
    console.log("About to clear html");
    document.getElementById("question-choices").innerHTML = "";
    quizOver();
}

function checkAnswer(question, answer) {
    console.log("question: ", question);
    console.log("answer: ", answer);
    let correctAnswer = questions[question].answer;
    let userAnswer = questions[question].choices[answer];
    if (userAnswer == correctAnswer) {
        index = index + 1;
        console.log(score);
        console.log("Correct");
    }
    else {
        index = index + 1;
        countDown = countDown - 15;
        score = score - 15;
        console.log(score);
        console.log("Next question: ", index);
        console.log("Incorrect");
    }
    clearQuestionDiv();
    renderQuestions();
    quizOver();
}

function setTime() {
    document.getElementById("quiz-time").innerHTML = countDown + "sec left";
    countDown--;
    if (countDown == -1) {
        clearInterval(quizTime);
    }
    quizOver();
}

function quizOver() {
    if (index >= 4 || countDown <= 0) {
        document.getElementById("quiz-questions").classList.add("d-none");
        document.getElementById("all-done").classList.remove("d-none");
        document.getElementById("quiz-time").innerHTML = countDown + "sec left";
        document.getElementById("final-score").innerHTML = countDown;

        clearInterval(quizTime);
    }
}

//Event listener to trigger the function that allows the user to save their initials and high score

var initialsInput = document.querySelector("#initials-input");
var highscoreInput = document.querySelector("final-score");
var initialsButton = document.querySelector("#initials-btn");

function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
  }
  
  function renderLastRegistered() {
    var initials = localStorage.getItem("#initials");
    var finalscore = localStorage.getItem("final-score");
  
    if (initials && final-score === null) {
      return;
    }
  
  }

var initialsButton = document.querySelector("#initials-btn");

submitButton.addEventListener('click', function(event) {
    event.preventDefault();

    var initialsInput = document.querySelector('#initials-input').value;
    var highscoreInput = document.querySelector('final-score').value;

    if (initialsInput === '') {
        displayMessage('Initials cannot be blank');
    } else {
        displayMessage('Registered Successfully');

        localStorage.setItem('#initials-input', initialsInput);
        localStorage.setItem('final-score', highscoreInput);
        renderLastRegistered();
        return;
    }
})



