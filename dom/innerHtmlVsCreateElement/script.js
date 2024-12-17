/**
 * ********* In this tutorial, we are trying to add another object in the list of elements using two approaches.
 * 1. Quick and Dirty
 * 2. Clean and Performant
 */

/******QUICK AND DIRTY APPROACH
 * Using innerHtml
 * We first create a function for it...
 */
function createListInnerHtml(item) {

    /**
     * Below code will throw an exception because list in below case will be a simple string.
     *              const list = `<li>${item}</li>`;
     *              document.querySelector('.items').appendChild(list);    
     * Exception:
     * Uncaught TypeError: Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'
     * 
     * Since list is a simple string, it will throw exception as it needs a node. 
     * So we create a node using 'createElement' method.
     */
    const list = document.createElement('li');

    // Dirty way
    list.innerHTML = `${item}
                <button class="remove-item btn-link text-red">
                    <i class="fa-solid fa-xmark"></i>
                </button>`;

    /** ***********
     * Using 'innerHTML' causes the web browser to repass and recreate all the DOM nodes inside the UL element.
     * Hence, it is less efficient.
     ******
     * Also, Setting 'innerHTML' will not re-attach EVENT HANDLERS to the new elements it creates so we have to keep track
     * of them manually. */            

    document.querySelector('.items').appendChild(list);     
    // Above line will add the new item to list having class name 'items'

}


// calling function 
createListInnerHtml('Sugar');





/**
 * ****************** CLEAN AND PERFORMANT APPROACH
 * In this we create all objects individually
 */
function createListIndividualElements(item) {

    const listItem = document.createElement('li');
    listItem.appendChild(document.createTextNode(item));        // Appending the new entry as a Text

    const button = document.createElement('button');
    button.className = 'remove-item btn-link text-red';

    const icon = document.createElement('i');
    icon.className = 'fa-solid fa-xmark';

    button.appendChild(icon);           // Adding the red 'x' icon to button
    listItem.appendChild(button);           // Adding button to object

    document.querySelector('.items').appendChild(listItem);     // Adding item to actual list

}

// Calling above function
createListIndividualElements('Chocolate');