const userInput = prompt(
    "Please enter flavors separated by commas.",
    "vanilla,vanilla,choc,coffee"
)
const stringArr = userInput.split(",")

const flavors = {};

stringArr.forEach(key => {
    flavors[key] = (flavors[key] || 0) +1;
})

console.table(flavors);