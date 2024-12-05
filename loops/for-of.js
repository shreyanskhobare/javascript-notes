/** ***************************
 * FOR - OF is used to Iterate over Arrays.
 */
const names = ['Joey', 'Phoebe', 'Chandler', 'Rachel', 'Monica', 'Ross'];

for (const name of names) {         // name will have individual values when the loop runs

    console.log(name);              // Joey, Phoebe (on next iteration), Chandler (on next iteration), so on....

}

// Aray of objects
const people = [{
    name : 'Joey',
    age: 30
}, {
    name : 'Phoebe',
    age: 29
}, {
    name: 'Chandler',
    age: 31
}]


for(const person of people) {      // person will have individual object values when the loop runs

    console.log(`${person.name}'s age is ${person.age}`);       // Joey's age is 30, Phoebe's age is 29 (next iteration) ...

}


// ******** WE CAN SPLIT CHARACTERS OF STRING USING FOR - OF
const string = 'Hello There!';

for(const chars of string) {

    console.log(chars);            // H,e,l,l,o, ,T,h,e,r,e,!      (Each printed in each iteration)

}



/**
 * ***************** LOOP OVER MAPS
 */
const map = new Map();
map.set('name', 'Shreya');
map.set('age', 30);

for ([key,value] of map) {                      // Using key value pair for iteration

    console.log(key,value);                     // name, Shreya (first iteration), age, 30 (second iteration)

}