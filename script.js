let currentValue = "";
let previousValue = "";
let operator = "";

const currentScreen = document.querySelector(".current-number");

const previousScreen = document.querySelector(".previous-number");

const operators = document.querySelectorAll(".operator");

const numbers = document.querySelectorAll(".operand");

const equal = document.querySelector(".equal");
equal.addEventListener("click", () => {
  calculate();
  previousScreen.textContent = "";
  currentScreen.textContent = previousValue;
});

const decimal = document.querySelector(".decimal");
decimal.addEventListener("click", () => {
  addDecimalPoint();
});

const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
  currentValue = "";
  previousValue = "";
  operator = "";
  currentScreen.textContent = currentValue;
  previousScreen.textContent = previousValue;
});

numbers.forEach((number) =>
  number.addEventListener("click", (e) => {
    handleNumber(e.target.textContent);
    currentScreen.textContent = currentValue;
  })
);

function handleNumber(num) {
  if (currentValue.length <= 9) {
    currentValue += num;
  }
}

operators.forEach((op) =>
  op.addEventListener("click", (e) => {
    console.log(e.target.textContent);
    handleOperator(e.target.textContent);
    previousScreen.textContent = previousValue + " " + operator;
    currentScreen.textContent = currentValue;
  })
);

function handleOperator(op) {
  operator = op;
  previousValue = currentValue;
  currentValue = "";
}

function calculate() {
  previousValue = Number(previousValue);
  currentValue = Number(currentValue);

  if (operator == "+") {
    previousValue += currentValue;
  } else if (operator == "-") {
    previousValue -= currentValue;
  } else if (operator == "×") {
    previousValue *= currentValue;
  } else if (currentValue !== 0) {
    previousValue /= currentValue;
  }

  previousValue = roundNumber(previousValue);
  previousValue = previousValue.toString();
  currentValue = previousValue.toString();
}

function roundNumber(num) {
  return Math.round(num * 1000) / 1000;
}

function addDecimalPoint() {
  if (!currentValue.includes(".")) {
    currentValue += ".";
  }
}
