const array = [20,15,26,19,43];

// Adds entry at end of array
array.push(50);
// Removes entry from end of array
array.pop();

// ADDS entry to start of array
array.unshift(89);

// REMOVES entry from start of array
array.shift();

// Reverse
array.reverse();

// Getting it back to normal
array.reverse();

let x;

// Tells if value is present / absent (Similar to contains in Java)
x = array.includes(26); // true
x = array.includes(99); // false

// Gives index
x = array.indexOf(19); // 3
x = array.indexOf(99); // -1

console.log(array);
console.log(x);

/* IMPORTANT - SLICE vs SPLICE. 
SLICE doesn't change original array. 
SPLICE manipulates it i.e. removes value from origial array
*/

/**
 * For SLICE, First parameter is START_INDEX. If second parameter isn't passed, 
 * then it will take till last value.
 * If second parameter is passed, then it will consider range to be 
 * START_INDEX 'TO' 'END_INDEX-1'
 */
const sliceArray = [20,18,67,54,82,39];
let sl = sliceArray.slice(3); // Will print everything starting from 54
sl = sliceArray.slice(2,5); // Will pring 67,54,82 (because it is last_index-1)
console.log(sl);

/**
 * For SLICE, First parameter is START_INDEX. If second parameter isn't passed, 
 * then it will go till last value. The new original array will contain values till START_INDEX-1
 * While the object in which it is spliced will contain array from START_INDEX to last.
 * 
 * If second parameter is passed (lets say 'n'), then it will consider range to be 
 *  START_INDEX 'TO' 'n' characters from START_INDEX including START_INDEX. 
 * It is not similar to SLICE here. So if first parameter is '2' and second parameter is '3'
 * Then range would be 3 characters total including 2 so it would include index- 2,3,4
 */
const spliceArray = ['Joey','Phoebe','Rachel','Chandler','Monica','Ross'];

// let spl = spliceArray.splice(3);  // No second parameter passed
// console.log(spl, spliceArray); 
// spliceArray Will remain as: ['Joey','Phoebe','Rachel'] 
// while spl will contain: ['Chandler','Monica','Ross']

let spl = spliceArray.splice(3,2);
console.log(spl, spliceArray); // 2 characters including 3.
// So spl will contain- ['Chandler','Monica']
// spliceArray will contain (after removal) - ['Joey','Phoebe','Rachel','Ross']


// Converts to string
let string = sliceArray.toString();
console.log(string);


const fruits = ['apple', 'mango', 'orange'];
let fruitsCopy = ['apple', 'mango', 'orange'];
let fruitsCopy2 = ['apple', 'mango', 'orange'];
const berries = ['strawberry', 'blackberry'];

/** Push will add the entire array of berries as an object at index 3 of fruits
 [    "apple",    "mango",    "orange",    ["strawberry", "blackberry"] ]
 NO NEED TO manually assign value of fruits again here. So 'fruits = XXXX' is not needed
 */
fruits.push(berries);
console.log(fruits);

/**  NESTING
 * Similar to Java, we can get object from Array inside an array by using indexes
 * fruits has values: [    "apple",    "mango",    "orange",    ["strawberry", "blackberry"] ]
 * If we want to fetch 'blackberry', then we can fetch it as: [3][1]
 * 3 because the array containing berries array is at index 3 of fruits and 1 is at index
 * 1 in berries array
 */
console.log(fruits[3][1]);

/**  Concat will append objects of berries to fruits
 [    "apple",    "mango",    "orange",    "strawberry", "blackberry" ]
 MANUALLY HAVE TO ASSIGN fruitsCopy into fruitsCopy again 'fruitsCopy = XXX' is needed.
*/
fruitsCopy = fruitsCopy.concat(berries);
console.log(fruitsCopy);


/** SPREAD Operator  (...)
 ... will basically spread (separate each object in) array rather than treating entire
array as a single object
 */
fruitsCopy = [...fruitsCopy2, ...berries]; // ["apple","mango","orange","strawberry", "blackberry" ]
fruitsCopy = [...fruitsCopy2, berries]; // // ["apple","mango","orange",["strawberry", "blackberry"] ]
fruitsCopy = [fruitsCopy2, ...berries]; // [["apple","mango","orange"],"strawberry", "blackberry" ]

console.log(fruitsCopy);
/**
 * In above example, if you replace square brackets [] with curly brackets {}, then rather than 
 * appending, it will replace the objects in first with objects in second
 */
fruitsCopy = {...fruitsCopy2, ...berries}; // {} used here rather than []
console.log(fruitsCopy); // ["strawberry", "blackberry","orange" ]


/**  FLATTEN
 * This is again similar to ... (Spread operator)
 * It will basically spread (separate each object in) array rather than treating entire
array as a single object
 */
let arr = [1, [6,4], 8 , [9,5], 0];
console.log(arr.flat()); // [1,6,4,8,9,5,0]


/**
 * STATIC METHODS IN ARRAY OBJECT
 */

// isArray - true / false based on whether it is an array
console.log(Array.isArray(arr)); // true
console.log(Array.isArray(string)); // false. 'string' was created earlier

// .from() - Splits each and every character in word and converts it into array
// --- ACCEPTS ONLY STRING ---
// Equivalent to .split('') method of java
console.log(Array.from('453367')); // [4,5,3,3,6,7]

// .of() - Takes multiple objects as a parameter and creates an array out of them.
const a = 'A';
const b = 'B';
const c = 56;
const d = ['Two', 5, true];

console.log(Array.of(a,b,c,d)); // ['A', 'B', 56, ['Two', 5, true]]


/**  CHALLENGE # 1
Convert [1,2,3,4,5] to [6,5,4,3,2,1,0]
*/
const input = [1,2,3,4,5];
input.push(6); // Adding value to end
input.unshift(0); // Adding value to start. NOTE: We use 'unshift' to ADD value and shift to remove
console.log(input.reverse()); // reversing it


/** CHALLENGE # 2
 * Combine: [1,2,3,4,5] and [5,6,7,8,9,10] into another array.
 * Both arrays have '5' as a common value. We have to get rid of extra 5.
 * This is simple requirement so no need for iteration as 5 to be removed is predefined
*/
// Solution #1 - Simple using slice
const input1 = [1,2,3,4,5];
const input2 = [5,6,7,8,9,10];
console.log(input1.concat(input2.slice(1)));

// Solution # 2 - Complex using splice
let merge = [...input1, ...input2]; //[1,2,3,4,5,5,6,7,8,9,10] - Has duplicate 5
merge.splice(4,1); // HAVE TO DO THIS BEFORE CONSOLE.LOG. If used directly in console.log, it will display '5' and not array!
console.log(merge); // Removing '5' present at index 4. Single digit to be removed so second parameter is 1