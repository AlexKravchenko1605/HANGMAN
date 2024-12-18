import { checkLetterInSecretWord } from "./checkLetterInSecretWord.js";

export function keyboardEvents(
  event,
  keyboard_field,
  answer_field,
  incorrect_guesses_field,
  image
) {
  event.preventDefault();
  console.log("keyboard event");
  if (JSON.parse(sessionStorage.getItem("mistake")) !== 6) {
    if (
      keyboard_field
        .querySelector(`.${event.code}`)
        .classList.contains("select__letter")
    ) {
      return;
    }

    keyboard_field
      .querySelector(`.${event.code}`)
      .classList.add("select__letter");

    checkLetterInSecretWord(
      event.code.slice(-1),
      answer_field,
      incorrect_guesses_field,
      image
    );
  } else {
    console.log("game over");
    return;
  }
}
