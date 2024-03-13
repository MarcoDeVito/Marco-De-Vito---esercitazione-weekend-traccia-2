let numbersPrompt= prompt("dammi dei numeri divisi da virgola");
// numbersPrompt= numbersPrompt.replace(/[^\d.,-]/g, '');
let numbers= numbersPrompt.split(',')
// numbers= numbers.filter(el => el!== "" ); 
numbers= numbers.filter(el => !isNaN(el) ); 
// let numbers = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4];
numbers= numbers.map(el => parseFloat(el));
console.log(numbers);
console.log(typeof numbers[0]);
numbers.sort((a, b) => a - b);

console.log(`ordine crescente ${numbers}`);

numbers.sort((a, b) => b - a);

console.log(`ordine decrescente ${numbers}`);