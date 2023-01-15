function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
const refs = {
  bodyColor: document.querySelector("body"),
  btnChangeColor: document.querySelector(".change-color"),
  spanColor: document.querySelector(".color"),
};

refs.btnChangeColor.addEventListener("click", onButtonChangeColorClick);
function onButtonChangeColorClick(event) {

  refs.bodyColor.style.backgroundColor = getRandomHexColor();
  refs.spanColor.textContent = getRandomHexColor();

};

