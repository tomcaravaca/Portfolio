const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");

const quizQuestions = [
  {
    question: "Quelle est la capitale de l'Espagne ?",
    answers: [
      { text: "Lisbone", correct: false },
      { text: "Barcelone", correct: false },
      { text: "Madrid", correct: true },
      { text: "Paris", correct: false },
    ],
  },
  {
    question: "Quelle planète est connue comme la planète rouge ?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Le Soleil", correct: false },
    ],
  },
  {
    question: "Quel est le plus grand océan sur Terre ?",
    answers: [
      { text: "Océan Atlantique", correct: false },
      { text: "Océan Indien", correct: false },
      { text: "Océan Arctique", correct: false },
      { text: "Océan Pacifique", correct: true },
    ],
  },
  {
    question: "Quel est le symbole chimique de l'Azote ?",
    answers: [
      { text: "Az", correct: false },
      { text: "A", correct: false },
      { text: "N", correct: true },
      { text: "Au", correct: false },
    ],
  },
  {
    question: "Quel est le plus grand mammifère terrestre ?",
    answers: [
      { text: "Éléphant d'Afrique", correct: true },
      { text: "Girafe", correct: false },
      { text: "Rhinocéros", correct: false },
      { text: "Baleine Bleue", correct: false },
    ],
  },
];

let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;

totalQuestionsSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;

startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  scoreSpan.textContent = 0;

  startScreen.classList.remove("active");
  quizScreen.classList.add("active");

  showQuestion();
}

function showQuestion() {
  answersDisabled = false;

  const currentQuestion = quizQuestions[currentQuestionIndex];

  currentQuestionSpan.textContent = currentQuestionIndex + 1;

  const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100;
  progressBar.style.width = progressPercent + "%";

  questionText.textContent = currentQuestion.question;

  answersContainer.innerHTML = "";

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("answer-btn");

    button.dataset.correct = answer.correct;

    button.addEventListener("click", selectAnswer);

    answersContainer.appendChild(button);
  });
}

function selectAnswer(event) {
  if (answersDisabled) return;
  answersDisabled = true;

  const selectedButton = event.target;
  const iscorrect = selectedButton.dataset.correct === "true";

  Array.from(answersContainer.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    } else if (button === selectedButton) {
      button.classList.add("incorrect");
    }
  });

  if (iscorrect) {
    score++;
    scoreSpan.textContent = score;
  }

  setTimeout(() => {
    currentQuestionIndex++;

    if (currentQuestionIndex < quizQuestions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }, 1000);
}

function showResult() {
  quizScreen.classList.remove("active");
  resultScreen.classList.add("active");

  finalScoreSpan.textContent = score;

  const percentage = (score / quizQuestions.length) * 100;

  if (percentage === 100) {
    resultMessage.textContent = "Bravo Champion !";
  } else if (percentage >= 80) {
    resultMessage.textContent = "Bon travail, mais tu peux faire mieux !";
  } else if (percentage >= 60) {
    resultMessage.textContent = "Mouais, tu peux faire mieux !";
  } else if (percentage >= 40) {
    resultMessage.textContent = "Roh, c'est pas terrible !";
  } else if (percentage >= 20) {
    resultMessage.textContent = "Il faut réviser un peu plus là !";
  } else {
    resultMessage.textContent = "Sérieux !? 😳";
  }
}

function restartQuiz() {
  resultScreen.classList.remove("active");

  startQuiz();
}
