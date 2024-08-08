let inputBar = document.getElementById("inputBar");

function addToDisplay(character) {
  inputBar.value += character;
}

function submit() {
  inputBar.value = eval(inputBar.value);
}

function clearDisplay() {
  inputBar.value = "";
}
