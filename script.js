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
