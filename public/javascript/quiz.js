const questions = [
  {
    question: 'Cum sunt clasificați sateliții?',
    choices: [
      'Militari și civili',
      'Telecomunicații',
      'Naturali și artificiali',
      'Nu au criterii de clasificare',
    ],
    correctAnswer: 2,
  },
  {
    question: 'Rolul sateliților de comunicație este de a:',
    choices: [
      'Oferi imagini din spațiu',
      'Transmite și amplifica semnale de telecomuncații radio',
      'Calcula distanțele dintre planete',
      'Furniza informații meteorologice',
    ],
    correctAnswer: 1,
  },
  {
    question: 'Este Pământul un satelit natural?',
    choices: [
      'Da, deoarece gravitează în jurul Soarelui',
      'Nu este un satelit',
      'Este o planetă',
      'Da, deoarece gravitează în jurul Lunii',
    ],
    correctAnswer: 0,
  },
  {
    question: 'Care a fost primul satelit lansat?',
    choices: [
      'Explorer 1, lansat de S.U.A.',
      'Sputnik 1, lansat de U.R.S.S.',
      'Score, lansat de S.U.A.',
      'Sputnik 2, lansat de U.R.S.S.',
    ],
    correctAnswer: 1,
  },
  {
    question:
      'Care a fost prima ființă vie care a ajuns în spațiu prin intermediul unui satelit?',
    choices: [
      'Un grup de cercetători',
      'Neil Amstrong',
      'Nu au fost folosiți sateliți pentru a trimite ființe vii în spațiu',
      'Cățelușa Laika',
    ],
    correctAnswer: 3,
  },
  {
    question: 'Care sunt cele mai comune componente ale unui satelit?',
    choices: [
      'Antene și surse de alimentare',
      'Motor și computer de bord',
      'Baterii și panouri',
      'Sursă de alimentare, antenă, computer de bord, sistem radio și sistem de control al altitudinii',
    ],
    correctAnswer: 3,
  },
  {
    question: 'Care este importanța sateliților?',
    choices: [
      'Explorează zone necercetate ale universului',
      'Sunt folosiți pentru telecomunicații',
      'Realizează studiul meteorologic',
      'Toate variantele de răspuns sunt corecte',
    ],
    correctAnswer: 3,
  },
  {
    question: 'Care este cea mai mare construcție aflată în spațiu?',
    choices: [
      'Sputnik 1',
      'Telescopul Hubble',
      'Stația Spațială Internațională',
      'Explorer 6',
    ],
    correctAnswer: 2,
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
        // console.log(correctAnswers);
      } else {
        alert('Alege un răspuns.');
      }
    } else {
      resetQuiz();
    }
  });
})();
