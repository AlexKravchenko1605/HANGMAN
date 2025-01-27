import { createModalWindow } from "./createModalWindow.js";

export function checkLetterInSecretWord(
  letter,
  answer_field,
  incorrect_guesses_field,
  image
) {
  const answerWord = localStorage.getItem("answer");

  for (let i = 0; i < answerWord.length; i++) {
    // correct letter
    if (letter.toLowerCase() === answerWord[i].toLowerCase()) {
      const letterInWord = answer_field.querySelector(`[data-num="${i + 1}"]`);
      letterInWord.innerHTML += letter;
      letterInWord.classList.add("correct__letter");

      answer_field.querySelectorAll(".correct__letter").length ===
      answerWord.length
        ? createModalWindow("win", answerWord)
        : "";
    }
    // incorrect letter
    if (!answerWord.toLocaleLowerCase().match(letter.toLowerCase())) {
      let mistake = JSON.parse(sessionStorage.getItem("mistake"));
      let incorrect_field = incorrect_guesses_field.querySelector("b");

      mistake = Number(mistake + 1);

      // change images
      image.setAttribute("src", `./assets/images/hangman-${mistake}.svg`);

      sessionStorage.setItem("mistake", mistake);

      if (mistake === 6) {
        incorrect_field.innerHTML = `${mistake} / 6`;

        createModalWindow("lost", answerWord);
      } else {
        incorrect_field.innerHTML = `${mistake} / 6`;
      }

      return;
    }
  }
}
