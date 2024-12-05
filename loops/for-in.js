/**
 * ********************* FOR - IN is also used for iterating over an Array or SINGLE Object
 * Difference being in case of 'for - in', the object used for iterating over is the 'key'.
 * In case of SINGLE object, the keys are the field names.
 * In case of ARRAY, the keys are index of array.
 */
const object = {
    name : 'Shrey',
    age: 30,
    address: 'Earth',
    comments: 'Lol'
}

// You can fetch value of field by using 'object[key]'
for (const field in object) {             // You can use any other word instead of field. 
    
    console.log(`Field: ${field} and value: ${object[field]}`); 
    // Field: name and value: Shrey (first iteration),
    // Field: age and value: 30 (second iteration).... So on and so forth

}

// FOR ARRAY
const array = ['Joey', 'Phoebe', 'Chandler', 'Rachel', 'Monica', 'Ross'];

// Same as in case of object, You can fetch value of field by using 'object[key]'
for (const index in array) {            // You can use any other word instead of index. 

    console.log(`Index: ${index} and value: ${array[index]}`);
    // Index: 0 and value: Joey (first iteration)
    // Index: 1 and value: Phoebe (second iteration).... So on and so forth

}
