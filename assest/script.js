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

var startBtn = document.getElementById('start');
startBtn.addEventListener('click', startQuiz);


function startQuiz() {
  // hide start screen
  var startScreenEl = document.getElementById('home-page');
  startScreenEl.setAttribute('class', 'hide');

  // un-hide questions section
  questionsEl.removeAttribute('class');

  // start timer
  startTimer();

  // show starting time
  timerEl.textContent = time;

  getQuestion();
}

function startTimer() {
  time = questions.length * 60;

  timerId = setInterval(function() {
    if (time > 0) {
      time--;
      timerEl.textContent = 'Time: ' + time;
    }
  });
}

function getQuestion() {
  // get current question object from array
  var currentQuestion = questions[currentQuestionIndex];

  // update title with current question
  var titleEl = document.getElementById('question-title');
  titleEl.textContent = currentQuestion.title;

  // clear out any old question choices
  choicesEl.innerHTML = '';

  // loop over choices
  for (var i = 0; i < currentQuestion.choices.length; i++) {
    // create new button for each choice
    var choice = currentQuestion.choices[i];
    var choiceNode = document.createElement('button');
    choiceNode.setAttribute('class', 'choice');
    choiceNode.setAttribute('value', choice);

    choiceNode.textContent = i + 1 + '. ' + choice;

    // attach click event listener to each choice
    choiceNode.addEventListener('click', function(event) {
      var selectedChoice = event.target.value;
      handleChoice(selectedChoice);
    });

    // display on the page
    choicesEl.appendChild(choiceNode);
  }
}

function handleChoice(choice) {
  console.log('Chosen choice:', choice);

  // Move to the next question
  currentQuestionIndex++;

  // Check if there are more questions
  if (currentQuestionIndex < questions.length) {
      // If there are more questions, show the next question
      getQuestion();
  } else {
      // If no more questions, end the quiz or show the results
      endQuiz();
  }
}

function endQuiz() {
    // stop timer
    clearInterval(timerId);

    // show end screen
    var endScreenEl = document.getElementById('end-screen');
    endScreenEl.removeAttribute('class');
  
    // show final score
    var finalScoreEl = document.getElementById('final-score');
    finalScoreEl.textContent = time;
  
    // hide questions section
    questionsEl.setAttribute('class', 'hide');
  }
  
  function clockTick() {
    // update time
    time--;
    timerEl.textContent = time;
  
    // check if user ran out of time
    if (time <= 0) {
      quizEnd();
    }
}
