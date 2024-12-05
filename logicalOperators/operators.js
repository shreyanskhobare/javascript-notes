// Basic && and || is same. But where it gets tricky is around FALSLY AND TRULY
// BASIC
if (10 > 5 && 18 < 9) {         // Second is false so code won't go in
    console.log(`Block 1 - Code won't be here!`);
}

if (10 > 5 || 18 < 9) {         // This is OR and first criteria is true, so code will go in
    console.log(`Block 2 - Code will go in here!`);
}

/**
 * ******************* IT GETS TRICKY WITH FALSY 
 * 
 * && will return FIRST FALSY OR THE LAST VALUE
 * || will return FIRST TRUTHY OR THE LAST VALUE
 * ?? will return RIGHT SIDE OF OPERAND IF LEFT SIDE IS null or undefined. For other cases, left side would be displayed.
 * 
 * First lets see &&
 */
console.log(10 && 20);                        // 20  --> There is no falsy so will return last digit
console.log(10 && 20 && 30 && 50);            // 50  --> There is no falsy so will return last digit
console.log(10 && 20 && 0 && 80);             // 0  --> 0 is a FALSY so 0 will be displayed
console.log(10 && 20 && NaN && 0 && 80);      // NaN  --> NaN is the first FALSY so NaN will be displayed


/**  This is generally used when you want to perform some checks.
 * For example if array is empty and if you try to print value using index like [0], then it will print undefined!
 * */
const emptyArray = [];
const filledArray = [4,76,21,90];

console.log(emptyArray[0]);                 // undefined --> Since array is empty. We shouldn't print anything in this case
console.log(filledArray[0]);                // 4

// INSTEAD WE CAN ADD A LENGTH Check.
emptyArray.length && console.log(emptyArray[0]);        // Nothing would be printed as first condition is falsy
filledArray.length && console.log(filledArray[0]);      // 4


/**
 * || will return FIRST TRUTHY OR THE LAST VALUE
 */
console.log(10 || 20);                              // 10 - First Truthy value
console.log(0 || 70 || 90);                         // 70 - First Truthy value. 0 is a Falsy
console.log(0 || '' || undefined || 50 || 80);      // 50 - First Truthy value. 0, '', undefined are falsy
console.log(0 || null || NaN);                      // NaN - No Truthy. Hence returns last value


/**
 * ?? will return RIGHT SIDE OF OPERAND IF LEFT SIDE IS null or undefined. For other cases, left side would be displayed.
 */
console.log(`Validating ??`);       
console.log(10 ?? 20);                              // 10 --> Left side isn't null or undefined
console.log('ABC' ?? 25);                           // 'ABC' --> Left side isn't null or undefined
console.log(0 ?? 50);                               // 0 --> Left side isn't null or undefined
console.log(null ?? 60);                            // 60 --> Left side IS NULL
console.log('' ?? 0);                               // Empty String --> Left side isn't null or undefined
console.log(undefined ?? true);                     // true --> Left side IS NULL





/**
 * *************** LOGICAL ASSIGNMENT OPERATORS
 * 
 * ||= Assigns the right side value only if left is a Falsy value
 * &&= Assigns the right side value only if left is a Truely value
 * ??= Assigns the right side value only if left is null or undefined
 * 
 * Starting with ||=
 */

let num1 = 0;
let num2 = 100;

// A regular code would be:
if (!num1) {                    // 0 It is actually falsy so using ! will make it true
  num1 = 50;
}

if (!num2) {                  // 100 It is truely so using ! will make it false. Code won't go in  
    num2 = 50;
}

console.log(`AFTER IF() Condition- num1: ${num1} and num2: ${num2}` );
// AFTER IF() Condition- num1: 50 and num2: 100  --> Value of num1 is updated by value of num2 isn't.

num1=0;
num2=100;
// We can replace above if condition as:
num1 = num1 || 50;              // || will return FIRST TRUTHY OR THE LAST VALUE. num1 is falsy so it returns last value i.e. 50
num2 = num2 || 50;              // || will return FIRST TRUTHY OR THE LAST VALUE. num2 is truthy so it returns 100
console.log(`Using just || Consition- num1: ${num1} and num2: ${num2}`);
// Using just || Condition- num1: 50 and num2: 100  --> Value of num1 is updated by value of num2 isn't.


num1=0;
num2=100;
/**
 * ************* We can further replace line 92 and 93 using Logical Assignment operators as:
 */
num1 ||= 50;
num2 ||= 50;
console.log(`Using Logical operator ||= Consition- num1: ${num1} and num2: ${num2}`);
// Using Logical operator ||= Consition- num1: 50 and num2: 100  --> Value of num1 is updated by value of num2 isn't.




/** *************** &&= Assigns the right side value only if left is a Truely value
 * This is kind of other way of ||=
 */
console.log(`Assignment operator &&=`);
let num3 = 70;
let num4 = 0;

// A regular code would be:
if (num3) {                    // 70 It is actually truely. So code will go in and replace value
  num3 = 50;
}

if (num4) {                  // 0 is falsy. So code won't go in  
  num4 = 50;
}

