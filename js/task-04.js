const counterSpan = document.querySelector("#value");
const decreaseButton = document.querySelector(
  "button[data-action='decrement']"
);
const increaseButton = document.querySelector(
  "button[data-action='increment']"
);

function decreaseValue(targetField) {
  let counterValue = Number(targetField.textContent);
  counterValue -= 1;
  console.log(counterValue);
  targetField.textContent = counterValue;
}

function increaseValue(targetField) {
  let counterValue = Number(targetField.textContent);
  console.log(targetField);
  counterValue += 1;
  console.log(counterValue);
  targetField.textContent = counterValue;
}

decreaseButton.addEventListener("click", () => {
  decreaseValue(counterSpan);
});

increaseButton.addEventListener("click", () => {
  increaseValue(counterSpan);
});
