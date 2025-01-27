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
