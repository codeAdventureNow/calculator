const buttons = document.querySelectorAll("button");
const display = document.querySelector(".calc-display");
const clear = document.querySelector(".all-clear");
const equal = document.querySelector(".equal-sign");

function handleButtonClick(event) {
  let value = event.target.dataset.num;
  display.value += value;
}

buttons.forEach((button) =>
  button.addEventListener("click", handleButtonClick)
);

equal.addEventListener("click", function () {
  if (display.value === "") {
    display.value = "";
  } else {
    let answer = eval(display.value);
    display.value = answer;
    console.log(answer);
  }
});

clear.addEventListener("click", function () {
  display.value = "0";
});
