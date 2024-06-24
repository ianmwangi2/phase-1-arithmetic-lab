// multiply
const num1 = 31;
const num2 = 2;
const multiply = num1 * num2

//random
let random;
function generateRandom() {
  random = Math.floor(Math.random() * 100) + 1;
}
generateRandom();

//mod
let num3 = 15;
let num4 = 11;
let mod = num3 % num4;

//max
let numbers = [10, 15, 20, 5];
let max = Math.max(...numbers);