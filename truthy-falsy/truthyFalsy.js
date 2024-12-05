/** ***** A OBJECT WITH ANYTHING IN IT IS TREATED AS TRUE EXCEPT BELOW 6.
 * THESE ARE CALLED 'FALSY' VALUES
 * false            --> Boolean is falsy. But if you make it a string i.e. 'false', then it becomes a truthy
 * 0                --> Digit 0 is falsy. But if you make it a string i.e. '0', then it becomes a truthy
 * '' or "" (Empty string)          --> String containing blank space i.e. ' ' or " " is truthy
 * null
 * undefined
 * NaN
 * 
 * Anything that is NOT FALSY, is a TRUTHY.
 * Also, empty Arrays, empty Objects and Empty Functions are TRUTHY.
 */

// SAMPLES OF FALSY
const empty = '';               // Empty String is Falsy, BUT String containing SPACE i.e. ' ' or " " is truthy!
const zero = 0;                 // DIGIT 0 is Falsy, BUT String containing value 0 i.e. '0' is truthy!
const litFalse = false;         // Boolean false is falsy, BUT String containing value false i.e. 'false' is truthy!
const nullObj = null;
const notDefined = undefined;
const notANumber = NaN;

console.log(`${Boolean(empty)} , ${Boolean(zero)} , ${Boolean(litFalse)} , ${Boolean(nullObj)} ,
     ${Boolean(notDefined)} , ${Boolean(notANumber)}`);                 // false, false, false, false, false, false


// SAMPLES OF TRULY
const email = "contact@shreyanskhobare.com";
const number = 20;
console.log(Boolean(email));            // This will be True!
console.log(Boolean(number));            // This will be True!
console.log(Boolean('0'));            // This will be True as it is a String!
console.log(Boolean('false'));            // This will be True as it is a String!
console.log(Boolean([]));            // This will be True!
console.log(Boolean({}));            // This will be True!

if (email && number) {                            // Even though it is not Boolean, it is treated as True
    console.log(`${email} AND ${number} is treated as Boolean true!`);    // Will be printed!
}



/**
 * ***************************** TRUTHY AND FALSY CAVEATS!
 */

/**  EXAMPLE 1:
 * If you have a scenario where even digit 0 is to be treated as truthy in a criteria like in below example,
 * Customer may have 0 children which is a valid scenario. It shouldn't block customer from going forward
 */

const children = 0;                 // In real world, value would come from customer input
if (children) {                     // If we keep this as it is, then 0 would be treated as FALSY and customer would be-
    console.log(`You have ${children} kids!`);
} else {
    console.log(`Enter number of kids`);        // Enter number of kids --> Displayed this message!
}

// But what if a customer doesn't have kids. In such a case, we need to make 0 as a truthy as well. We can do that by:
// Comparing that children is NOT undefined 
// OR using NEGATION of 'isNaN()' method
if (children !== undefined || !isNaN(children)) {       
    console.log(`You have ${children} kids!`);         // You have 0 kids!   --> This will be displayed
} else {
    console.log(`Enter number of kids`);        
}


/** EXAMPLE 2 : EMPTY ARRAYS are by default TRUTHY
 * If we have a requirement to check for empty array and implement some logic based on that, 
 * we cannot directly use array object for comparison as even empty array is TRUTHY by default.
 * 
 * So we need to use '.length' method to check if array contains any objects
 */
const emptyArray = [];

if (emptyArray) {                               // Truthy
    console.log(`Array has values in it`);      // Will be printed which is incorrect!
} else {
    console.log(`Array has NO values in it`);      // Ideally should be printed
}

// INSTEAD WE SHOULD DO:
if (emptyArray.length) {                        // Or you can also use (emptyArray.length > 0)
    console.log(`Array has values in it`);      // Will be printed only if array has any value in it
} else {
    console.log(`Array has NO values in it`);      // Would be printed if array is empty
}


/** EXAMPLE 3 : EMPTY OBJECT is by default TRUTHY
 * If we have a requirement to check for empty Object and implement some logic based on that, 
 * we cannot directly use object for comparison as even empty object is TRUTHY by default.
 * 
 * Instead we need to use: 
 * Object.keys(yourObject).length
 * 
 * It will tell the number of fields defined in yourObject. 0 will be returned if there aren't any objects
 */
const emptyObject = {};
const filledObject = {
    name : 'Shreya',
    age: 30
}

// Below would be incorrect
if (emptyObject) {                               // Truthy by default!
    console.log(`Object has values in it`);      // Will be printed which is incorrect!
} else {
    console.log(`Object has NO values in it`);      // Ideally should be printed
}


// INSTEAD WE SHOULD DO:
console.log(Object.keys(emptyObject).length);           // Digit 0 will be printed
console.log(Object.keys(filledObject).length);           // Digit 2 will be printed as there are two fields in it.

if (Object.keys(emptyObject).length) {
    console.log(`Object has values in it`);      // Will be printed only if Object has fields in it!
} else {
    console.log(`Object has NO values in it`);      // Would be printed if Object is empty
}


/** EXAMPLE 4: LOOSE EQUALITY
 * '==' DOES NOT CHECK THE TYPE OF OBJECT. 
 * '===' DOES CHECK THE TYPE OF OBJECT AS WELL.
 * 
 * So there might be some occurence where if you compare two Falsy objects using ==, they might return true like below.
 */
console.log(`Loose Equality using ==`);
console.log(null == undefined);             // True
console.log(0 == '');                       // True
console.log(false == 0);                    // True

// So it is better we use ===
console.log(`Loose Equality using ===`);
console.log(null === undefined);             // False
console.log(0 === '');                       // False
console.log(false === 0);                    // False