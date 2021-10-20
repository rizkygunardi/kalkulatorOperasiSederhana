let prevNumber = "";
let kalkulasiOperator = "";
let currentNumber = "0";

// Untuk merubah tampilan atas
const layar = document.querySelector(".kalkulatorScreen");
const updateScreen = (number) => {
  layar.value = number;
};

// Untuk memasukan inputan number
const inputNumber = (number) => {
  if (currentNumber === "0") {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
};

// Agar angka bisa di klik
const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    inputNumber(e.target.value);
    updateScreen(currentNumber);
  });
});

// Agar operasi dapat di klik
const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    inputOperator(e.target.value);
  });
});

const inputOperator = (operator) => {
  if (kalkulasiOperator === "") {
    prevNumber = currentNumber;
  }
  kalkulasiOperator = operator;
  currentNumber = "";
};

// Agar Sama Dengan bisa berfungsi
const samaDengans = document.querySelector(".samaDengan");
samaDengans.addEventListener("click", () => {
  kalkulator();
  updateScreen(currentNumber);
});

// Untuk pengoprasian perhitungan
const kalkulator = () => {
  let result = "";
  switch (kalkulasiOperator) {
    case "+":
      result = parseFloat(prevNumber) + parseFloat(currentNumber);
      break;
    case "-":
      result = parseFloat(prevNumber) - parseFloat(currentNumber);
      break;
    case "*":
      result = parseFloat(prevNumber) * parseFloat(currentNumber);
      break;
    case "/":
      result = parseFloat(prevNumber) / parseFloat(currentNumber);
      break;
    default:
      return;
  }
  currentNumber = result;
  kalkulasiOperator = "";
};

// Untuk Reset AC
const clearBtn = document.querySelector(".allClear");

clearBtn.addEventListener("click", () => {
  clearAll();
  updateScreen(currentNumber);
});

const clearAll = () => {
  prevNumber = "";
  kalkulasiOperator = "";
  currentNumber = "0";
};

// Untuk Angka Desimal
const decimal = document.querySelector(".desimal");
decimal.addEventListener("click", (e) => {
  inputDecimal(e.target.value);
  updateScreen(currentNumber);
});

inputDecimal = (dot) => {
  if (currentNumber.includes(".")) {
    return;
  }
  currentNumber += dot;
};
