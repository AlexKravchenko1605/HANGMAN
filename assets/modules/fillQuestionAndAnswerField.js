import { quiz } from "./data.js";
const min = 1;
const max = 10;

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
export function fillQuestionAndAnswerField(
  question_container,
  answer_container
) {
  const rand = randomInteger(min, max);
  question_container.append(quiz[`question_${rand}`].question);
  const answerLength = quiz[`question_${rand}`].answer.length;
  console.log(quiz[`question_${rand}`].answer);

  // set answer to LS
  localStorage.setItem("answer", quiz[`question_${rand}`].answer);

  for (let i = 0; i < answerLength; i++) {
    const li = document.createElement("li");
    li.classList.add("letter");
    li.setAttribute("data-num", `${i + 1}`);
    answer_container.append(li);
  }
}
