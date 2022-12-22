(function () {
  const buttons = document.querySelectorAll('.button');
  const display = document.querySelector('.calc-display');
  const clear = document.querySelector('.all-clear');
  const equal = document.querySelector('.equal-sign');

  display.value = '0';

  // let leftOperand = 0;
  // let rightOperand = 0;
  // let operator = null;

  // https://freshman.tech/calculator/
  // function inputDigit(digit) {
  //   const { displayValue } = calculator;
  //   // Overwrite `displayValue` if the current value is '0' otherwise append to it
  calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
  // }

  function handleButtonClick(event) {
    let value = event.target.dataset.num; // 2
    let priorClick = display.value.charAt(value.length - 1); // +
    console.log(priorClick);
    // display.value += value;

    // for the first button when the calculator defaults to 0
    if (display.value.charAt(0) === '0') {
      // what about if the value is a . ?
      display.value = '';
      display.value += value;
      // display.value = '' + value;
    }
    // for after clicking an operator button
    else if (
      priorClick == '+' ||
      priorClick == '-' ||
      priorClick == '*' ||
      priorClick == '/' ||
      priorClick == '.' // this shouldnt be here
    ) {
      // 100
      // + // priorClick
      // . // value

      // 1)
      // if statement
      // what happens if the button they just clicked is another operator?
      // 100+
      // -
      // 100-
      // replace the last character with the new operator

      // 2)
      // else if statement
      // what happens if the button they just clicked is a number?
      // just want it to add to end
      // 100+5

      // 3)
      // else
      // what happens if the prior click is an operator e.g. + but the next click is a .
      // display.value += 0 + value

      return;
    }
    // for any number click after the first one the 2nd after an operator click
    else {
      display.value += value;
    }
  }

  // function handleButtonClick(event) {
  //   let value = event.target.dataset.num;
  //   console.log(value);
  //   let priorClick = display.value.charAt(length - 1);
  //   // console.log(priorClick);
  //   display.value += value;
  //   // display.value += value;
  //   if (display.value.charAt(0) === '0') {
  //     display.value = '';
  //   } else if (priorClick == '+' || '-' || '*' || '/' || '.') {
  //     return;
  //   } else {
  //     return;
  //   }
  // }

  // Attempts at appending numbers if not a zero, I am trying to figure out how to translate the solution from the freshman into my code.

  //Attempt works after clicking numbers twice
  function handleButtonClick(event) {
    let value = event.target.dataset.num;
    if (display.value === '0') {
      display.value = null;
    } else {
      console.log(value);
      display.value += value;
    }
  }

  buttons.forEach((button) =>
    button.addEventListener('click', handleButtonClick)
  );

  equal.addEventListener('click', function (e) {
    if (display.value === '') {
      display.value = '';
    } else {
      let answer = eval(display.value);
      display.value = answer;
    }
  });

  clear.addEventListener('click', function () {
    display.value = '0';
  });
})();
