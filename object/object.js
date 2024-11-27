// Creating an object
const person = {

    name: 'Shreyans',
    age: 34,
    isAdmin: true,
    address: {                          // Creating an internal object 
        street: 'Street #',
        apartment: 'Apartment Name',
        postCode: 'XXX XXX'
    },
    isAdmin: true,
    alias: ['Shrey', 'Shreee', 'Shreyu'] // Can contain array

};  // Remember to set ; at end of object creation.

console.log(person); // entire object
console.log(person.name); // Shreyans - Way 1 of fetching field value
console.log(person['name']); // Shreyans - Way 2 of fetching field value. Using [] and '' for keyname
console.log(person.address.street); // Street # - Nested fetching from inside object
console.log(person.alias[1]); // Shreee - Fetching value from array 

// Overriding value
person.name = 'Shreyans Khobare'
console.log(person.name); // Shreyans Khobare
person['isAdmin'] = false; // Second way of addressing field name. Using [] and '' for keyname
console.log(person.isAdmin); // false

// ADDING FIELD
person.isMarried = true; // 'isMarried' field is not there. So it will automatically add it!
console.log(person); // This will print person object and it will have 'isMarried' field in it.

// DELETING FIELD
delete person.age; // This will delete the age field!
console.log(person); // This will print person object and it will NOT have 'age' field in it.


// -------------------- FUNCTION INSIDE AN OBJECT!
person.greet = function() {                         // Use keyword 'function()' to create
    console.log(`Hello, my name is ${this.name}`);  // TO ACCESS FIELD FROM OBJECT, use this.fieldName
}
// Function is defined above. Now we need to call that function using object.functionName();
person.greet();


/**  NOT RECOMMENDED BUT JUST FYI
 *  Using field names in object with spaces!
 */
const wrongPerson = {
    'first name': 'WFirst',             // Object name with spaces should be in ''
    'last name': 'WLast'
}

// You cannot use: wrongPerson.first name to fetch value. 
// This is where you use [''] to fetch fields with spaces in names
console.log(wrongPerson['first name']); // WFirst


// NESTING and SPREAD Operator
const fruits = ['apple', 'mango', 'orange'];
const berries = ['strawberry', 'blackberry'];

const dot = [...fruits, ...berries]; // ['apple', 'mango', 'orange', 'strawberry', 'blackberry']
console.log(dot);

/**
 * In above example, if you replace square brackets [] with curly brackets {}, then rather than 
 * appending, it will replace the objects in first with objects in second
 */
fruitsCopy = {...fruits, ...berries}; // {} used here rather than []
console.log(fruitsCopy); // ["strawberry", "blackberry","orange"]

// --------- You can also use Object.assign to do the same as above if it is
// A SIMPLE ARRAY OF STRINGS
const assign = Object.assign({}, fruits, berries);
console.log(assign); // ["strawberry", "blackberry","orange"]

// But if it is an OBJECT AND NOT AN ARRAY, then
const object1 = {a:1, b:2};
const object2 = {c:3, d:4};
const result = Object.assign({}, object1, object2);

console.log(result);  // Object returned (not array) with value {a:1, b:2, c:3, d:4}


// You can also create an Object which is AN ARRAY OF OBJECTS
const actions = [                   // Square bracket [] meaning an array
    {id: 1, action: 'eat'},         // Object 1    
    {id: 2, action: 'pray'}         // Object 2
]

console.log(actions[1].name);       // It will print 'pray'


const laptop = new Object(); // This is equivalent to 'const laptop = {}'. 
// It will create a new EMPTY Object.
laptop.color = 'Blue';  // New field called color would be added.
laptop.quantity = 6;    // New field called quantity would be added.

/**  'KEYS' method of 'Object'
 *  It prints all the key names in an object 
*/
console.log(Object.keys(laptop)); // It will print an ARRAY containing 'color' and 'quantity'. 
console.log(Object.keys(laptop).length); // 2 as it has two keys

// If you provide array object and try to find it's keys, then it will just 
// return an ARRAY of index numbers
// No actual keys would be passed
console.log(Object.keys(actions));  // [0, 1] (As there are 2 objects in array)
// To get actual key names of object in array, you need to use Index
console.log(Object.keys(actions[0])); // Array [id, action] would be returned as index 0 is provided

/**
 * 'VALUES' method of 'Object'
 * It is similar to 'Keys' but instead of printing Key, it prints values
 */
console.log(Object.values(laptop)); // It will print an ARRAY containing 'blue' and '6'. 
console.log(Object.values(laptop).length); // 2 as it has two keys

// If you provide array object and try to find it's keys, then it will 
// print entire array containing both objects
// So complete key value array would be printed
console.log(Object.values(actions));  // [{Complete Object 1}, {Complete Object 2}]

// To get just value names of object in array, you need to use Index
console.log(Object.values(actions[0])); // Array [1, eat] would be returned as index 0 is provided

/**
 * --------- As you can see that Object.keys and Object.values behaves weirdly on ARRAYS of object,
 * it's better not to use them on ARRAYS of object.
 * You can use it on individual objects
 */

/**
 * 'ENTRIES' method of 'Object'
 * It prints both Key-value pair of an object. But it would return it as an ARRAY of ARRAY 
 * where each key-value pair would be an object in the array
 */
console.log(Object.entries(laptop));  
// Above will return:
// [['color','Blue'], [quantity,6]]


/**
 * 'HASOWNPROPERTY' method. This is called from actual object created and not 'Object' class
 * This method returns true or false based on whether that key is present in object
 */
console.log(laptop.hasOwnProperty('color')); // true
console.log(laptop.hasOwnProperty('length')); // false