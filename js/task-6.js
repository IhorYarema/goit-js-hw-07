function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("#controls input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxContainer = document.querySelector("#boxes");

function createBoxes(numberOfBoxes) {
  let boxesHTML = "";
  for (let i = 0; i < numberOfBoxes; i++) {
    const size = 30 + i * 10;
    const color = getRandomHexColor();
    boxesHTML += `<div style="width: ${size}px; height: ${size}px; background-color: ${color}; margin: 5px;"></div>`;
  }
  boxContainer.innerHTML = boxesHTML;
}

createBtn.addEventListener("click", () => {
  const numberOfBoxes = Number(input.value);
  if (numberOfBoxes < 1 || numberOfBoxes > 100) {
    return alert("Please enter a number between 1 and 100");
  }
  boxContainer.innerHTML = "";
  createBoxes(numberOfBoxes);
  input.value = "";
});

destroyBtn.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  boxContainer.innerHTML = "";
}
