const categories = document.querySelector("#categories");
const allCategories = categories.querySelectorAll(".item");
const allCategoriesNumer = allCategories.length;
console.log(`Number of categories: ${allCategoriesNumer}`);

const firstCategory = categories.firstElementChild;
const animalCategories = firstCategory.firstElementChild.textContent;
console.log(`Category: ${animalCategories}`);
const allAnimals = firstCategory.querySelectorAll("li");
const animalCount = allAnimals.length;
console.log(`Elements: ${animalCount}`);


const secondCategory = categories.childNodes[3];
const productsCategory = secondCategory.firstElementChild.textContent
console.log(`Category: ${productsCategory}`);
const allProducts = secondCategory.querySelectorAll("li");
const productsCount = allProducts.length;
console.log(`Elements: ${productsCount}`);



const lastCategory = categories.lastElementChild;
const tehnologyCategory = lastCategory.firstElementChild.textContent;
console.log(`Category: ${tehnologyCategory}`);
const allTechnologies = lastCategory.querySelectorAll("li");
const technologiesCount = allTechnologies.length;
console.log(`Elements: ${technologiesCount}`);
















