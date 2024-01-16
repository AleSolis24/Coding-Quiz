var currentQuestionIndex = 0;
var questions = [
    {
        title: 'What tag do we use to link your CSS/JS script in HTML',
        choices: ['script', 'link', 'a href', 'style'],
        answer: 'script',
    },
    {
        title: 'In CSS how do we target a "id"',
        choices: ['.', 'id', '#', 'the targeted tag'],
        answer: '#'
    },
    {
        title: 'In JS how do we test if our function is working?',
        choices: ['alert', 'restart the entire website', 'asking your friend', 'console.log'],
        answer: 'console.log'
    },
    {
        title: 'String values must be enclosed within ____ when being assigned to variables.',
        choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
        answer: 'quotes',
    },
];

var questionsEl = document.getElementById('questions');
var timerEl = document.getElementById('time');
var choicesEl = document.getElementById('choices');
var submitBtn = document.getElementById('submit');
var startBtn = document.getElementById('start');
var initials = document.getElementById('initials');
var feedback = document.getElementById('feedback');
var timerId;
var startBtn = document.getElementById('start');
var time = 0;

var questionsEl = document.getElementById('questions');
var timerEl = document.getElementById('time');
var choicesEl = document.getElementById('choices');
var submitBtn = document.getElementById('submit');
var startBtn = document.getElementById('start');
var initials = document.getElementById('initials');
var feedback = document.getElementById('feedback');
var timerId;
var time = 0;

startBtn.addEventListener('click', startQuiz);
submitBtn.addEventListener('click', function () {
  submitScore();
});

function startQuiz() {
  time = questions.length * 10; 
  currentQuestionIndex = 0;

  var startScreenEl = document.getElementById('home-page');
  startScreenEl.setAttribute('class', 'hide');

  questionsEl.removeAttribute('class');

  startTimer();
  timerId = setInterval(clockTick, 1000);

  timerEl.textContent = time;

  getQuestion();
}

function startTimer() {
  timerId = setInterval(function () {
    time--;

    if (time <= 0) {
      clearInterval(timerId);
      endQuiz();
    }
  }, 1000);
}

function getQuestion() {
  var currentQuestion = questions[currentQuestionIndex];

  var titleEl = document.getElementById('question-title');
  titleEl.textContent = currentQuestion.title;

  choicesEl.innerHTML = '';

  for (var i = 0; i < currentQuestion.choices.length; i++) {
    var choice = currentQuestion.choices[i];
    var choiceNode = document.createElement('button');
    choiceNode.setAttribute('class', 'choice');
    choiceNode.setAttribute('value', choice);

    choiceNode.textContent = i + 1 + '. ' + choice;

    choiceNode.addEventListener('click', function (event) {
      var selectedChoice = event.target.value;
      handleChoice(selectedChoice);
    });

    choicesEl.appendChild(choiceNode);
  }
}

function handleChoice(choice) {
  console.log('Chosen choice:', choice);
  var currentQuestion = questions[currentQuestionIndex];

  if (choice === currentQuestion.answer) {
    feedback.textContent = 'Correct!';
  } else {
    feedback.textContent = 'Wrong!';
    time -= 10; // Penalty for wrong answer
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    getQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  clearInterval(timerId);

  var endScreenEl = document.getElementById('end-screen');
  endScreenEl.removeAttribute('class');

  var finalScoreEl = document.getElementById('final-score');
  finalScoreEl.textContent = time;

  questionsEl.setAttribute('class', 'hide');
}

function clockTick() {
  time--;
  timerEl.textContent = time;

  if (time <= 0) {
    endQuiz();
  }
}

function submitScore() {
  clearInterval(timerId);

  var userInitials = initials.value.trim();

  if (userInitials !== '') {
    // Store or handle the user's score and initials as needed
    
    window.localStorage.setItem('highscore', JSON.stringify(highscore));

    window.location.href = 'scoreBoard.html';
  }
}