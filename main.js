// main.js
const output = document.getElementById("output");
const startBtn = document.getElementById("start");

const dictate = new Dictate((text, isFinal) => {
  if (isFinal) {
    output.textContent = text; // show only final text
  } else {
    output.textContent = text; // replace interim text
  }
});

startBtn.addEventListener("click", () => {
  output.textContent = "Listening...";
  dictate.start();
});
