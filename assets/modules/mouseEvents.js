import { checkLetterInSecretWord } from "./checkLetterInSecretWord.js";
import { createModalWindow } from "./createModalWindow.js";

export function mouseEvents(
  event,
  keyboard_field,
  answer_field,
  incorrect_guesses_field,
  image
) {
  event.preventDefault();

  let letter = event.target.className;
  if (event.target.localName !== "button") return;
  console.log(event);
  if (JSON.parse(sessionStorage.getItem("mistake")) !== 6) {
    if (
      keyboard_field
        .querySelector(`.${letter}`)
        .classList.contains("select__letter")
    ) {
      return;
    }

    keyboard_field.querySelector(`.${letter}`).classList.add("select__letter");

    checkLetterInSecretWord(
      letter.slice(-1),
      answer_field,
      incorrect_guesses_field,
      image
    );
  } else {
    createModalWindow("lost", JSON.parse(localStorage.getItem("answer")));

    return;
  }
}
