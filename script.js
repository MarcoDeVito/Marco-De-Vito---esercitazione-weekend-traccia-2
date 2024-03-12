let numbersPrompt= prompt("dammi dei numeri divisi da virgola");
let numbers= numbersPrompt.split(',')
// let numbers = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4];
console.log(typeof numbers[0]);
numbers.sort((a, b) => a - b);

console.log(`ordine crescente ${numbers}`);

numbers.sort((a, b) => b - a);

console.log(`ordine decrescente ${numbers}`);