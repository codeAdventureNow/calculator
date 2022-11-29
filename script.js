const buttons = document.querySelectorAll("button");
const display = document.querySelector(".calc-display");

const calculator = {
  displayValue: "0",
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};

function handleButtonClick(event) {
  const button = event.currentTarget;
  const value = button.value;
  const number = Number(value);

  // console.log(typeof number);
  // value = calculator.displayValue;
  // console.log(number);
  // console.log(typeof number);
  // console.log(value);
  // console.log(typeof value);
  updateDisplay(value);
}

function updateDisplay(value) {
  display.value = value;
  // const { displayValue } = calculator;
  // calculator.displayValue = displayValue === "0" ? value : displayValue + value;
  // console.log(displayValue);
}

updateDisplay();

buttons.forEach((button) =>
  button.addEventListener("click", handleButtonClick)
);