console.log(`AFTER IF() Condition- num3: ${num3} and num4: ${num4}` );
// AFTER IF() Condition- num3: 50 and num4: 0 --> Value of num3 is updated by value of num4 isn't.

num3=70;
num4=0;
// We can replace above if condition as:
num3 = num3 && 50;              // && will return FIRST FALSY OR THE LAST VALUE. num3 is truely so it replaces and returns last value- 50
num4 = num4 && 50;              // && will return FIRST FALSY OR THE LAST VALUE. num4 is falsey so it just returns 0 value as it is
console.log(`Using just && Consition- num3: ${num3} and num4: ${num4}`);
// Using just && Consition- num3: 50 and num4: 0  --> Value of num3 is updated but value of num4 isn't.


num3=70;
num4=0;
/**
 * ************* We can further replace line 133 and 134 using Logical Assignment operators as:
 */
num3 &&= 50;
num4 &&= 50;
console.log(`Using Logical operator &&= Consition- num3: ${num3} and num4: ${num4}`);
// Using Logical operator &&= Consition- num3: 50 and num4: 0  --> Value of num3 is updated but value of num4 isn't.




/** *********************** ??= Assigns the right side value only if left is null or undefined
 * 
 */
console.log(`Assignment operator ??=`);
let num5 = null;
let num6 = 0;           // Or can be any digit. Won't make any difference
// A regular code would be:
if (num5 === null || num5 === undefined) {         // num5 is null. So code will go in
  num5 = 50;
}

if (num6 === null || num6 === undefined) {         // num6 is neither null nor undefined. So code won't go in
  num6 = 50;
}

console.log(`AFTER IF() Condition- num5: ${num5} and num6: ${num6}` );
// AFTER IF() Condition- num5: 50 and num6: 0 --> Value of num5 is updated by value of num6 isn't.

num5=null;
num6=0;
// We can replace above if condition as:
num5 = num5 ?? 50;      // ?? will return RIGHT SIDE OF OPERAND IF LEFT SIDE IS null or undefined. num5 is null so it replaces and returns right value- 50
num6 = num6 ?? 50;      // ?? will return RIGHT SIDE OF OPERAND IF LEFT SIDE IS null or undefined. num6 is not null so it just returns 0 value as it is
console.log(`Using just ?? Consition- num5: ${num5} and num6: ${num6}`);
// Using just ?? Consition- num5: 50 and num6: 0  --> Value of num5 is updated but value of num6 isn't.


num5=null;
num6=0;
/**
 * ************* We can further replace line 173 and 174 using Logical Assignment operators as:
 */
num5 ??= 50;
num6 ??= 50;
console.log(`Using Logical operator ??= Consition- num5: ${num5} and num6: ${num6}`);
// Using Logical operator ??= Consition- num5: 50 and num6: 0  --> Value of num5 is updated but value of num6 isn't.




/** 
 * ********************* TERNARY OPERATOR --  (CRITERIA) ? TRUE : FALSE
 * Just like in java
 */

let age = 29;
const canVote = age >=18 ? true : false;        // true -- Boolean value will be set
const isEligible = age >=18 ? 'Yes' : 'No';        // Yes -- String value will be set

console.log(`canVote: ${canVote} and isEligible: ${isEligible}`);  // canVote: true and isEligible: Yes


/** ************ MULTISTATEMENT SCENARIO
 * Use () bracket for multiple statements and each statement is separated by comma ,
 */


/**
 * Generic implementation
 * 
 *      let message = '';
        if (age >= 18) {                    // Code will go here
            alert(`Yippie`);            
            message = `You can vote!`;
        } else {
            alert(`Oh no!`);
            message = `You cannot vote!`;
        }
*/

let message = '';
// You can use Ternary operator here by using () and each statement is separated by comma ,
message = age >= 18 
    ? (console.log('Yippie from ternary'), 'You can vote')       // Logged and value set
    : (console.log('Oh No from ternary!'), 'You cannot vote');

console.log(`Message: ${message} for age: ${age}`);     // Message: You can vote for age: 29

// Checking the else condition.    
age = 10;
message = age >= 18 
    ? (console.log('Yippie from ternary'), 'You can vote')       
    : (console.log('Oh No from ternary!'), 'You cannot vote');  // Logged and value set

console.log(`Message: ${message} for age: ${age}`);     // Message: You cannot vote for age: 10


/** *************
 * && Operator to replace logic if there is no else condition
 * You cannot skip else condition i.e. using ':' in case of ternary as it will show error
 * If there is no else condition required then you can just use && 
 * 
 * && will return FIRST FALSY OR THE LAST VALUE
 */

// Generic
age = 20;
if (age >= 18) {
    console.log('You can vote - Generic');
}

// Using &&
age >= 18 && console.log('You can vote - &&');          // Will be logged

// Resetting age to lower value
age = 10;
if (age >= 18) {        // Won't go in
    console.log('You can vote - Generic');
}

// Using &&
age >= 18 && console.log('You can vote - &&');          // Won't be logged