import { playAgain } from "./playAgain.js";

export function createModalWindow(action, answerWord) {
  const modal_window = document.createElement("div");
  const modal__container = document.createElement("div");
  const modal_img = document.createElement("img");
  const modal_h4 = document.createElement("h4");
  const modal_p = document.createElement("p");
  const modal_btn = document.createElement("button");

  modal_window.classList.add("modal_window");
  modal__container.classList.add("modal__container");
  modal_btn.classList.add("play_again_btn");

  modal_img.setAttribute("src", `././assets/images/${action}.gif`);
  modal_img.setAttribute("alt", `${action}-gif`);
  modal_h4.innerText = `You ${action}`;
  modal_p.innerHTML = `The correct word was : <b>${answerWord}</b>`;
  modal_btn.innerText = "play again";

  modal__container.append(modal_img);
  modal__container.append(modal_h4);
  modal__container.append(modal_p);
  modal__container.append(modal_btn);
  modal_window.append(modal__container);

  modal_btn.addEventListener("click", playAgain);

  document.body.prepend(modal_window);
}
