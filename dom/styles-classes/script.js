/**
 * ************************* In this we are going to perform some css specific changes using JS.
 * Some topics are important like .classList
 * 
 * When page loads for first time (as you can see in index.html), there is a :
 * 1. Paragraph object with className= 'card'
 * 2. List with two class names 'item-list items'
 * 3. Button with no class name
 */

// Getting the paragraph
const paragraph = document.querySelector('p');

// Getting the Unordered list object list using Class name
const listItems = document.querySelector('.item-list');

// Getting the list of items from obove object using querySelectorAll()
const items = listItems.querySelectorAll('li');

function run() {

    /**
     * UPDATING CLASSNAME..
     * If we update className directly using .className then it will OVERRIDE THE EXISTING classNames.
     * So if we do:
     *      paragraph.className = 'dark';
     * 
     * Then the existing class name i.e. 'card' will be removed and only 'dark' will remain which we don't want.
     * 
     * So we make use of .classList and then add() method in it...
     * 
     * First, lets see what .classList contains so we will call it on the 'listItems' which contains 2 classes.
     * And then we'll update the 'paragraph' which has just one class.
     */

    console.log(listItems.classList);  // DOMTokenList(2) ['item-list', 'items', value: 'item-list items']}
    
    //Since it is a DOMTokenlist, we can also call forEach on it...
    listItems.classList.forEach((item) => console.log(item));
    // Above will print 'item-list' in first iteration and 'items' in the second iteration.


    // Now lets add the 'dark' class to our paragraph object
    // Print pre-class value of paragraph
    console.log(paragraph.classList);

    // Add class
    paragraph.classList.add('dark');        // DOMTokenList ['card', value: 'card']

    // Printing post-class value
    console.log(paragraph.classList);       // DOMTokenList(2) ['card', 'dark', value: 'card dark']
    // Same change would be visible if you check 'Elements' in Developer Tools

    /******** Similarly you also have a .remove() method on classList
     * Let's remove the 'card' class from paragraph
     */
    paragraph.classList.remove('card');

    // Printing post-class value
    console.log(paragraph.classList);       // DOMTokenList ['dark', value: 'dark']



    /****************** You can also replace the className calling .replace() method
     * Until now, the paragraph has single class i.e. 'dark' on it...
     * We will replace it with 'card'. 
     * Just to see existing scenario, before it changes I am adding an alert statement.
     */
    paragraph.classList.replace('dark','card');
    console.log(paragraph.classList);       // DOMTokenList ['card', value: 'card']



    /********** Similarly you also have a .toggle() method which 
     * Adds a class if not present and removes the class the next time. 
     * It is used for toggling ON / OFF functionality like Dark Mode / Light mode, etc
     * 
     * As I am calling the 'toggle' method on 'listItems' below,
     * So everytime you click on the run button now, the list will appear and disappear after below code.
     * 'hidden' is DEFINED IN OUR style.css
     */
    listItems.classList.toggle('hidden');



    /**
     * **************************** CHANGING STYLES
     * We can call .style on objects for changing style.
     * In case propertyName of style has a hyphen in html, then we use its camelCase version in .js
     */
    listItems.style.lineHeight = '3';

    // Changing values to list objects
    // We are calling it on 'items' object and not 'listItems' because 'items' contains the list of all objects
    items.forEach((item, index) => index === 2 ? item.style.color = 'blue' : item.style.color = 'red');
    


}

// ********* We want function to be called after we click on the Run button. Hence, we make it a .onclick call
document.querySelector('button').onclick = run;