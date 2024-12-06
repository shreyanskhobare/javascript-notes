/**
 * DOCUMENT OBJECT MODEL:
 * It is an Interface that allows us to interact with page elements dynamically.
 * 
 * PPT is present here:
 * https://shreyanskhobare.atlassian.net/wiki/spaces/~712020620fd2d2bdaa4be6a7c161d56744cf4c/pages/50626597/Presentations
 */

console.log(window);        // Shows everything related to window.
console.log(window.document);       // This will show everything that falls under document in the same html / css format
// We can also do
console.log(document);

// If you want to see just the body, you can use
console.log(document.body);

// If you want to see the Inner HTML (including tags, scripts, etc), you can use:
console.log(document.body.innerHTML);

// If you want to see the Inner Text, you can use:
console.log(document.body.innerText);       // This will print just the text and no tags / scripts, etc.

// If you want to see the properties and methods, then we can do:
console.dir(window.document);

// Accessing Hyperlinks on page
// Index is set to 0 because we know for sure that there is just one link
console.log(document.links[0]);  // <a href="https://www.shreyanskhobare.com">My website</a>


/** ******** You can update entire internal body of html using 

document.body.innerHTML = '<h1>Hey! I\'ve changed things!<h1>';
// After above, you'll see entire innerHtml has changed!

console.log(document.links[0]);  // This will return undefined due to it...

*/

// There is also a document.write() which does nothing much but just appends things at the end of html
document.write('Look at me at the end of file!');


/**
 * FETCH ELEMENTS IN HTML using
 */
console.log(document.getElementById('main'));       // This will get entire block under the 'main' div

// You can get those elements in particular objects
const main = document.getElementById('main');       // This will save entire block under the 'main' div

/**  Below line (54) will modify the entire content inside main div.
 
     main.innerHTML = '<h1>I have changed content inside main block!</h1>';      

 * Rest of the content will remain same. So <a href> and text printed as part of line 41 will not change
*/

/** **************************************
 * You can also update selective content from inside 'main' div as well by using 'QuerySelector':
 * Below line (63) will update just the content of 'h1' block inside 'main' div. Remaining part like <p> will remain same!
 */
document.querySelector('#main h1').innerText = 'Updated using Query Selector';