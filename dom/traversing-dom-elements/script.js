/**
 * ********** We are going to discuss ELEMENT Node in this.
 * Any HTML tag on page is an element
 * 
 * While loading, it contains 3 entries named:
 * Joe, Quinn, Murr
 */
const parent = document.querySelector('.parent');  // Fetching object of class name = 'parent'

const children = parent.children;       // 'children' is a property so () not needed.
console.log(children);          // Will print a HTMLCollection containing 3 entries.
console.log(children[0].innerText);     // Joe
console.log(children[0].className);     // child   --> Class name
console.log(children[0].nodeName);      // DIV     --> Present in a div tag

// We can also alter values
children[2].innerText = 'Sal';          // Will replace 'Murr' with 'Sal'
children[2].style.color = 'blue';       // Color changed

/**
 * First and last element child : Fetches first element or last element from list.
 * ****************
 * Make sure you call: 'firstElementChild' and NOT 'firstChild' which is also present but not correct in this case
 * Make sure you call: 'lastElementChild' and NOT 'lastChild' which is also present but not correct in this case
 */

parent.firstElementChild.innerText = 'Joe Gatto';   // Joe will be replaced by Joe Gatto
// firstElementChild is used and not firstChild

parent.lastElementChild.innerText = 'Sal Vulcano';  // Sal will be replaced by Sal Vulcano
// lastElementChild is used and not lastChild



/**
 * ******* Get Parent element from child
 */
const child = document.querySelector('.child');     // Get first child.
// Get it's parent
console.log(child.parentElement);     // Entire Div class of parent will be printed including child divs as well

// Update parent block using child
child.parentElement.style.border = "1px dotted blue";  // Entire parent block will have a blue dotted border
child.parentElement.style.padding = '20px';         // 20 px padding applied to parent block


/**
 * ****** Get siblings
 */
// Fetch second entry from list (Quinn)
const secondEntry = document.querySelector('.child:nth-child(2)');      // Second entry from class: child --> Quinn
console.log(secondEntry.innerText);             // Quinn

// Fetching and updating next sibling
// ********* Use 'nextElementSibling' and NOT 'nextElement'
secondEntry.nextElementSibling.style.color = 'red';         // Color entry at index 2 (position 3) changed to red.

// Fetching previous sibling
// ********* Use 'previousElementSibling' and NOT 'previousSibling'
secondEntry.previousElementSibling.style.color = 'blue';    // Color entry at index 0 (position 1) changed to blue.