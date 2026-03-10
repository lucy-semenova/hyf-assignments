const changeBgButton = document.querySelector("button");
if (changeBgButton) {
  function handleBackgroundChange() {
  document.body.style.backgroundColor = getRandomColor();
}

changeBgButton.addEventListener("click", handleBackgroundChange);
}
function getRandomColor() {
  const color =
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0");
  return color;
}
