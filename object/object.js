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