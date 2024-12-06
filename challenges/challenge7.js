/**
 * CHALLENGE # 1:
 * Take the people array and create an array called young People that stores  
 * objects with ONLY name and email properties of all the people that are 25 and under. 
 * The name property should have their first and last name.
 */
const people = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@gmail.com',
    phone: '111-111-1111',
    age: 30,
  },
  {
    firstName: 'Jane',
    lastName: 'Poe',
    email: 'jane@gmail.com',
    phone: '222-222-2222',
    age: 25,
  },
  {
    firstName: 'Bob',
    lastName: 'Foe',
    email: 'bob@gmail.com',
    phone: '333-333-3333',
    age: 45,
  },
  {
    firstName: 'Sara',
    lastName: 'Soe',
    email: 'Sara@gmail.com',
    phone: '444-444-4444',
    age: 19,
  },
  {
    firstName: 'Jose',
    lastName: 'Koe',
    email: 'jose@gmail.com',
    phone: '555-555-5555',
    age: 23,
  },
];

let youngPeople = people
                    .filter(pup => pup.age <= 25)
                    .map(filtered => {
                        return {               // RETURN KEYWORD PART IS EXTREMELY IMPORTANT! I forgot it twice!
                            name: filtered.firstName + ' ' + filtered.lastName,
                            email: filtered.email
                        }
                    });

console.log(youngPeople);

// If you don't want to use the long option above including return statement. 
// Use below which uses ({})
youngPeople = people
            .filter((pup) => pup.age <= 25)
            .map((filtered) => ({     // Instead of {return {object creation}}, we have used ({object creatiion}).                
                name: filtered.firstName + ' ' + filtered.lastName,
                email: filtered.email,
            }));




/**
 * CHALLENGE # 2 :
 * Add all of the positive numbers in the array.
 */
const numbers = [2, -30, 50, 20, -12, -9, 7];
const sumOfPositives = numbers
                    .filter(number => number > 0)              // Filtering out the negative ones
                    .reduce((acc, curr) => acc + curr, 0);     // Sum the remaining digits from filtered

console.log(sumOfPositives);        // 79




/**
 * CHALLENGE # 3:
 * Instructions:
 * Create a new array called capitalizedWords with the words from the words array with the first letter of each word capitalized.
 */
let words = ['coder', 'programmer', 'developer'];

// My attempt
let capitalized = [];
for (const word of words) {
    capitalized.push(word.charAt(0).toUpperCase() + word.substring(1));
}
console.log(capitalized);

/**
 * My other attempt which was STUPID AND DIDN"T WORK
 * // const capitalized = words.forEach(word => word.charAt(0).toUpperCase() + word.substring(1));
 */

words = ['coder', 'programmer', 'developer'];

// ************* SIMPLER APPROACH USING MAP
let capitalized2 = words.map(word => word.charAt(0).toUpperCase() + word.substring(1));
console.log(capitalized2);

// You can also use below for capitalizing first character:
words = ['coder', 'programmer', 'developer'];
let capitalized3 = words.map(word => word[0].toUpperCase() + word.slice(1));
// Instead of using .chartAt(0) , we can directly use words[0]
// Instead of using subString, we can use .slice(1)
console.log(capitalized3);