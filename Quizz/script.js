// Array amb les preguntes i respostes possibles
// Variables globales
// Variables globales
var currentQuestion = 0;
var timeLeft = 60; // El tiempo inicial en segundos
var score = 0; // Puntuación inicial

// ...

// Función para gestionar las respuestas


// ...


var questions = [
  {
    question: "Què mostrarà?: NaN, 15, 105",
    answers: ["NaN", "15", "105"],
    correctAnswer: 2,
    image: "1.png"
  },
  {
    question: "Aquest codi funciona?",
    answers: ["Sí i mostra 10", "Sí i mostra 25", "No"],
    correctAnswer: 0,
    image: "2.png"
  },
  {
    question: "Aquest codi funciona?",
    answers: ["No", "Sí i mostra: 7", "Sí i mostra: 52"],
    correctAnswer: 2,
    image: "3.png"
  },
  {
    question: "Quin valor mostrarà alert?",
    answers: ["1", "5", "0"],
    correctAnswer: 2,
    image: "4.png"
  },
  {
    question: "Aquest codi funciona?",
    answers: ["No", "Sí i mostra 0", "Sí i mostra 12"],
    correctAnswer: 0,
    image: "5.png"
  },
  {
    question: "Quin valor mostra?",
    answers: ["true", "2 €", "10 €"],
    correctAnswer: 1,
    image: "6.png"

  },
  {
    question: "Quin valor mostra alert?",
    answers: ["8", "6", "5"],
    correctAnswer: 0,
    image: "7.png"
  },
  {
    question: "Què mostrarà per pantalla?",
    answers: ["Volvo Saab Ford", "Saab Ford", "Ford"],
    correctAnswer: 1,
    image: "8.png"
  },
  {
    question: "Què mostrarà a la pantalla?: Juanito, Maria, Juanito Maria",
    answers: ["Juanito", "Maria", "Juanito Maria"],
    correctAnswer: 1,
    image: "9.png"
  },
  {
    question: "Què mostrarà l'alert?: L1, L2, demo2",
    answers: ["L1", "L2", "demo2"],
    correctAnswer: 1,
    image: "10.png"
  },
  // Les altres preguntes aquí...
];


// Variables globals
var currentQuestion = 0;
var timeLeft = 60; // El temps inicial en segons

// Funció per actualitzar el comptador de temps
function updateTimer() {
  var timerElement = document.getElementById("timer");
  timerElement.textContent = timeLeft;

  if (timeLeft === 0) {
    // El temps s'ha acabat, pots fer alguna acció aquí si vols
  } else {
    timeLeft--;
    setTimeout(updateTimer, 1000); // Actualitza el comptador cada segon
  }
}

// Funció per mostrar la pregunta actual
function showQuestion() {
  var question = questions[currentQuestion];
  var questionElement = document.getElementById("question");
  var imageElement = document.getElementById("questionImage");
  var answers = document.getElementsByClassName("answerButton");

  questionElement.textContent = question.question;
  imageElement.src = question.image;

  // Assigna les respostes als botons
  for (var i = 0; i < answers.length; i++) {
    answers[i].textContent = question.answers[i];
    answers[i].addEventListener("click", handleAnswer);
  }
}

// Funció per gestionar les respostes
function handleAnswer(event) {
  var selectedAnswer = event.target.textContent;
  var question = questions[currentQuestion];

  if (selectedAnswer === question.answers[question.correctAnswer]) {
    // La respuesta es correcta, sumar puntos
    score += 5;
  } else {
    // La respuesta es incorrecta, restar puntos
    score -= 5;
  }

  // Actualizar la puntuación en el HTML
  var scoreElement = document.getElementById("score");
  scoreElement.textContent = score;

  // Pregunta siguiente
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    // Se han hecho todas las preguntas, puedes hacer alguna acción aquí si quieres
    // Mostrar la puntuación final, etc.
  }
}

// Funció per iniciar el test
function startQuiz() {
  var instructionsContainer = document.getElementById("instructions");
  var quizContainer = document.getElementById("quizContainer");

  instructionsContainer.style.display = "none";
  quizContainer.style.display = "block";

  updateTimer();
  showQuestion();
}

// Afegim l'esdeveniment de clic al botó d'iniciar
var startButton = document.getElementById("startButton");
startButton.addEventListener("click", startQuiz);
