const questions = [
  {
    question: 'Cat este 1+1?',
    choices: ['test 1', 'test 2', 'test 3', 'test 4'],
    correctAnswer: 0,
  },
  {
    question: 'Cat este 2+2?',
    choices: ['test 1', 'test 2', 'test 3', 'test 4'],
    correctAnswer: 1,
  },
  {
    question: 'Cat este 3+3?',
    choices: ['test 1', 'test 2', 'test 3', 'test 4'],
    correctAnswer: 2,
  },
  {
    question: 'Cat este 4+4?',
    choices: ['test 1', 'test 2', 'test 3', 'test 4'],
    correctAnswer: 3,
  },
];

let currentQuestion = 0;
let correctAnswers = 0;
let isOver = false;

const displayQuestion = () => {
  document.getElementById('question-number').innerHTML = `<strong>Intrebarea ${
    currentQuestion + 1
  }:</strong>`;
  document.getElementById('question-text').innerText =
    questions[currentQuestion].question;
  document.querySelector('ul').innerHTML = '';
  questions[currentQuestion].choices.forEach((answer) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = ` <input type="radio" name="answer" />
    <span class="answer">${answer}</span>`;
    document.getElementById('choice-list').appendChild(listItem);
  });
};

const resetQuiz = () => {
  currentQuestion = 0;
  correctAnswers = 0;
  isOver = false;
  document.querySelector('ul').style.display = 'block';
  document.getElementById('question-text').style.display = 'inline';
  document.getElementById('next').innerText = 'Urmatoarea';
  document.getElementById('result').innerHTML = '';

  displayQuestion();
};

(function () {
  displayQuestion();
  document.getElementById('next').addEventListener('click', () => {
    if (!isOver) {
      let value;
      const listItems = document.querySelectorAll('li');
      listItems.forEach((element, index) => {
        if (element.firstElementChild.checked) value = index;
      });
      if (value !== null && value !== undefined) {
        if (value === questions[currentQuestion].correctAnswer)
          correctAnswers++;
        currentQuestion++;

        if (currentQuestion === questions.length - 1)
          document.getElementById('next').innerText = 'Verifică!';
        if (currentQuestion < questions.length) displayQuestion();
        else {
          isOver = true;
          document.querySelector('ul').style.display = 'none';
          document.getElementById('question-text').style.display = 'none';
          document.getElementById(
            'result'
          ).innerHTML = `<p>${correctAnswers} corecte din ${questions.length}</p>`;
          document.getElementById('question-number').innerText =
            'Rezultatul tău este:';
          document.getElementById('next').innerText = 'Mai încearcă!';
        }
        console.log(correctAnswers);
      } else {
        alert('Alege un răspuns.');
      }
    } else {
      resetQuiz();
    }
  });
})();
