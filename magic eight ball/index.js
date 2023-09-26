const question = document.getElementById("question");
const ask = document.getElementById("ask");
const ball = document.getElementById("ball");
const answer = document.getElementById("answer");

const answers = Array("Yes", "No", "Maybe", "That is for you to decide");
let index = 0;

ask.onclick = (e) => {
  e.preventDefault();
  if (question.value == "") {
    shake("You must ask me something");
    return;
  }
  index = Math.floor(Math.random(1) * answers.length);
  shake(answers[index]);
};

function shake($answer) {
  answer.classList.remove("answered");
  ball.classList.remove("shake");
  setTimeout(function () {
    ball.classList.add("shake");
    answer.innerText = $answer;
  }, 10);
  setTimeout(function () {
    answer.classList.add("answered");
  }, 1010);
}
