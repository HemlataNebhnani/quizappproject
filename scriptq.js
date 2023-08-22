
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const welcomeContainer = document.getElementById('welcome-container'); // Added
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  welcomeContainer.classList.add('hide'); // Hide welcome message
  startButton.classList.add('hide'); // Hide start button
  questionContainerElement.classList.remove('hide'); // Show question container
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add('hide');
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide');
  } else {
    startButton.innerText = 'Restart';
    startButton.classList.remove('hide');
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add('correct');
  } else {
    element.classList.add('wrong');
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}




const questions = [
  {
    question: 'What is 2 + 2?',
    answers: [
      { text: '4', correct: true },
      { text: '22', correct: false }
    ]
  },
  
  {
    question: 'Is web development fun?',
    answers: [
      { text: 'Kinda', correct: false },
      { text: 'YES!!!', correct: true },
      { text: 'Um no', correct: false },
      { text: 'IDK', correct: false }
    ]
  },
  {
    question: 'What is 4 * 2?',
    answers: [
      { text: '6', correct: false },
      { text: '8', correct: true }
    ]
  },
  {
    question: 'What is the capital of Japan?',
    answers: [
      { text: 'Tokyo', correct: true },
      { text: 'Beijing', correct: false },
      { text: 'Seoul', correct: false },
      { text: 'Bangkok', correct: false }
    ]
  },
  {
    question: 'Which gas do plants use to perform photosynthesis?',
    answers: [
      { text: 'Carbon Dioxide', correct: true },
      { text: 'Oxygen', correct: false },
      { text: 'Nitrogen', correct: false },
      { text: 'Hydrogen', correct: false }
    ]
  },
  {
    question: 'Who painted the Mona Lisa?',
    answers: [
      { text: 'Leonardo da Vinci', correct: true },
      { text: 'Pablo Picasso', correct: false },
      { text: 'Vincent van Gogh', correct: false },
      { text: 'Michelangelo', correct: false }
    ]
  },
  {
    question: 'Which planet is known as the "Morning Star"?',
    answers: [
      { text: 'Venus', correct: true },
      { text: 'Mars', correct: false },
      { text: 'Mercury', correct: false },
      { text: 'Jupiter', correct: false }
    ]
  },
  {
    question: 'What is the largest organ in the human body?',
    answers: [
      { text: 'Heart', correct: false },
      { text: 'Liver', correct: true },
      { text: 'Brain', correct: false },
      { text: 'Lung', correct: false }
    ]
  }
  ,

  {
    question: 'What is the capital of France?',
    answers: [

      { text: 'Paris', correct: true },
      { text: 'London', correct: false },
      { text: 'Delhi', correct: false },
      { text: 'New York', correct: false }
    ]
  },
  {
    question: 'Which planet is known as the "Red Planet"?',
    answers: [

      { text: 'Venus', correct: false },
      { text: 'Mars', correct: true },
      { text: 'Earth', correct: false },
      { text: 'Jupiter', correct: false }
    ]
  },

  {
    question: 'What is the largest mammal on Earth?',
    answers: [

      { text: 'Elephant', correct: false },
      { text: 'Blue Whale', correct: true },
      { text: 'Lion', correct: false },
      { text: 'Eagle', correct: false }
    ]
  },
  {
    question: 'Who wrote the play "Romeo and Juliet"?',
    answers: [

      { text: 'William Shakespeare', correct: true },
      { text: 'Jane Austen', correct: false },
      { text: 'JK Rowling', correct: false },
      { text: 'Thomas Hardy', correct: false }
    ]
  },
  {
    question: 'What is the chemical symbol for gold?',
    answers: [

      { text: 'Go', correct: false },
      { text: 'Au', correct: true },
      { text: 'C', correct: false },
      { text: 'Ca', correct: false }

    ]
  }
]