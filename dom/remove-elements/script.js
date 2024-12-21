/************ In this tutorial, we will see how to remove elements...
 * We can call .remove() method on object you want to remove
 * OR .removeChild() method on parent and pass the child that you want to remove
 * 
 * While loading for first time, our screen contains 4 objects in list and a 'Clear All' option on bottom
 * 4 objects in list are:
 * Apples, Orange Juice, Oreos, Milk
 */
// Approach # 1
function remove() {

    // Removing first elements by directly calling it
    document.querySelector('li:first-child').remove();
    // Above will remove the 'Apples' object in list.

    /**
     * We can also set the object in a constant and call the remove method on constant like below
     *              const child = document.querySelector('li:first-child');
     *              child.remove();
     * Both will work same
     */

}

remove();




/**
 * Approach # 2 - Calling .removeChild() method on parent and pass the child that you want to remove
 */
function removeChild() {

    // Get the parent object
    const parent = document.querySelector('ul'); 

    // Get the child you want to remove. On screen right now we see 3 options in list:
    // Orange Juice, Oreos, Milk
    const child = document.querySelector('li:nth-child(2)');
    // child contains object of 'Oreos'

    // Call the .removeChild() method on parent object
    parent.removeChild(child);
}

removeChild();



/**
 * Example function to remove object by passing index in request of method
 */
function removeItem(number) {

    // We can do it by using .remove() or by calling .removeChild() on parent. Whichever one you like.
    document.querySelector(`li:nth-child(${number})`).remove();
    

    /**
     * ************ There is one more way for selecting child... 
     * Rather than using .querySelector(`li:nth-child(${number})`)
     * You can also use
     *               .querySelectorAll()[indexPassed - 1];
     * 
     * So code becomes:
     *              document.querySelectorAll('li')[number - 1].remove();
     * 
     * This is because .querySelectorAll() returns a NodeList so you can traverse through it using [index]
     * But we need to remember here that since it is index based, we need to subtract 1.
     * 
     * While if we directly use 'nth-child', then NO need to subtract 1
     * 
     */

}

// Remove second object which is Milk... 
removeItem(2);

// All that remains on screen now is 'Orange Juice'

// ****** Making it an arrow function and also using querySelector approach
const removeArrow = (index) => document.querySelectorAll('li')[index-1].remove();

removeArrow(1);
// Everything from List is now removed!