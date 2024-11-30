const firstName = 'Shrey';
const lastName = 'Kh';

// If object is defined outside object and if internal object name is same, then no need to set it again.
const person = {
    firstName,              // No need for firstName = firstName
    lastName                // No need for lastName = lastName
}

console.log(person.firstName);      // Shrey - Will pick automatically


/** DESTRUCTURING */
const activities = {
    activityName: 'Run',
    activityType: 'Excercise',
    duration: {
        hours: 2,
        minutes: 0
    }
}

// const activityName = activities.activityName;
// OR we can also do
const { activityName } = activities;    // This is equivalent to above line. Use {keyName}
console.log(activityName);          // Run

/**  If we use below, it will persist activityType value in activityType field and complete
 duration object including hours and minutes in duration. {} is IMPORTANT

 const {activityType, duration} = activities;  
 console.log(activityType, duration); ---> Excercise, {hours:2, minutes:0}
*/

/**  For nested objects. Syntax would be- 
 parentObjectName : {internalObjectName}
 See example of duration below
*/
const {activityType, duration : {hours}} = activities;
console.log(activityType, hours);       // Excercise 2 -- Direct keyname of 'hours' used

/**
 * const {activityType, duration : {hours}} = activities;
 * from Line 36 WHEN FORMATTED IT BECOMES-
 * 
 * const {
 *      activityType,
 *      duration : {
 *          hours
 *      }
 * } = activities;
 */

/** You can also rename the field in deconstruction. For example,
If you want to save 'activityType' value under object named 'type', then you can do
activityType : type
 */

const {
    activityType : type
} = activities;
console.log(type);      // Excercise - We are using 'type' here .
/**
 * From above... 
 * If you are using:
 * 'keyname : anotherKeyName' then it is renaming
 * 
 * If you are using {} then it is desctructuring i.e. calling child
 * 'keyname : { anotherKeyName }' --> anotherKeyName is child
 */

const {
    activityName : nameKey,
    duration : {
        hours : hourKey
    }
} = activities;

console.log(nameKey, hourKey); // Run, 2 --> new key names are used instead of original




/**
 * DE-STRUCTURING ARRAYS
 */
const array = [89, 32, 76, 37, 94];
/**
 * In this case, you use [] and define any keynames (first / firstDigit) or anything.
 * It will automatically assign value as per index
 */
const [first, second] = array; // First two values from 'array' set in 'first' and 'second'
console.log(first, second);    // 89, 32

/**
 * REST OPERATOR --> The syntax is same as Spread Operator i.e. triple dots (...)
 * What is will do in this case is save all remaining (rest) parameters in a separate array
 */
const [one, two, three, ...remaining] = array;
console.log(one, two, three, remaining);  // 89, 32, 76, [37,94]  --> Last two are saved as array


