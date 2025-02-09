function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChangeColor = document.querySelector("button.change-color");
const spanColor = document.querySelector("span.color");

btnChangeColor.addEventListener("click", (event) => {
  const newColor = getRandomHexColor();
  const body = document.querySelector("body");
  body.style.backgroundColor = newColor;
  spanColor.textContent = newColor;
});
