export function fillKeyboard(place) {
  for (let i = 97; i <= 122; i++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    button.classList.add(`Key${String.fromCharCode(i).toUpperCase()}`);

    place.append(button);
  }
}
