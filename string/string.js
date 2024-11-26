const myname = 'Shreyans Khobare';
const age = 34;

let sum = `My name is ${myname} and I am ${age} years old!`;
console.log(sum.toUpperCase());

sum = new String(sum);
console.log(sum);

console.log(sum.indexOf('s'));
console.log(sum.indexOf('S'));

const myString = "developer";
const capital = myString.replace(myString.charAt(0), myString.charAt(0).toUpperCase());
console.log(capital);

const option2 = myString.substring(0,1).toUpperCase().concat(myString.substring(1));
console.log(option2);