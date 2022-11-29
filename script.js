const buttons = document.querySelectorAll("button");
const display = document.querySelector(".calc-display");

//If I do it this way how will I handle operand click?

//How do I convert operand strings into acutal operands?

//How do I put the number in the screen dispplay

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
  console.log(value);
  console.log(typeof value);
  updateDisplay(value);
}

function updateDisplay(value) {
  const display = document.querySelector(".calc-display");
  display.value = value;
}

updateDisplay();

buttons.forEach((button) =>
  button.addEventListener("click", handleButtonClick)
);
