import { createBaseStructure } from "./modules/createBaseStructure.js";
import { fillKeyboard } from "./modules/fillKeyboard.js";
import { fillQuestionAndAnswerField } from "./modules/fillQuestionAndAnswerField.js";
import { keyboardEvents } from "./modules/keyboardEvents.js";
import { mouseEvents } from "./modules/mouseEvents.js";

const startGame = () => {
  document.body.innerHTML = "";

  const mistake = sessionStorage.getItem("mistake");
  if (mistake === null) {
    sessionStorage.setItem("mistake", 0);
    mistake = "0";
  }

  createBaseStructure(mistake);

  const keyboard_field = document.querySelector(".keyboard-field");
  const question_field = document.querySelector(".question-field >b");
  const answer_field = document.querySelector(".answer-field");
  const incorrect_guesses_field = document.querySelector(
    ".incorrect-guesses-field"
  );
  const image = document.querySelector(".img__wrapper > img");

  fillKeyboard(keyboard_field);
  fillQuestionAndAnswerField(question_field, answer_field);

  document.addEventListener("keyup", (event) =>
    keyboardEvents(
      event,
      keyboard_field,
      answer_field,
      incorrect_guesses_field,
      image
    )
  );

  keyboard_field.addEventListener("click", (event) =>
    mouseEvents(
      event,
      keyboard_field,
      answer_field,
      incorrect_guesses_field,
      image
    )
  );
};

startGame();
