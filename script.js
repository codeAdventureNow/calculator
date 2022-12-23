(function () {
  const buttons = document.querySelectorAll('.button');
  const numberButton = document.querySelectorAll('.number');
  const operatorButton = document.querySelectorAll('.operator');
  const display = document.querySelector('.calc-display');
  const decimalButton = document.querySelector('.decimal');
  const clear = document.querySelector('.all-clear');
  const equal = document.querySelector('.equal-sign');

  display.value = '0';

  // function clearPriorCalulation() {
  //   console.log('What up?');
  // }

  function handleNumberClick(event) {
    let value = event.target.dataset.num;

    let lastValue = display.value.charAt(value.length);

    if (display.value === '0') {
      // what about if the value is a . ?
      display.value = '' + value;
    } else {
      display.value += value;
    }
  }

  function handleOperatorClick(event) {
    let value = event.target.dataset.num;
    let lastValue = display.value.charAt(value.length);
    // let operators = [['+']['-']];
    if (
      lastValue == '+' ||
      lastValue == '-' ||
      lastValue == '*' ||
      lastValue == '/'
    ) {
      console.log('Hey buddy');
    } else {
      display.value += value;
    }
  }

  function handleDecimalClick(event) {
    let value = event.target.dataset.num;
    let lastValue = display.value.charAt(value.length);

    if (lastValue == '.') {
      console.log('Hey buddy');
    } else {
      display.value += value;
    }
  }

  numberButton.forEach((button) =>
    button.addEventListener('click', handleNumberClick)
  );

  decimalButton.addEventListener('click', handleDecimalClick);

  operatorButton.forEach((button) =>
    button.addEventListener('click', handleOperatorClick)
  );

  equal.addEventListener('click', function (e) {
    if (display.value === '') {
      display.value = '';
    } else {
      let answer = eval(display.value);
      display.value = answer;
      // clearPriorCalulation();
    }
  });

  clear.addEventListener('click', function () {
    display.value = '0';
  });
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
