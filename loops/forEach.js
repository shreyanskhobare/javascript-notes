/**
 * FOR EACH. Documentation is here:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 * 
 * A bit similar to Java but it also accepts additional parameters.
 * 
 */
console.log(`**************************** FOR EACH`);
const arrayIJ = ['Joe', 'Q', 'Murr', 'Sal'];

// Using Function
arrayIJ.forEach(function (item) {         // Simple function is called. 'item' will be the field containing value

    console.log(`Function called.. ${item}`);
    // Function called.. Joe (First iteration)... So on and so forth
})

// Using Arrow (and since it has just one function, not using {} brackets)
arrayIJ.forEach((item) => console.log(`Arrow operator.... ${item}`));
// Arrow operator.... Joe (First iteration)... So on and so forth

/** *********
 * NOW, this forEach() method can accept more that one parameters and not just item. Read documentation link on top.
 * 1. Item (which we have already used)
 * 2. index
 * 3. Complete Array on which the forEachMethod was called upon
 * 
 * You can name them anything. Sequence matters
 */
arrayIJ.forEach((item, index, arrayName) => console.log(`${item}, ${index}, ${arrayName}`));
// Joe, 0, Joe,Q,Murr,Sal
// Q, 1, Joe,Q,Murr,Sal
// Murr, 2, Joe,Q,Murr,Sal  .... So on and so forth



/**
 * ********** You can also pass a function in request
 */

function printNames(item) {
    console.log(`Function item: ${item}`);
}

// Function expression example
const express = (item) => console.log(`Expression item: ${item}`);

arrayIJ.forEach(printNames);                // Passing function
// Function item: Joe
// Function item: Q .... so on and so forth

arrayIJ.forEach(express);                   // Passing expression
// Expression item: Joe
// Expression item: Q .... so on and so forth



/**
 * ************** For each on an array of objects
 * In case of iterating over objects, the item would be complete individual object in the list.
 * If you print entire item, it will print complete object. If you want to print individual fields inside it,
 * you need to use the '.' operator
 */
const ijdetails = [{
    name: 'Joe',
    ranked: 1
}, {
    name: 'Q',
    ranked: 2
}, {
    name: 'Murr',
    ranked: 3
}, {
    name: 'Sal',
    ranked: 4
}]

ijdetails.forEach((item) => console.log(`${item.name} has rank: ${item.ranked}`));
// Joe has rank: 1
// Q has rank: 2 ....  so on and so forth
