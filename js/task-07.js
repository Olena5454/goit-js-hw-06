const input = document.getElementById("font-size-control");

input.addEventListener("input", onInputFontSize);
function onInputFontSize(event) {
  document.getElementById("text").style.fontSize = this.value + "px";
}
