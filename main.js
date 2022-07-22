function buildQuiz(){
  // variable to store the HTML output
  const output = [];

  // for each question...
  myQuestions.forEach(
    (currentQuestion, questionNumber) => {

      // variable to store the list of possible answers
      const answers = [];

      // and for each available answer...
      for(letter in currentQuestion.answers){

        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
    }
  );

  // finally combine our output list into one string of HTML and put it on the page
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

