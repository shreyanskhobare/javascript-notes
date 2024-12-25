/************ Event Delegation is used when you want to add an Event Listener on 
 * multiple elements.
 * BAD approach would be to add individual event listener on each object.
 * While GOOD approach would be to add one eventListener on parent object wherever possible.
 * 
 * In our example, we have a 'ul' element which has 4 'li' items in it..
 * If we want to remove 'li' elements we click on, the BAD approach would be
 */

const listItems = document.querySelectorAll('li');  // Gets all list items

listItems.forEach(item => {                     // Iterate over each item in list
    item.addEventListener('click', (e) => {     // Add event listener for each item
        e.target.remove();                      // Set logic to remove item
    })  
});


// GOOD approach would be to add event listener oon parent item i.e. 'ul' and not 'li'
const list = document.querySelector('ul');      // Gets ul object

// Add eventListener on ul
list.addEventListener('click', (e) => {

    /******* Below if() check is necessary as we can click on blank spaces between two list items as well. 
    * So tagName makes sure that removal of list items is done and nothing else.
    * If below if() check is NOT added and if you click on empty spaces between lines,
    * then the entire 'ul' will be removed as it becomes the target in this case!
    */
    if(e.target.tagName === 'LI') {         
        e.target.remove();
    }
});

// Similarly we can add another eventList for mouseHovering on the same ul
list.addEventListener('mouseover', (e) => {

    // Same check for List first
    if(e.target.tagName === 'LI') {         
        e.target.style.color = 'blue';
    }
});