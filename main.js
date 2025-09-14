const startBtn = document.getElementById("start");
const dictate = new Dictate();

startBtn.addEventListener("click", () => {
  dictate.start();
});
