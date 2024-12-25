/** ********** In this tutorial, we will be covering the 'input' type of event.
 * We will also cover 'focus' and 'blur' for text input type
 * Different html entities have different events that we learned till now like
 * keydown, keypress, keyup for keyboard, 
 * click, mousedown, mouseup for mouse, etc
 * 
 * There is similarly a 'input' type of event which can be called on almost all types i.e.
 * text, dropdown, checkbox, etc
 * 
 * ******** To fetch value of input, we use e.target
 * We call .value if it is for textbox or dropdown
 * We call .checked for checkbox which will return a boolean
 * 
 * Our HTML file contains multiple input types viz.
 * <form>
 *      <input type="text" class="form-input" id="item-input" name="item" placeholder="Enter Item" />
 * 
 *      <select id="priority-input" name="priority" class="form-input">
 *      .
 *      .
 *      </select>
 * 
 *       <input type="checkbox" id="checkbox" />
 * </form>
 * 
 * We will use the 'input' event on these. Also there is a difference in the way the 'input' event handles data.
 * 
 * If you use 'keydown' for keyboard, it will print each key you press as a separate entry.
 * So if you type: 'Joe', then 'keydown' will print / manage it as:
 * J
 * o
 * e
 * 
 * While, 'input' will append each key with previous and will print it as:
 * J
 * Jo
 * Joe
 * 
 */
const textInput = document.getElementById('item-input');            
const dropdownInput = document.getElementById('priority-input');
const checkboxInput = document.getElementById('checkbox');
// Also fetching the header object
const heading = document.querySelector('h1');


// We define a function for handling the 'input' event which is common for all
function onInput(e) {

    console.log(e.target.value);
    
    heading.textContent = e.target.value;

}

// Calling for textBox
/**
* ******** If you use 'keydown' for keyboard, it will print each key you press as a separate entry.
* So if you type: 'Joe', then 'keydown' will print / manage it as:
* J
* o
* e
* 
* While, 'input' will append each key with previous and will print it as:
* J
* Jo
* Joe
    */
textInput.addEventListener('input', onInput);

// Calling for dropDown
/**
 * In this case, the e.target.value will return the value of key selected.
 * For example, 
 * <option value="1">Joe</option>
 * 
 * If you select 'Joe', then e.target.value will return '1'
 */
dropdownInput.addEventListener('input', onInput);
// There is also a 'change' event for dropdown box which has the same behaviour as 'input'
dropdownInput.addEventListener('change', onInput);


/** ******** For checkbox, there is no .value option. Instead there is .checked */
function onChecked(e) {

    console.log(e.target.checked);      // Will print boolean - true / false
    heading.textContent = e.target.checked ? 'Checked' : 'Not checked';

}

// Still calling the 'input' event
checkboxInput.addEventListener('input', onChecked);




/******* There is also 'focus' and 'blur' event
 * In case of input type 'text', 'focus' is called when you click on block and
 * 'blur' is called when you click out of it
*/
function onFocus(e) {

    console.log('Input is focused');
    // Making some style changes
    textInput.style.outlineStyle = 'dotted';
    //textInput.style.outlineWidth = '2px';
    textInput.style.outlineColor = 'green';

}

function onBlur(e) {
    console.log('Input is out of focus');
    // Reverting style changes
    textInput.style.outlineStyle = 'none';
}

textInput.addEventListener('focus', onFocus);
textInput.addEventListener('blur', onBlur);