/**
 * 'window' is an object which has a global scope meaning it can be used anywhere.
 * So it's functions can be called directly. For example:
 *              window.alert('Hello'); 
 * can just be called as
 *              alert('Hello');
 * 
 * Similarly, there are some objects which belong to window and they can be called directly as well.
 * 'innerwidth' is amongst one of those fields
 */
console.log(window.innerWidth);
console.log(innerWidth);        // Both will print same value

const x = 100;    // Global variable as it can be used anywhere in class

function one() {
    console.log(x);         // Is accessible and will be printed
    const y = 50;           // Local variable as it is created at function level
    console.log(y);         // Is accessible and will be printed
}

one();

// console.log(y);             // Will give an 'y is not defined' error since 'y' is out of scope

function two() {

    const x = 50;           // This is called VARIABLE SHADOWING. We are not overriding but creating another object of same name
    // Global variable will be overriden in scope of this method. NOT SIMILAR TO JAVA!

    const y = 50;           // Local variable as it is created at function level
    console.log(x,y);       // 50,50

}

two();

console.log(x);             // 100 --> Value remains same out of scope as Variable Shadowing is scoped to that method


/**
 * ------------------------------- const vs let vs var
 * 'var' IS NOT BLOCK SCOPED for code blocks- if, for loop etc. 
 * 'const' and 'let' ARE BLOCK SCOPED
 * 
 * Also, variables created using 'var' gets added to window object! If you print / log the window object (like at line 11,12),
 * you will find objects created using 'var' in there! 
 * 
 * But 'var' is scoped in case it is defined inside function!
 */

// BLOCK SCOPE
if (true) {
    const c = 100;      // Scope defined to if block
    let l = 200;        // Scope defined to if block
    var v = 300;
}

// console.log(c);      // Throws an execption since it is out of if() block scope
// console.log(l);      // Throws an execption since it is out of if() block scope
console.log(v);         //  300 would be printed! Same will happen if used in for loop


// FUNCTION SCOPE
function c() {
    var functionVar = 90;
    console.log(functionVar);       // 90 - As in scope of function
}

// console.log(functionVar);       // Will throw an exception as 'var' defined in function has scope limited to function.



/**
 * NESTED SCOPE
 * Child FUNCTION or CODE block can access object created in parent block. 
 * Parent block cannot access const / let created in child. var can be access in case of code block only (and not function)
 */

function d() {
    const a = 100;

    function e() {
        const b = 99;
        var ec = 80;
        console.log(a,b, ec);   // 100, 99, 80 --> method 'e' is child of 'd' so variable 'a' is in scope of method 'e'
    }

    e();
    // console.log(b, ec);  --> // Will fail and give exception because both are not in scope of FUNCTION 'd'.
}

d();


// CODE BLOCK NESTED SCOPE
if (true) {
    const a = 1000;

    if (true) {
        const b = 999;
        var c = 666;

        console.log(a,b,c);     // 1000, 999, 666  --> Parent child scope
    }

    // console.log(b);          // Will fail and throw exception
    console.log(c);             // 666 as it is a 'var' in code block and not function. So it is still in scope
}

console.log(c);                 // 666 as it is a 'var' in code block and not function. So it is still in scope


/**
 * ************************* Shorthand IF condition
 * AVOID IF POSSIBLE
 */
const num1 = 10;
const num2 = 5;

// General Syntax for if is:
if (num1 > num2) {
    console.log(num1);      // Line 1 logged
    console.log(num2);      // Line 2 logged
}

// SHORT HAND IF is to get rid of {} brackets. For every new line use a comma (,)
if (num1 > num2)
    console.log(num1),      // Comma instead of ;
    console.log(num2)       // This will also be printed.
// But this cannot be used to define objects. So you cannot do: 'const something = x' over here
    
