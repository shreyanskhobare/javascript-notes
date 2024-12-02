/**
 * SIMPLE FUNCTION CREATION SYNTAX-
 * 
 * function functionName() {
 *      functionBody;
 * }
 * 
 */
function sayHello() {
    console.log("Hello World");
}

// Just defining a function doesn't make any difference. You need to call it!
sayHello();         // Hello World


/**
 * A function can accept request PARAMETERS.
 * We call them PARAMETERS while defining function
 * If you want to return something, you can use the 'return' keyword
 */
function add (number1, number2) {
    console.log(number1 * number2);  // 50
    return `Response is: ${number1 * number2}`; // Complete String will be returned
}

// Calling the function. Values being passed here are called ARGUMENTS.
const response = add(5,10);          
console.log(response);              // Response is: 50


/**
 * -------------- DEFAULT VALUE TO PARAMETERS
 * In case a function is expecting parameters but caller doesn't pass any parameters, 
 * then it will be treated as UNDEFINED.
 * We can define default values to all parameters in the function definition itself like below
 */
function register(firstName = 'dummy first', lastName = 'dummy last') {
    return `firstName: ${firstName} and lastName: ${lastName}`;
}

// NO ARGUMENTS ARE PASSED. So 'Default' value would be printed
console.log(register());     // firstName: dummy first and lastName: dummy last



/**
 * ------------- REST PARAMS
 * Similar to Rest / Spread operator (...), functions also accept a list and it treats
 * input parameter having ... as an array
 */
function sum(...numbers) {

    // 'numbers' will treat incoming parameters as an array of objects (number in our example)
    console.log(numbers);   // [1,2,3,4,5]

    let total = 0;      // Should be a 'let' and not 'const' as value is getting altered
    for (const num of numbers) {
        total += num;
    }
    return total;
}

console.log(sum(1,2,3,4,5));    // 15

/**
 * If we define function at line 52 as-
 *  function sum(first, second, ...numbers) {
 * 
 *  }    
 * 
 * then first will have value as 1, second will have value as 2 and
 * numbers will have value as [3,4,5] 
 */



/**
 * ----------- OBJECT AS A PARAMETER
 */
function userLogin(user) {
    return `Logged In username: ${user.name} with Id: ${user.id}`;
}

// WAY 1 : Create an object and pass the object
const user = {
    name: 'Shrey',
    id: 1
};
console.log(userLogin(user)); // Logged In username: Shrey with Id: 1

// WAY 2 : Simply create object while passing as a parameter
console.log(userLogin({
    name : 'Rups',
    id: 2
}));                          // Logged In username: Rups with Id: 2



/**
 * ARRAY AS A PARAMETER. 
 * Is similar to Rest (...) params. But the caller of function uses [] when calling this method
 */
function randomIndex(input) {  // Input would be array

    const index = Math.floor(Math.random() * input.length);
    console.log(input[index]);          // Any random value would be picked from input

}

// Here you see argument would be in []. If our function had ... then [] won't be needed.
randomIndex([45, 87, 23, 90, 42, 76, 84, 93, 100, 65]);




/**
 * *************************** FUNCTION DECLARATION vs FUNCTION EXPRESSION
 * Function declaration is simple function creation like we did before.
 * Function expression is where we define a Function and assign it to a variable! Variable name is used to call the function in this case
 * 
 * There is a reason behind this difference. This has something to do with 'Hoisting'
 */

// FUNCTION DECLARATION
function declaration(input) {
    return `${input} declared!`
}                                               // No ';' needed at end of function declaration

console.log(declaration('Declaration'));        // Declaration declared!  --> We called it by function name i.e. declaration.


// FUNCTION EXPRESSION
const express = function (input) {              // NO FUNCTION NAME IS GIVEN! Instead it is stored in a variable
    return `${input} expressed!`
};

console.log(express('Expression'));             // Expression Expressed!  --> We call it by variable name i.e. express

/** 
 * *************************************** HOISTING : 
 * It is the process of moving all the functions and variables at top of current scope (file in this case) 
 * BEFORE the code is run. So before code is run, all FUNCTIONS and variables are loaded on top of the page. 
 * EXPRESSIONS are NOT hoisted!
 *
 * FUNCTIONS CAN be defined after it is being called i.e. line 130 can be before line 126 as FUNCTIONS ARE LOADED AT TOP
 * EXPRESSIONS CANNOT be defined after it is called i.e. line 138 cannot be called before line 134
*/



/**
 * *************************************** ARROW FUNCTION
 * Similar to Lambda ? 
 * 
 * Consider below regular function-
 *      function add (a,b) {
 *          return a+b;
 *      }
 */

// Arrow function syntax --> 'function' Keyword IS NOT NEEDED in these cases
const arrow = (a,b) => {        // We use '=>' arrow to define body of function.
    return a+b;
}

console.log(arrow(20,30));      // 50

// If your function contains just one statement or single line of code, 
// you can ignore the {} brackets and return keyword and just use:
const arrowNoBracket = (a,b) => a+b;    // No {} or return keyword needed

console.log(arrowNoBracket(50, 20));    // 70


// If your method contains JUST ONE INPUT PARAMETER, then you can ignore () brackets while defining expression
const arrowSingleParam = a => a * 5;    // No () used around input parameter 'a'

const arrowSingleParamDefine = b => {   // No () used around input parameter 'b'
    console.log('Something');           // Something
    return b*10;
}

console.log(arrowSingleParam(12));      // 60
console.log(arrowSingleParamDefine(12));  // 120 --> After printing 'Something' inside function

const noReturn = c => console.log('Testing ' + c);      // This will print in console
noReturn(88);                           // Testing 88
// If we try to print / log value of const 'noReturn' it will log 'undefined' as function definition just has console log

/**
 * ******* If you want to return an OBJECT using expressions, then you need to use () brackets outside the {} brackets.
 * So it would be ({})
 */
const object = () => ({     // No input parameters. So () before =>. () outside {} since we want to return object
    name: 'Shrey',
    age: 30
});

console.log(object());      // {name: 'Shrey', age: 30}    --> Calling expression name along with (). So 'object()'


// You can use these arrow anywhere to replace function. For example:
const array = [2,3,4];

array.forEach(function (n) {        // Arrays have inbuild 'forEach' functions which iterate over all objects
    console.log(n);
});             // This will print 2,3,4 on new lines

// Above function can be replaced with-
array.forEach(n => console.log(n));     // This will also print 2,3,4 on new lines