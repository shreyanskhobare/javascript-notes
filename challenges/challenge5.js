/**
 * CHALLENGE # 1:
 * Create a function called calculator that takes three parameters: num1, num2 and operator. 
 * The operator can be +, -, * or /. The function should return the result of the calculation. 
 * If anything other than the four operators is passed in, the function should return an error message.
 */
const operation = (num1, num2, operator) => {
    switch (operator) {
        case '+' :
            return num1 + num2;
        case '-' :
            return num1 - num2;
        case '*' :
            return num1 * num2;
        case '/' :
            return num1 / num2;
        default:
            return 'Undefined Operator!';
    }
}

const num1 = 50;
const num2 = 25;
console.log(`Addition of ${num1} and ${num2} is ${operation(num1,num2,'+')}`);
console.log(`Subtraction of ${num1} and ${num2} is ${operation(num1,num2,'-')}`);
console.log(`Multiplication of ${num1} and ${num2} is ${operation(num1,num2,'*')}`);
console.log(`Division of ${num1} and ${num2} is ${operation(num1,num2,'/')}`);
console.log(`Unknown calculation of ${num1} and ${num2} is ${operation(num1,num2,'.')}`);