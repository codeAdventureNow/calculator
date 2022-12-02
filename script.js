(function () {
  const buttons = document.querySelectorAll(".button");
  const display = document.querySelector(".calc-display");
  const clear = document.querySelector(".all-clear");
  const equal = document.querySelector(".equal-sign");

  // display.value = "0";

  function handleButtonClick(event) {
    let value = event.target.dataset.num;
    console.log(value);
    display.value += value;
  }

  buttons.forEach((button) =>
    button.addEventListener("click", handleButtonClick)
  );

  equal.addEventListener("click", function (e) {
    if (display.value === "") {
      display.value = "";
    } else {
      let answer = eval(display.value);
      display.value = answer;
    }
  });

  clear.addEventListener("click", function () {
    display.value = "";
  });
})();

// function updateDisplay(value) {
//   display.value = "0";
// }

// updateDisplay();

// display.value = "0";

// function handleButtonClick(event) {
//   if ((display.value = "0")) {
//     display.value = "";
//     let value = event.target.dataset.num;
//     console.log(value);
//     display.value += value;
//   }
// }
