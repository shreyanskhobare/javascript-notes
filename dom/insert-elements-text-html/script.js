/**
 * ************* In this we are going to learn how to insert elements, text, html etc in our pages.
 * For all methods getting called, we have to pass where to insert also called location. 
 * This is how those locations are defined if we take a paragraph <p> Content </p> as reference :
 * 
 * 
                <!-- beforebegin -->
                <p>
                <!-- afterbegin -->
                foo
                <!-- beforeend -->
                </p>
                <!-- afterend -->
*/


/** ***** Insert ELEMENT using .insertAdjacentElement
 * Here we are inserting a 'h1' ELEMENT around the 'Filter Items' text displayed on screen.
 * That text has className 'filter'
 *  */ 
function insertAdjacentElementExample() {
    const filter = document.querySelector('.filter');

    filter.style.border = '1px solid red';    // Inserting border so it is clearly visible

    // Create object you want to insert - h4 in this case.
    const beforeBegin = document.createElement('h4');
    beforeBegin.textContent = 'insertAdjacentElement --> beforeBegin';

    const afterbegin = document.createElement('h4');
    afterbegin.textContent = 'insertAdjacentElement --> afterbegin';

    const beforeend = document.createElement('h4');
    beforeend.textContent = 'insertAdjacentElement --> beforeend';

    const afterend = document.createElement('h4');
    afterend.textContent = 'insertAdjacentElement --> afterend';

    // Calling the insertAdjacentElement to insert the object. It accepts two parameters:
    // 1. Location      -- Can be anything amongst the 4: beforebegin, afterbegin, beforeend, afterend
    // 2. Object to be inserted
    filter.insertAdjacentElement('beforebegin', beforeBegin);
    filter.insertAdjacentElement('afterbegin', afterbegin);
    filter.insertAdjacentElement('beforeend', beforeend);
    filter.insertAdjacentElement('afterend', afterend);
}

insertAdjacentElementExample();




/** ***** Insert TEXT using .insertAdjacentText
 * Here we are inserting a simple text element around the first object in the list which is called Apple.
 */
 function insertAdjacentTextExample() {
    // ****** See how we are fetching first child beow!
    const listElement = document.querySelector('li:first-child');        

    listElement.style.border = '1px solid blue';    // Inserting border so it is clearly visible

    // Calling the insertAdjacentText to insert the TEXT object. It also accepts two parameters:
    // 1. Location      -- Can be anything amongst the 4: beforebegin, afterbegin, beforeend, afterend
    // 2. Text to be inserted
    listElement.insertAdjacentText('beforebegin', 'b4Begin');
    listElement.insertAdjacentText('afterbegin', 'aftbegin');
    listElement.insertAdjacentText('beforeend', 'b4end');
    listElement.insertAdjacentText('afterend', 'aftend');

    // The image might look distorted after adding all components because it is a simple object in list
    // And we have added too much text in it!
}

insertAdjacentTextExample();




/** ***** Insert HTML using .insertAdjacentHTML.
 * NOTE: HTML is in capital here
 * Here we are inserting a simple html element '<i>' around the ''Clear All' option at the end of page
 * That button has ID as 'clear'
 */
 function insertAdjacentHtmlExample() {
    // ****** See how we are fetching first child beow!
    const clearButton = document.querySelector('#clear');        

    clearButton.style.border = '2px solid orange';    // Inserting border so it is clearly visible

    // Calling the insertAdjacentHtml to insert the TEXT object. It also accepts two parameters:
    // 1. Location      -- Can be anything amongst the 4: beforebegin, afterbegin, beforeend, afterend
    // 2. Text to be inserted
    clearButton.insertAdjacentHTML('beforebegin', '<h5>insertAdjacentHTML - beforebegin</h5>');
    clearButton.insertAdjacentHTML('afterbegin', '<h5>insertAdjacentHTML - afterbegin</h5>');
    clearButton.insertAdjacentHTML('beforeend', '<h5>insertAdjacentHTML - beforeend</h5>');
    clearButton.insertAdjacentHTML('afterend', '<h5>insertAdjacentHTML - afterend</h5>');

    // The image might look distorted after adding all components because it is a simple object in list
    // And we have added too much text in it!
}

insertAdjacentHtmlExample();



/****************** INSERT CHILD
 * Similar to how appendChild works but it is a little more complicated as in this case we 
 * need to define a parent and then chose the object in that parent BEFORE which you want to insert the item
 */
function insertBeforeItem() {

    // Creating object we want to insert
    const itemToInsert = document.createElement('li');
    itemToInsert.textContent = 'Inserted using insertBefore';
    itemToInsert.style.color = 'red';

    // Get the Unordered list
    const list = document.querySelector('ul');

    // We want to insert the item before 3rd entry in list. So we fetch 3rd item from list
    const thirdItem = document.querySelector('li:nth-child(3)');

    /**  This is where we actually insert it. 
    * *********** We need to call the .insertBefore method on the parent object i.e. the list
    * It accepts two parameters:
    * 1. Item to be inserted
    * 2. Object before which we want to insert the object
    */
    list.insertBefore(itemToInsert, thirdItem);

}

insertBeforeItem();