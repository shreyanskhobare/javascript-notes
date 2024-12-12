/**
 * ****************** In this, we are going to cover how to fetch individual instances / values
 * rather than a group of them.
 */
/** GETTING ATTRIBUTES */

console.log(document.getElementById('app-title'));      // <h1 id="app-title" class="app-class">Shopping List</h1>
console.log(document.getElementById('app-title').id);   // app-title
// For class, remember to use .className and not .class
console.log(document.getElementById('app-title').className);    // app-class

// There might be some attributes which aren't easily accessible using .attribute (attribute is dynamic here).
// In these cases, we use .getAttribute('attributeName')
console.log(document.getElementById('app-title').getAttribute('class'));  // app-class. 
// No need of 'className' above since it directly looks for exact attribute name


/** SETTING ATTRIBUTES */
document.getElementById('app-title').id = 'new-id';   
// This will update id value and change will be visible in 'Elements' tab of Developer Tools 
// You can't fetch the field using 'app-title' anymore. you need to use 'new-id'

document.getElementById('new-id').title = 'Title displayed after hovering';
// New Id used above to make changes.
// .title is something which is displayed when you hover over that object / content. It had nothing before

// There might be some attributes which aren't easily accessible using .attribute (attribute is dynamic here).
// In these cases, we use .setAttribute('attributeName', 'attributeValue')
document.getElementById('new-id').setAttribute('class','newer-class');      // This will update class name to 'newer-class'

// Printing to see all differences after above commands. Compare with line 7
console.log(document.getElementById('new-id'));
// <h1 id="new-id" class="newer-class" title="Title displayed after hovering">Shopping List</h1>
/**
 * Changes observed:
 * 1. id and class changed
 * 2. title added
 */



/** ******************************
 * Rather than typing document.getElementById('key') everytime.
 * You can just set it in a constant and use that constant
 */
const title = document.getElementById('new-id');

/**  
 * Get / change content 
 */
title.textContent = 'Displayed text changed';       // .textContent will replace 'Shopping list' that is displayed
title.innerText = 'Displayed text changed again';       // .innerText will also replace 'Displayed text changed' that is displayed
// Read differences betwwen the two here:
// https://stackoverflow.com/questions/35213147/difference-between-textcontent-vs-innertext
// Recommended to use 'textContent' *****************************************************

title.innerHTML = '<strong>Text now updated using innerHTML</strong>';
// Above will modify both text and also will add the html tags 'strong' in above case to it


/**  
 * Change styles
 * ***************************** Javascript doesn't accept hyphen (-) in attribute name
 * So they all will be camelCase. For example:
 * background-color of html will become backgroundColor
 * border-radius of html will become borderRadius
 */
title.style.color='blue';
title.style.backgroundColor='pink';     
title.style.padding='10px';
title.style.borderRadius='20px';


/* ************************************ QUERY SELECTOR 
 * Uses jQuery and is much better than .getElementById()
 * 
 * If you call .querySelector('key') of something and if there are multiple entries of it in your template,
 * then it will return only the FIRST ENTRY.
 * 
 */
console.log('Query Selector starts');
console.log(document.querySelector('h1'));  // This will print the entire FIRST 'h1' header component (that we have modified)

// You can select using id
console.log(document.querySelector('#new-id'));     // ****** Need to use '#' for ID

// You can select using class
console.log(document.querySelector('.newer-class'));       // ******* Need to use '.' for class
/** All three will print the same-
 * 
 * <h1 id="new-id" class="newer-class" title="Title displayed after hovering" style="color: blue; 
 * background-color: pink; padding: 10px; border-radius: 20px;">
 * <strong>Text now updated using innerHTML</strong>
 * </h1>
 */

// You can fetch objects based on type of input they are accepting
console.log(document.querySelector('input[type=text]'));
// <input type="text" class="form-input" id="item-input" name="item" placeholder="Enter Item" />

// You can also fetch the objects from list using CSS queries.
// Below we are fetching 2nd object from the list
console.log(document.querySelector('li:nth-child(2)').innerText);      // Orange Juice

// We can again take this querySelector in an object and modify things
const secondItem = document.querySelector('li:nth-child(2)');            // Just took the object
secondItem.innerText = 'Strawberry Juice';          // Changed from Orange Juice
secondItem.style.color = 'brown';                   // Change can be observed on screen

/**
 * .querySelector() can be used on other items as well. It is not confined only to document
 */
const list = document.querySelector('ul');          // Will fetch the first list
console.log(list);          // Entire ul and it's underlying li will be printed

// Using query selector on list (which is not a document)
const firstItem = list.querySelector('li');         // Will fetch the first li from list
firstItem.style.color='cyan';                       // Change can be observed on screen