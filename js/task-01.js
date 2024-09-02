const allItems = document.querySelectorAll(".item");
const numberOfItems = allItems.length;

console.log("Number of categories: ", numberOfItems);

for (let item of allItems) {
  console.log("Category: ", item.firstElementChild.textContent);
  console.log(
    "Elements: ",
    item.firstElementChild.nextElementSibling.children.length
  );
}
