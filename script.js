let previousNumber = "";
let nextNumber = "";
let operator = "";
let currentNumber = "";
let errorMessage = document.querySelector(".error-message");

const screen = document.querySelector(".screen");
const buttons = document.querySelector(".buttons");
const operands = buttons.querySelectorAll(".operand");
const decimalPoint = buttons.querySelector(".decimal-point");

const calculator = (function () {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mul = (a, b) => a * b;
  const mod = (a, b) => a % b;
  const div = (a, b) => {
    if (b) return a / b;
  }
  return { add, sub, mul, div, mod };
})();

function operate(previousNumber, nextNumber, operator) {
  switch (operator) {
    case "+":
      return calculator.add(previousNumber, nextNumber);
    case "-":
      return calculator.sub(previousNumber, nextNumber);
    case "×":
      return calculator.mul(previousNumber, nextNumber);
    case "÷":
      return calculator.div(previousNumber, nextNumber);
    case "%":
      return calculator.mod(previousNumber, nextNumber);
  }
}

function disableButtons() {
  if (currentNumber.length > 13) {
    operands.forEach((operand) => {
      operand.disabled = true;
    });
    decimalPoint.disabled = true;
  }
}

function enableButtons() {
  operands.forEach((operand) => {
    operand.disabled = false;
  });
  decimalPoint.disabled = false;
}

function resetScreen() {
  previousNumber = "";
  nextNumber = "";
  currentNumber = "";
  screen.textContent = "";
  screen.style.fontSize = '2.5rem';
}

function populateDisplay(e) {

  let buttonClass = e.target.classList;

  if (buttonClass.contains("operand") || buttonClass.contains("decimal-point")) {
    currentNumber += e.target.value;
    disableButtons();
    screen.textContent = currentNumber;
    if (currentNumber.includes('.')) {
      decimalPoint.disabled = true;
    }
  }
  if (buttonClass.contains("operator")) {
    previousNumber = Number(currentNumber);
    currentNumber = "";
    operator = e.target.value;
    enableButtons();
  }
  if (buttonClass.contains("equal")) {
    if(currentNumber) {
      nextNumber = Number(currentNumber);
      if (nextNumber) {
        if (operator === "÷" && nextNumber === 0) {
          errorMessage.textContent = `Oops! Can't divide by zero dummy!
          Looks like someone wasn't paying attention during Math class 😛`;
          resetScreen();
        } else {
          currentNumber = operate(previousNumber, nextNumber, operator);
          if (currentNumber === undefined) {
            errorMessage.textContent = 'Please pay attention to your logic.';
            resetScreen();
          } else if (String(currentNumber).length > 13) {
            screen.textContent = currentNumber;
            screen.style.fontSize = '1.9rem';
            errorMessage.textContent = '';
          } else {
            screen.textContent = currentNumber;
            errorMessage.textContent = '';
          }
        }
      }
    }
  }
  if (buttonClass.contains("clear")) {
    resetScreen();
    enableButtons();
  }
  if (buttonClass.contains("backspace")) {
    currentNumber = currentNumber.split("").slice(0, -1).join("");
    screen.textContent = currentNumber;
  }

}

buttons.addEventListener("click", populateDisplay);
