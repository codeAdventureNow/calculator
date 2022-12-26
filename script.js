console.log('hello');

(function () {
  const buttons = document.querySelectorAll('.button');
  const numberButton = document.querySelectorAll('.number');
  const operatorButton = document.querySelectorAll('.operator');
  const display = document.querySelector('.calc-display');
  const decimalButton = document.querySelector('.decimal');
  const clear = document.querySelector('.all-clear');
  const equal = document.querySelector('.equal-sign');

  display.value = '0';

  let hasEqualsBeenClicked = false;

  function handleEqualsClick(event) {
    let value = event.target.dataset.num;

    //Has equals been clicked
    console.log(hasEqualsBeenClicked);
    if (display.value === '') {
      display.value = '';
    } else {
      let answer = eval(display.value);
      display.value = answer;
      // clearPriorCalulation();
      hasEqualsBeenClicked = true;
      console.log(hasEqualsBeenClicked);
    }
  }

  function handleNumberClick(event) {
    let value = event.target.dataset.num;

    let lastValue = display.value.charAt(value.length - 1);

    if (display.value === '0') {
      // what about if the value is a . ?

      display.value = '' + value;
    } else if (hasEqualsBeenClicked === true) {
      hasEqualsBeenClicked = false;
      display.value = '' + value;
    } else {
      // hasEqualsBeenClicked = true;
      display.value += value;
    }
  }

  function handleOperatorClick(event) {
    let value = event.target.dataset.num;
    // console.log(value);
    let lastValue = display.value.charAt(display.value.length - 1);
    console.log(lastValue);
    let stringReplaced = display.value.slice(0, -1);

    if (
      lastValue == '+' ||
      lastValue == '-' ||
      lastValue == '*' ||
      lastValue == '/'
    ) {
      display.value = stringReplaced + value;

      // return null;
    } else {
      hasEqualsBeenClicked = false;
      display.value += value;
    }
  }

  function handleDecimalClick(event) {
    let value = event.target.dataset.num;
    let lastValue = display.value.charAt(display.value.length - 1);
    let stringReplaced = display.value.slice(0, -1);

    if (lastValue == '.') {
      display.value = stringReplaced + value;
    } else if (hasEqualsBeenClicked === true) {
      hasEqualsBeenClicked = false;
      display.value = '' + value;
    } else {
      // hasEqualsBeenClicked = true;
      display.value += value;
    }
  }

  function handleClearClick(event) {
    display.value = '0';
  }

  numberButton.forEach((button) =>
    button.addEventListener('click', handleNumberClick)
  );

  decimalButton.addEventListener('click', handleDecimalClick);

  operatorButton.forEach((button) =>
    button.addEventListener('click', handleOperatorClick)
  );

  equal.addEventListener('click', handleEqualsClick);

  clear.addEventListener('click', handleClearClick);
})();

// function handleButtonClick(event) {
//   let value = event.target.dataset.num; // 2

//   let priorClick = display.value.charAt(value.length - 1); // +
//   // console.log(priorClick);
//   // display.value += value;

//   // for the first button when the calculator defaults to 0
//   if (display.value === '0') {
//     // what about if the value is a . ?
//     display.value = '' + value;
//   }
//   // for after clicking an operator button
//   else if (
//     priorClick == '+' ||
//     priorClick == '-' ||
//     priorClick == '*' ||
//     priorClick == '/' ||
//     priorClick == '.' // this shouldnt be here
//   ) {
//     // 100
//     // + // priorClick
//     // . // value

//     // 1)
//     // if statement
//     // what happens if the button they just clicked is another operator?
//     // 100+
//     // -
//     // 100-
//     // replace the last character with the new operator

//     // 2)
//     // else if statement
//     // what happens if the button they just clicked is a number?
//     // just want it to add to end
//     // 100+5

//     // 3)
//     // else
//     // what happens if the prior click is an operator e.g. + but the next click is a .
//     // display.value += 0 + value

//     return;
//   }
//   // for any number click after the first one the 2nd after an operator click
//   else {
//     display.value += value;
//   }
// }
