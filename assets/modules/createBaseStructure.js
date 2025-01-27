export function createBaseStructure(mistake) {
  const container = document.createElement("div");
  const game__wrapper = document.createElement("div");
  const title__wrapper = document.createElement("div");
  const img__wrapper = document.createElement("div");
  const game_field__wrapper = document.createElement("div");
  const keyboard_field = document.createElement("div");
  const answer_field = document.createElement("ul");
  const game_title_small_screen = document.createElement("h2");
  const game_title_big_screen = document.createElement("h2");
  const question_field = document.createElement("h3");
  const incorrect_guesses_field = document.createElement("h3");
  const image = document.createElement("img");

  container.classList.add("container");
  game__wrapper.classList.add("game__wrapper");
  title__wrapper.classList.add("title__wrapper");
  img__wrapper.classList.add("img__wrapper");
  game_field__wrapper.classList.add("game-field__wrapper");
  keyboard_field.classList.add("keyboard-field");
  keyboard_field.classList.add("roboto-regular");

  game_title_small_screen.classList.add("game__title");
  game_title_small_screen.classList.add("roboto-black");
  game_title_small_screen.classList.add("small__screen");

  game_title_big_screen.classList.add("game__title");
  game_title_big_screen.classList.add("roboto-black");
  game_title_big_screen.classList.add("big__screen");
  answer_field.classList.add("answer-field");
  answer_field.classList.add("roboto-regular");
  question_field.classList.add("question-field");
  question_field.classList.add("roboto-regular");
  incorrect_guesses_field.classList.add("incorrect-guesses-field");
  incorrect_guesses_field.classList.add("roboto-regular");

  game_title_big_screen.innerText = "HANGMAN GAME";
  game_title_small_screen.innerText = "HANGMAN GAME";
  image.className = "hangman-img";
  image.setAttribute("src", "./assets/images/hangman-0.svg");
  image.setAttribute("alt", "hangman");

  question_field.innerHTML = ` Hint: <b></b>`;
  incorrect_guesses_field.innerHTML = ` Incorrect guesses: <b>${mistake} / 6</b>`;
  game_field__wrapper.append(answer_field);
  game_field__wrapper.append(question_field);
  game_field__wrapper.append(incorrect_guesses_field);
  game_field__wrapper.append(keyboard_field);

  img__wrapper.append(image);

  title__wrapper.append(game_title_small_screen);
  title__wrapper.append(img__wrapper);
  title__wrapper.append(game_title_big_screen);

  game__wrapper.append(title__wrapper);
  game__wrapper.append(game_field__wrapper);
  container.append(game__wrapper);
  document.body.prepend(container);
}
