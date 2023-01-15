const arrayOfCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${arrayOfCategories.length}`);
const textAndNumber = arrayOfCategories;

for (const element of textAndNumber) {
    console.log(`Category: ${element.querySelector("h2").textContent}`);
    console.log(`Elements: ${element.querySelectorAll("li").length}`);
}
