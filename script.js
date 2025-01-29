// tabs javascript begin
const tabs = document.querySelector(".tabs");
const btns = document.querySelectorAll(".button");
const tabContent = document.querySelectorAll(".content");
const handleTabs = (event) => {
  const id = event.target.dataset.id;

  btns.forEach((btn) => {
    if (id) btn.classList.remove("live");
  });
  event.target.classList.add("live");

  tabContent.forEach((tab) => {
    if (id) tab.classList.remove("live");
  });
  const activeTab = document.getElementById(id);
  activeTab.classList.add("live");
};

tabs.addEventListener("click", handleTabs);

// tabs javascript end

// BMI tab javascript begin
const bmiBtn = document.getElementById("bmi-btn");
const weightCondition = document.getElementById("weight-condition");

const calculateBmi = () => {
  const heightEl = document.getElementById("height").value / 100;
  const weightEl = document.getElementById("weight").value;
  const bmiResult = document.getElementById("bmi-result");

  bmiResult.value = (weightEl / (heightEl * heightEl)).toFixed(2);
  if (bmiResult.value < 18.5) {
    weightCondition.innerText = "Underweight";
  } else if (bmiResult.value >= 18.5 && bmiResult.value <= 24.9) {
    weightCondition.innerText = "Normal weight";
  } else if (bmiResult.value >= 25 && bmiResult.value <= 29.9) {
    weightCondition.innerText = "OverWeight";
  } else if (bmiResult.value >= 30) {
    weightCondition.innerText = "Obesity";
  }
};

bmiBtn.addEventListener("click", calculateBmi);
// BMI tab javascript end here

// Loan tab javascript start here

const calculateLoan = () => {
  const loanAmount = document.getElementById("loan-amount").value;
  const interestRate = document.getElementById("interest-rate").value;
  const monthsToPay = document.getElementById("months-to-pay").value;
  const payment = document.getElementById("payment");
  const interest = (loanAmount * (interestRate * 0.01)) / monthsToPay;

  const monthlyPayment = (loanAmount / monthsToPay + interest).toFixed(2);
  payment.innerHTML = `Monthly Payment : ${monthlyPayment}`;
};
// loan tab end here

// weight tab javascript begin
const weightInput = document.getElementById("weight-input");
const errorEl = document.getElementById("error");
const resultEl = document.getElementById("result");
let clearTime;
let clearResultTime;

const UpdataWeight = () => {
  if (weightInput.value <= 0 || isNaN(weightInput.value)) {
    errorEl.innerText = "please Enter right Number";
    clearTimeout(clearTime);
    clearTime = setTimeout(() => {
      errorEl.innerText = "";
      weightInput.value = "";
    }, 2000);
  } else {
    resultEl.innerText = (+weightInput.value * 2.2).toFixed(2);
    clearTimeout(clearResultTime);
    clearResultTime = setTimeout(() => {
      resultEl.innerText = "";
      weightInput.value = "";
    }, 3000);
  }
};

weightInput.addEventListener("input", UpdataWeight);
// weight tab javascript end here

//  temperature tab javascript

const celsiusEL = document.getElementById("cel");
const fehEL = document.getElementById("fah");
const kelEL = document.getElementById("kel");

const computeTemp = (event) => {
  const currentValue = +event.target.value;

  switch (event.target.name) {
    case "cel":
      kelEL.value = (currentValue + 273.32).toFixed(2);
      fehEL.value = (currentValue * 1.8 + 32).toFixed(2);
      break;
    case "fah":
      celsiusEL.value = ((currentValue - 32) / 1.8).toFixed(2);
      kelEL.value = ((currentValue - 32) / 1.8 + 32).toFixed;
      break;
    case "kel":
      celsiusEL.value = (currentValue - 273.32).toFixed(2);
      fehEL.value = ((currentValue - 273.32) * 1.8 + 32).toFixed(2);
      break;

    default:
      break;
  }
};

// Currency tab start here

const currFirstEl = document.getElementById("currency-first");
const currSecondEl = document.getElementById("currency-second");
const worstSecondEl = document.getElementById("worst-second");
const worstFirstEl = document.getElementById("worst-first");
const exchangeRate = document.getElementById("exchange-rate");

const UpdateRate = async () => {
  const apiKey = `https://v6.exchangerate-api.com/v6/566681c2f49c95f9e643d712/latest/${currFirstEl.value}`;

  const response = await fetch(apiKey);
  const data = await response.json();

  const rate = data.conversion_rates[currSecondEl.value];
  console.log(rate);
  exchangeRate.innerText = `1 ${currFirstEl.value} = ${
    rate + " " + currSecondEl.value
  }`;
  worstSecondEl.value = (worstFirstEl.value * rate).toFixed(2);
};

UpdateRate();
currFirstEl.addEventListener("change", UpdateRate);
currSecondEl.addEventListener("change", UpdateRate);
worstFirstEl.addEventListener("input", UpdateRate);
worstSecondEl.addEventListener("input", UpdateRate);
