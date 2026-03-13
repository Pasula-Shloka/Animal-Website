

function showPage(page){
document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"))
document.getElementById(page).classList.add("active")
}

function toggleTheme(){
document.body.classList.toggle("dark")
}

function showPopup(name,text){
document.getElementById("popup").style.display="flex"
document.getElementById("animalTitle").innerText=name
document.getElementById("animalText").innerText=text
}

function closePopup(){
document.getElementById("popup").style.display="none"
}

function filterAnimal(type){
let cards=document.querySelectorAll(".card")
cards.forEach(card=>{
if(type==="all"||card.classList.contains(type)){
card.style.display="block"
}else{
card.style.display="none"
}
})
}

function searchAnimal(){
let input=document.getElementById("search").value.toLowerCase()
document.querySelectorAll(".card").forEach(card=>{
let text=card.innerText.toLowerCase()
card.style.display=text.includes(input)?"block":"none"
})
}
/* QUIZ DATA */

const quiz = [
  {
    question: "Which is the fastest land animal?",
    options: ["Lion","Cheetah","Horse","Tiger"],
    answer: 1
  },
  {
    question: "Which animal is the largest land animal?",
    options: ["Elephant","Giraffe","Rhino","Hippo"],
    answer: 0
  },
  {
    question: "Which animal is known as man's best friend?",
    options: ["Cat","Dog","Rabbit","Parrot"],
    answer: 1
  },
  {
    question: "Which animal has black and white stripes?",
    options: ["Horse","Zebra","Tiger","Leopard"],
    answer: 1
  },
  {
    question: "Which bird can mimic human speech?",
    options: ["Crow","Parrot","Eagle","Owl"],
    answer: 1
  }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const q = quiz[currentQuestion];
  document.getElementById("question").innerText = q.question;
  q.options.forEach((opt, i) => {
    const btn = document.getElementById("opt"+i);
    btn.innerText = opt;
    btn.disabled = false;
    btn.style.backgroundColor = "#2e8b57"; // reset button color
  });
  document.getElementById("result").innerText = "";
}

function checkAnswer(i) {
  const correct = quiz[currentQuestion].answer;
  if(i === correct) {
    score++;
    document.getElementById("result").innerText = "Correct! 🎉";
    document.getElementById("opt"+i).style.backgroundColor = "#4CAF50"; // green
  } else {
    document.getElementById("result").innerText = "Wrong answer ❌";
    document.getElementById("opt"+i).style.backgroundColor = "#f44336"; // red
    document.getElementById("opt"+correct).style.backgroundColor = "#4CAF50"; // correct answer
  }
  // disable all buttons after selecting
  document.querySelectorAll(".options button").forEach(b => b.disabled = true);
}

function nextQuestion() {
  currentQuestion++;
  if(currentQuestion < quiz.length) {
    loadQuestion();
  } else {
    document.getElementById("quiz-box").innerHTML = `
      <h2>Your Score: ${score} / ${quiz.length}</h2>
      <p>${score === quiz.length ? "🌟 Animal Expert!" : score >= 3 ? "👍 Great Job!" : "🐾 Keep Learning!"}</p>
      <button onclick="restartQuiz()">Restart Quiz</button>
    `;
  }
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  document.getElementById("quiz-box").innerHTML = `
    <h2 id="question"></h2>
    <div class="options">
      <button onclick="checkAnswer(0)" id="opt0"></button>
      <button onclick="checkAnswer(1)" id="opt1"></button>
      <button onclick="checkAnswer(2)" id="opt2"></button>
      <button onclick="checkAnswer(3)" id="opt3"></button>
    </div>
    <p id="result"></p>
    <button id="nextBtn" onclick="nextQuestion()">Next Question</button>
  `;
  loadQuestion();
}

window.onload = function () {

if(document.getElementById("question")){
loadQuestion();
}

}



