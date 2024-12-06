/**
 * ********* DIFFERENCE BETWEEN MAP AND ARRAY IS THAT MAP CAN RETURN ANYTHING AND NOT NECESSARILY AN ARRAY
 * 
 * Documentation link:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 * 
 */

// Simple example where it returns an array
let digits = [2,4,12,54,65];
const double = digits.map(num => num * 2);

console.log(double);        // [4, 8, 24, 108, 130]

const companiesArray = [
    {name: 'AB Group', category: 'Finance', start: 1901, end: 1970},
    {name: 'CD Group', category: 'Retail', start: 1945, end: 1989},
    {name: 'EF Group', category: 'Auto', start: 1989, end: 2008},
    {name: 'GH Group', category: 'Retail', start: 1910, end: 1957},
    {name: 'IJ Group', category: 'Finance', start: 2000, end: 2008},
    {name: 'KL Group', category: 'Auto', start: 1952, end: 1955},
    {name: 'MN Group', category: 'Retail', start: 1990, end: 2024},
    {name: 'OP Group', category: 'Auto', start: 1982, end: 1999},
]

// PROBLEM # 1: Create an Array of just company names
const companyNames = companiesArray.map(company => company.name);
console.log(companyNames);
//['AB Group', 'CD Group', 'EF Group', 'GH Group', 'IJ Group', 'KL Group', 'MN Group', 'OP Group']



// PROBLEM # 2: Create an Array of object containing company name and caregory
/** ****** I tried something like below for printing the array but it didn't work. It just logged undefined!
 * So below solution is INCORRECT. You need to use a proper return statement and create a proper object
 * 
 * const nameCategory = companiesArray.map(comp => {name : comp.name, category: comp.category});
 * 
 */

// This works -- using return keyword and creating a block.
const nameAndCategory = companiesArray.map((comp) => {
    return {
        name: comp.name, 
        category: comp.category};
});
console.log(nameAndCategory);
// {name: 'AB Group', category: 'Finance'}
// {name: 'CD Group', category: 'Retail'}   .... So on and So forth...



// PROBLEM # 3: Create an array of the length of each company is years
let companyYears = companiesArray.map(company => company.end - company.start);
console.log(companyYears);   // [69, 44, 19, 47, 8, 3, 34, 17]

// PROBLEM # 4: Create an array of object with name and length of each company is years
companyYears = companiesArray.map(company => {
    return {                                    //******* RETURN KEYWORD IS IMPORTANT HERE!
        name: company.name,
        years: company.end - company.start
    }
})
console.log(companyYears);
// {name: 'AB Group', years: 69}
// {name: 'CD Group', years: 44}       ... So on and So forth...




/***************** CHAIN MAPS
 * We can also chain maps where the response of first map will go as an input for next Map.
 * Example: Find the square root of digits in array and then double it's values.
 */
let squareAndMap = digits
                    .map(digit => Math.sqrt(digit))
                    .map(digit => digit * 2);
console.log(squareAndMap);
// [2.8284271247461903, 4, 6.928203230275509, 14.696938456699069, 16.1245154965971]

// Above is equivalent to:
squareAndMap = digits
            .map(function(digit) {
                return Math.sqrt(digit);
            })
            .map(function(digit){
                return digit * 2;
            });
console.log(squareAndMap);
// [2.8284271247461903, 4, 6.928203230275509, 14.696938456699069, 16.1245154965971]




/** CHAINING DIFFERENT METHODS - .map().filter() */
digits = [2,4,12,54,65,23,56,13,67,35];

// PROBLEM: Filter th even numbers from list and then double them
const evenDouble = digits.filter(digit => digit % 2 === 0).map(digit => digit * 2);
console.log(evenDouble);    // [4, 8, 24, 108, 112]