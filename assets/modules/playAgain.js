import { fillKeyboard } from "./fillKeyboard.js";
import { fillQuestionAndAnswerField } from "./fillQuestionAndAnswerField.js";

export function playAgain() {
  const modal_window = document.querySelector(".modal_window");
  const incorrect_guesses_field = document.querySelector(
    ".incorrect-guesses-field >b"
  );
  const keyboard_field = document.querySelector(".keyboard-field");
  const question_field = document.querySelector(".question-field >b");
  const answer_field = document.querySelector(".answer-field");
  const image = document.querySelector(".hangman-img");

  modal_window.remove();
  sessionStorage.setItem("mistake", 0);

  image.setAttribute("src", "./assets/images/hangman-0.svg");
  image.setAttribute("alt", "hangman");
  keyboard_field.innerHTML = "";
  question_field.innerHTML = "";
  answer_field.innerHTML = "";
  incorrect_guesses_field.innerHTML = "0 / 6 ";

  fillKeyboard(keyboard_field);
  fillQuestionAndAnswerField(question_field, answer_field);
}
