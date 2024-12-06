/**
 * REDUCES AN ARRAY TO A SINGLE VALUE
 * 
 * Documentation:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 * 
 * It takes in two arguments:
 * previousValue --> This contains value returned by previous iteration a.k.a ACCUMULATOR
 * currentValue --> That's the current value from array
 * 
 */
console.log(`******************** REDUCE`);
// Simple example to sum all digits in array
const numberArr = [1,2,3,4,5,6,7,8,9,10];

// LONG FORM USING FUNCTION
let sum = numberArr.reduce(function(previous, current) {
        return previous + current;
}, 0);
// This 0 at the end is optional. In this we basically tell what should be the previous value during first iteration

console.log(sum);           // 55


sum = numberArr.reduce(function(accumulator, current) {
        return accumulator + current;
}, 20);                 // Initial value for iteration is 20

console.log(sum);           // 75 --> Because we have set initial value as 20 above


/** SHORTENING USING ARROW*/
sum = numberArr.reduce((acc, curr) => acc + curr, 50);        // Initial value for iteration is 50
console.log(sum);           // 105


/** EQUIVALENT FOR LOOP OF ABOVE- Just for knowledge */
sum = () => {
    let accumulator = 0;                // Or use 20, 50 whatever you want to start with
    for(const current of numberArr) {
        accumulator += current;
    }
     return accumulator;
}
console.log(sum());         // 55 as initial value / accumulator was 0


/**
 * EXAMPLE : SHOPPING CART
 */
const cart = [
    {product: 'Toy', price: 50},
    {product: 'Medicines', price: 120},
    {product: 'Books', price: 35},
    {product: 'Chocolates', price: 5}
]

// Use reduce to find sum of alf prices in shopping cart
const cartPriceTotal = cart.reduce((accumulated, current) => accumulated + current.price, 0); 
// *************************
// See how the 'accumulated' is used as it is because it will have sum of previous calculations.
// While 'current' will have complete object. So you need to use current.price to get actual price!

console.log(cartPriceTotal);            // 210