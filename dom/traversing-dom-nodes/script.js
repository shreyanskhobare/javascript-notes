/** *******************
 * In this, we are going to cover DOM NODES. Previous tutorial covered Elements.
 * There are many types of nodes like:
 * elements (which are tags), comments, text, entity, etc.
 * 
 * So methods used for traversing Nodes are a little different than those used for elements.
 */
const parent = document.querySelector('.parent');
console.log(parent.className);      // parent

// Fetching children
const childNodes = parent.childNodes;   // ** childNodes and NOT .childrenNodes
console.log(childNodes);
//  [text, comment, text, div.child, text, div.child, text, div.child, text]    --> Printed
/** Prints a NODE LIST array and not HTML list
 *  Even empty spaces AND New Lines are treated as 'text' in this case. 
 * HTML File has following. Compare it with what is printed
 * <div class="parent">
            <!-- Children -->
            <div class="child">Joe</div>
            <div class="child">Quinn</div>
            <div class="child">Murr</div>
    </div>
 * That is why you'll see 'text' everywhere there is a new line or space. 'div.child' is a div block
*/

// Printing childNodes
console.log(childNodes[0].textContent);         // \n --> This is the newline entry so in Console you'll see black space and new line
console.log(childNodes[0].nodeName);            // #text
console.log(childNodes[3].textContent);         // Joe
console.log(childNodes[3].outerHTML);           // <div class="child">Joe</div>

// Updating value
childNodes[3].textContent = 'No one';         // Joe replaced with 'No One' and visible on screen
childNodes[5].style.color = 'blue';           // Color of Quinn changed to blue

// First Child and Last Child. In our case both are new lines defined as 'text' so empty (but new line would be printed if be log it)
console.log(parent.firstChild.textContent);                 // Empty / new line
console.log(parent.lastChild.textContent);                  // Empty / new line
// Replace last child which is new line with something
parent.lastChild.textContent = "Surprise!";      // Will be printed on new line / last line after Murr



// Getting parent node from child
const child = document.querySelector('.child');         // Will get first entry of class child
console.log(child);             // <div class="child" bis_skin_checked="1">No one</div>

console.log(child.parentNode);  // Entire DIV of parent node will be printed.
// ***** Same will be printed if we use: child.parentElement

child.parentNode.style.border = '10px dotted purple';
child.parentNode.style.padding = '5px';



/** SIBLINGS */
const secondChild = document.querySelector('.child:nth-child(2)');              // Returns entry of 'Quinn'
console.log(secondChild);       // <div class="child" style="color: blue;" bis_skin_checked="1">Quinn</div>

// Previous sibling - new line
console.log(secondChild.previousSibling.nodeName);      // #text
console.log(secondChild.previousSibling.textContent);      // New line / empty log

// Next sibling is also new line
console.log(secondChild.nextSibling.nodeName);      // #text
console.log(secondChild.nextSibling.textContent);      // New line / empty log