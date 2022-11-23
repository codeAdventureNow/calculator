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

const zero = Math.floor(buttonZero.value);
const one = Math.floor(buttonOne.value);
const two = Math.floor(buttonTwo.value);
const three = Math.floor(buttonThree.value);
const four = Math.floor(buttonFour.value);
const five = Math.floor(buttonFive.value);
const six = Math.floor(buttonSix.value);
const seven = Math.floor(buttonSeven.value);
const eight = Math.floor(buttonEight.value);
const nine = Math.floor(buttonNine.value);

function printZero() {
  console.log(zero);
  return zero;
}

function printOne() {
  console.log(one);
  return one;
}

function printTwo() {
  console.log(two);
}

function add(a, b) {
  return a + b;
}

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
