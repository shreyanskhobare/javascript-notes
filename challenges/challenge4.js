/**
 * CHALLENGE # 1
 * Create a function called getCelsius() that takes a temperature in Fahrenheit as an argument and returns the temperature in celsius.
 * For bonus points, write it as a one line arrow function.
 * You can make the output look prettier by putting it into a string. You can even add \xB0 (degrees) and a C in front of the celsius temperature.
 * The formula for Fahrenheit to Celsius is (F - 32) * 5 / 9. Read more about the formula here if needed.
 */

console.log("---------------------- Challenge 4");

const getCelsius = (faren) => (faren - 32) / 1.8;

console.log(`The temperature is ${getCelsius(20)} \xB0C`); 
// The temperature is -6.666666666666666 °C




/**
 * CHALLENGE # 2
 * Create an arrow function called minMax() that takes in an array of numbers and returns an object with the minimum and maximum numbers in the array.
 * HINTS:
 * You can use Math.min() and Math.max() to get the min and max of a list of numbers.
 * You can use the Spread ... operator to spread the values of an array into separate arguments.
 */

// SOLUTION # 1 : Using Arrow operator and min / max separately
const inputArray = [29, 45, 87, 25, 100];

const minValue = (array) => Math.min(...array)          // IMPORTANT : '...' was to be used while calling Math.min 
const maxValue = (array) => Math.max(...array);         // and Math.max and not while passing argument in function!

console.log(`Minimum: ${minValue(inputArray)} and Maximum: ${maxValue(inputArray)}`);


// SOLUTION # 2 : Calling Function and returning both min and max together as an object
function minMax(array) {
    const min = Math.min(...array);
    const max = Math.max(...array);

    return {        // Object is created
        min,        // Since key is same so we are not doing min : min
        max         // Since key is same so we are not doing max : max
    }
}

console.log(minMax(inputArray));        // [min: 25, max: 100]  --> Object would be returned


/**
 * CHALLENGE 3:
 * Create an IIFE (Immediately Invoked Function Expression) that takes in the length and width of a rectangle outputs it to the console in a message as soon as the page loads.
 */

// Solution # 1 : Using Function Keyword
(function (length, width) {

    console.log(`Length: ${length}, Width: ${width} and Area: ${length*width}`);

})(3,5);            // Called immediately here by passing length and width


// Solution # 2 : Using Arrow
((length, width) => {       // Only difference is here. We haven't using Function keyword. Instead have used Arrow

    console.log(`Length: ${length}, Width: ${width} and Area: ${length*width}`);

})(3,5);