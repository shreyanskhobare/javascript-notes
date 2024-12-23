/**
 * *************** In this we are going to cover the event listeners....
 * 
 * There are three different ways we can do it...
 * 1. We can define events in html pages as well but it is recommended WE DO NOT DO IT IN HTML files
 * 2. We create function and call it on object like below
 */

console.log('Entered listener.js');

// Fetching the button object with Id : clear
const clearButton = document.querySelector('.btn-clear');

// Calling event - .onclick on the object
// ************** onclick is all small and not camelCase. Made that mistake!
clearButton.onclick = () =>  console.log('Called by onclick() method');

/********* One of the BACKDRAWS of using .onclick() or any similar event on same object is:
 * If you call the same event twice, the second event won't be executed.
 * So if I try to log something again on the same object using same event again,
 * I won't be logged. So below statement WON'T BE LOGGED!
*/
clearButton.onclick = () =>  console.log('Called by onclick() method second time');


/**
 * ************ Approach # 3 which is the RECOMMENDED APPROACH
 * It is to use the ADD EVENT LISTENER approach WHICH DOES ALLOW MULTIPLE EVENT CALLS ON THE SAME OBJECT
 * 
 * In this we call the .addEventListener method on object and pass two parameters to it:
 * 1. Event on which things should happen like 'click'
 * 2. Function that should be called when the event happens
 * 
 */
clearButton.addEventListener('click', () => console.log('Called by addEventListener() method'));

// Calling same event on same object second time. This time it will be logged!
clearButton.addEventListener('click', () => console.log('Called by addEventListener() method second time'));


/** In above cases, we have directly passed the arrow functions as logic to be executed.
 * We can also pass in function NAMES as second parameter. 
 * ********* WE HAVE TO MAKE SURE THAT WE DO CALL THE METHOD USING ONLY FUNCTION NAME WITHOUT () PARANTHESIS
 * If we call the function name WITH PARENTHESIS, then Javascript won't wait for event (onclick in our case)
 * to happen. Instead it will call the function as soon as the html page loads.
 */
// Define function
function onclickLog() {
    console.log('Function onclick called!');
}

clearButton.addEventListener('click', onclickLog);      //****** Called WITHOUT Parenthesis



/*************** REMOVING EVENT LISTENER
 * We can also remove the event listener if needed.
 * We generally call removeEventListener in case we are removing an object by using say- removeElement or removeChildElement.
 * So it is a good practise to remove Event Listener before removing the element
 * 
 * This .removeEventListener accepts two parameters:
 * 1. Event (like onclick) which we want to remove
 * 2. Function that we want to remove (in our example it is the 'onclickLog')
 * 
 * We want to remove the eventListener after 5 seconds. So we are setting a timeout of 5 seconds.
 * *************** The setTimeout() method that we are using inline is a ASYNCHRONOUS Javascript function that executes 
 * based on input provided to it. It accepts two parameters
 * 1. Function 
 * 2. Number of MILLISECONDS that we want to wait before Firing the function
 */

setTimeout(() => {
    console.log('Click Event listener removed'); 
    clearButton.removeEventListener('click', onclickLog)
    }, 5000);
/** *********** After above code, 
 * What happens due to this is, the 'click' event will work for first 5 seconds of page loading and it will stop working after 5 seconds.
 * So as soon as page loads, if we keep clicking on the 'Clear All' button, it will print 
 * 'Function onclick called!'
 * 
 * for first 5 seconds along with previously defined logs... 
 * After 5 seconds if we click on the button, it won't print 'Function onclick called!' logs anymore! Rest of the logs will still print
 * 
 * ************ We have to make sure that the Function we pass to be removed has to be defined (like 'onclickLog' in our case).
 *              
 *              () => console.log('Called by addEventListener() method second time' 
 * 
 * is an anonymous function we defined at line 38. If we try to remove that event, it won't work!
 * So below code won't stop the logging of 'Called by addEventListener() method second time' after 5 seconds
 */

setTimeout(() => {clearButton.removeEventListener('click', () => console.log('Called by addEventListener() method second time') )}, 5000);









/**************** WE CAN TRIGGER EVENTS PROGRAMMATICALLY
 * We just need to call the event method on our object directly.
 * In below example, we are calling the .click() function on our Button after 3 seconds!
 * I have kept it to 3 seconds on purpose because after 5 seconds the logic on line 72 will be executed and 
 * 'onclickLog' eventListener will be removed.
 * 
 * So even if we don't click the button at all after reloading, the 'click' event will automatically occur after 3 seconds
 * and all loggers that are meant to be logged after calling onClick will be logged.
 * In our example, the loggers on line 16, 35, 38, 49 will be logged.
 */
setTimeout(() => clearButton.click(), 3000);




// Highlighting list before removing it
function highilightList() {
    const list = document.querySelector('#item-list');
    list.style.backgroundColor='red';
}
setTimeout(highilightList, 7000);

/*********
 * ACTUALLY REMOVING ITEMS FROM THE LIST THIS TIME
 * This is more like a test from what we have learned already...
 * This will remove the entire list all at once after 7 seconds as I am calling it using timeout
 */
function removeUnorderedList() {

        /** APPROACH # 1 : Remove the entire <ul> object. But this is leave no scope for adding anymore elements in future
         * As we are getting rid of entire List block. Code:
                     document.querySelector('#item-list').remove();
        Hence, NOT A RECOMMENDED APPROACH
        */

        
        const unorderedList = document.querySelector('ul');
        const listItems = unorderedList.querySelectorAll('li');        // Method contains 'All' and hence returns a list
        
        /**
         * APPROACH # 2: Using forEach method
         * We call the .forEach method on actual list. Hence we run it on listItems object
         */
        listItems.forEach((item) => item.remove());


        /** APPROACH # 3: Using while loop on the parent object
         * We use firstChild on the 'ul' object hence we call it on 'unorderedList' object
         * 
         * It is not available on listItems.
        */
        while(unorderedList.firstChild) {
            unorderedList.removeChild(unorderedList.firstChild);
        }

        // Both Approach 2 and 3 will remove entries from the list individually!

}

setTimeout(removeUnorderedList, 10000);