// Simple object in JS
const activities = {
    id : 1,
    activityName : 'Run',
    timing : {
        date: 10,
        month: 11
    }
}

/**
 * JAVASCRIPT OBJECT TO JSON STRING
 * JSON.stringify(object) will convert the Javascript object to a 
 * Simple String in JSON format
 */

const stringified = JSON.stringify(activities);
// {"id":1,"activityName":"Run","timing":{"date":10,"month":11}} --> Converted to JSON
console.log(stringified); 

// Once it is converted to JSON string, we cannot use object.fieldName on the object
// in which .stringifiy() response is stored. In above case it is 'stringified' object.
console.log(stringified.id); // This will return 'undefined' as it is a String now and not an object!


/**
 * JSON STRING TO JAVASCRIPT OBJECT
 * Creating a simple JSON string below
 */
const jsonString = '[{"name":"Shrey", "lastName": "Kh", "number":7462}, {"roll": 20, "post" : "Old"}]';

// JSON.parse(jsonString) will convert the Simple JSON string to Javascript object
const parsedJson = JSON.parse(jsonString);
// [{name:'Shrey', lastName: 'Kh', number:7462}, {roll: 20, post : 'Old'}] --> Javascript object
console.log(parsedJson);
console.log(parsedJson[0].name, parsedJson[1].roll); // Shrey 20