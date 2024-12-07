let output = document.documentElement; // Prints entire document element which includes html, head and body object
console.log(output);

output = document.head;      // Prints just the head component
console.log(output);

output = document.head.children;      // Prints the childer from head component
console.log(output);

output = document.body;     // Prints just the body component
console.log(output);

output = document.body.children;     // Prints the children from body component
console.log(output);

output = document.doctype;     //   <!DOCTYPE html>
console.log(output);

output = document.domain;     // 127.0.0.1
console.log(output);

output = document.URL;     // http://127.0.0.1:5500/dom/dom-properties/index.html?item=
console.log(output);

output = document.characterSet;     // UTF-8
console.log(output);

output = document.contentType;     // text/html
console.log(output);

/** *********************** FORMS **************************************** */

output = document.forms;                // List of all forms in application
console.log(output);

output = document.forms[0];             // Complete block of first form
console.log(output);

output = document.forms[0].id;          // item-form  --> ID of first form
console.log(output);

output = document.forms[0].method;      // get
console.log(output);

output = document.forms[0].action;      // http://127.0.0.1:5500/dom/dom-properties/index.html?item=
console.log(output);

// You can also modify content.
// Modifying id:
// document.forms[0].id = 'new-id';         --> If you'll check in Developer tools, you'll see name changed in html generated there


/** *********************** LINKS **************************************** */

output = document.links;        // Will get all links. 
console.log(output);

output = document.links[0];        // Will get complete definition of first link which in our case points to google. 
console.log(output);               // <a href="https://www.google.com">Dynamic Link for test</a>

output = document.links[0].href;  // Will get just the ref link
console.log(output);            // https://www.google.com/

// We can set ID of link (which not necessarily would be there already).
document.links[0].id = 'dynamic-link';          // This id will be added and visible in 'Elements' tab of Developer Tools

// Updating Href
document.links[0].href = 'https://www.facebook.com';        
// This will update link from Google to Facebook and visible in 'Elements' tab of Developer Tools

// Updating / Adding Class 
// ****** In this case, we need to use '.className' and not '.class' unlike .id
document.links[0].className = 'dynamic-class'; 
// This will add class='dynamic-class' to href and visible in 'Elements' tab of Developer Tools

// AFTER ALL THESE CHANGES, let's see how the href looks
// Comparing it with value logged in line 54
output = document.links[0];
console.log(output);
// <a href="https://www.facebook.com" id="dynamic-link" class="dynamic-class">Dynamic Link for test</a>
/** You'll observe-
 * 1. URL changed from Google to Facebook
 * 2. id and class added to a href
 */


// If we want to get collection of all classes
output = document.links[0].classList;
console.log(output);            // DOMTokenList ['dynamic-class', value: 'dynamic-class']




/** *********************** IMAGES **************************************** */
output = document.images;
console.log(output);            // Html collection of all images

output = document.images[0];    // Image details using tag
console.log(output);            // <img src="images/note.png" alt="">

output = document.images[0].src;    // Complete image link without tag
console.log(output);            // http://127.0.0.1:5500/dom/dom-properties/images/note.png


/****************************************** IMPORTANT NOTE
 * document.links
 * document.forms
 * document.images, etc
 * 
 * return a 'HTMLCollection' which is array like as we can access using index.
 * But, You CANNOT USE .forEach() for traversing over it.
 * 
 * Below will not work:-
 * output = document.forms.forEach(form => console.log(form));
 * console.log(output);
 * 
 * It will throw exception:
 * script.js:116 Uncaught TypeError: document.forms.forEach is not a function
 * 
 * We can however use it by converting it to array using Array.from()
 */
const formsArray = Array.from(document.forms);
formsArray.forEach(form => console.log(form));      // This will get all the parent forms and NOT the forms inside it!
// So it will print just the 'item-form' which is parent form

