const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsUl = document.querySelector("#ingredients");

ingredients.forEach((ingredient) => {
  let elem = document.createElement("li");
  elem.textContent = ingredient;
  ingredientsUl.append(elem);
});
