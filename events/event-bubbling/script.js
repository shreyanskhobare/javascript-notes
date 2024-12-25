/**************** EVENT BUBBLING AND .stopPropogation()
 * If we add an eventListener on to an element, that event
 * moves up the DOM tree and if it finds a parent element that has a listener for 
 * that event, then it will fire that as well.
 * 
 * In our HTML, the 'Add item' BUTTON is present inside the '2nd' div
 * 
 * <form id="item-form">
            <div class="form-control">
                <input type="text" class="form-input" id="item-input" name="item" placeholder="Enter Item" />
            </div>
            <div class="form-control">
                <button type="submit" class="btn">
                    <i class="fa-solid fa-plus"></i> Add Item
                </button>
            </div>
    </form>

*/

// Get the button and add an eventListener for it
const button = document.querySelector('form button');
button.addEventListener('click', () => alert('Button was clicked'));

// Get the second div which also contains the button and add an event listener
const secondDiv = document.querySelector('form div:nth-child(2)');
secondDiv.addEventListener('click', () => alert('Second Div was clicked'));

/****** On line 23 and 27, we have basically added two event listeners one on button and one on div
 * which show an alert message. As mentioned earlier, the button object is present inside second div.
 * 
 * BEHAVIOUR:
 * If you click anywhere outside the button but inside the second div, then 
 * alert message 'Second Div was clicked' only will be shown
 * 
 * If you click on the 'Add item' button, then both 'Button was clicked' 
 * and 'Second Div was clicked' alert messages will be shown in that sequence.
 * 
 * This is called Event Bubbling..
 * We can add similar eventListener for form and body of html
 */

const form = document.querySelector('form');
form.addEventListener('click', () => alert('Form was clicked'));

document.body.addEventListener('click', () => alert('Body was clicked'));
/** Due to above two addEventListeners, depending on where you click, an alert would be shown.
 * If you click on the 'Add item' button, then it will show alert in following sequence:
 * Button was clicked
 * Second Div was clicked
 * Form was clicked
 * Body was clicked
 * 
 * This is because of hierarchy of html elements.
 * 
 * If I click just on the input text box (which is inside the form), it will display below alerts:
 * Form was clicked
 * Body was clicked
 */




/***************** .stopPropogation() which stops the event bubbling
 * if we call e.stopPropogation(), then it will stop alerts shown (due to events) on parent elements
 */
const textElement = document.querySelector('form #item-input');
textElement.addEventListener('click', (e) => {
    
    alert('Clicked on text box');

    /**  If I do not add below line, then when if you click on the text box, it will show alert in below sequence
     * Clicked on text box
     * Form was clicked
     * Body was clicked
     * 
     * But, if I add e.stopPropogation(), then only 'Clicked on text box' alert will be shown
     * The other two alerts won't be shown
     * 
     */
    e.stopPropagation();
})