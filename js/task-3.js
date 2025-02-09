const inputName = document.querySelector("input#name-input");
const outputName = document.querySelector("span#name-output");

inputName.addEventListener("input", () => {
  const trimmedName = inputName.value.trim();
  outputName.textContent = trimmedName === "" ? "Anonymous" : trimmedName;
});
