function buildQuiz() {
  const output = [];

  myQuestions.forEach(
    (currentQuestion, questionNumber) => {
      const answers = [];

      for (letter in currentQuestion.answers) {
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }
      output.push (
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
    }
  );
  quizContainer.innerHTML = output.join('');
}

function showResults() {}

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const myQuestions = [
  {
    question: "Who invented JS",
    answers: {
      a: "answer 1",
      b: "answer 2",
      c: "answer 3"
    },
    correctAnswer: "a"
  },
  {
    question: "What is the capital of Viet Nam",
    answers: {
      a: "answer 1",
      b: "answer 2",
      c: "answer 3"
    },
    correctAnswer: "b"
  },
  {
    question: "Why do you keep trying",
    answers: {
      a: "answer 1",
      b: "answer 2",
      c: "answer 3"
    },
    correctAnswer: "c"
  },
];

buildQuiz();

submitButton.addEventListener('click', showResults)

