//Number
const buttonZero = document.querySelector(".button-zero");
const buttonOne = document.querySelector(".button-one");
const buttonTwo = document.querySelector(".button-two");
const buttonThree = document.querySelector(".button-three");
const buttonFour = document.querySelector(".button-four");
const buttonFive = document.querySelector(".button-five");
const buttonSix = document.querySelector(".button-six");
const buttonSeven = document.querySelector(".button-seven");
const buttonEight = document.querySelector(".button-eight");
const buttonNine = document.querySelector(".button-nine");

//Other buttons
const buttonDecimal = document.querySelector(".button-decimal");
const buttonAllClear = document.querySelector(".all-clear");

//Operands
const buttonAdd = document.querySelector(".button-add");
const buttonSubtract = document.querySelector(".button-subtract");
const buttonDivide = document.querySelector(".button-divide");
const buttonMultiply = document.querySelector(".button-multiply");
const buttonEqual = document.querySelector(".button-equal");

// const zero = 0;
const one = parseFloat(buttonOne.value);
const two = parseFloat(buttonTwo.value);
// const three = parseFloat(buttonThree.value);
// const four = parseFloat(buttonFour.value);
// const five = parseFloat(buttonFive.value);
// const six = parseFloat(buttonSix.value);
// const seven = parseFloat(buttonSeven.value);
// const eight = parseFloat(buttonEight.value);
// const nine = parseFloat(buttonNine.value);

//How do I convert this from a string into an actual decimal?
const decimal = buttonDecimal.value;

console.log(typeof decimal);

function printZero() {
  console.log(0);
  return 0;
}

// function printOne() {
//   console.log(1);
//   return 1;
// }

// function printTwo() {
//   console.log(2);
//   return 2;
// }

function printOne() {
  return one;
}

function printTwo() {
  return two;
}

function add(a, b) {
  return a + b;
}

console.log(add(printOne, printTwo));

function printNumber(e) {}

buttonZero.addEventListener("click", printZero);
buttonOne.addEventListener("click", printOne);
buttonTwo.addEventListener("click", printTwo);
// buttonThree.addEventListener("click", printThree);
// buttonFour.addEventListener("click", printFour);
// buttonFive.addEventListener("click", printFive);
// buttonSix.addEventListener("click", printSix);
// buttonSeven.addEventListener("click", printSeven);
// buttonEight.addEventListener("click", printEight);
// buttonNine.addEventListener("click", printNine);
