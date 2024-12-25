/******** In this mini-project, we are going to create a project similar to one created here:
 * https://www.toptal.com/developers/keycode where you print details related to any key you press in
 * 
 * NOTE: The 'key' for space is an Empty string which messes up with the way the text box is displayed.
 * Hence, we will be placing an if condition to display 'Space' as text under key.
 * 
 * ****** Since there is no explicit text box here for user to enter the key,
 * we will be adding the eventlistener on WINDOW object directly.
 * 
 * In this example, the method 1 will be called first and method 2 will be called later
 * 
 */

/** ***** METHOD 1 - Create entire HTML and set it directly */
// Adding listener on window object
window.addEventListener('keydown', (e) => {

    // <div id="insert">Press and key to get the keycode</div>  --> Current insert value
    const insert = document.getElementById('insert');
    console.log('Old logic called');
    
    // Complete div passed as input with values setup at runtime.
    insert.innerHTML = `
    <div class="key">
        <small>e.key</small>
        ${e.key === ' ' ? 'Space' : e.key}      
     </div>

     <div class="key">
       <small>e.keyCode</small>
        ${e.keyCode}
     </div>

     <div class="key">
       <small>e.code</small>
        ${e.code}
     </div>
    `;

});


/** ******* Method 2 : Alternate / Better way 
 * In this approach, we are building things up from scratch
*/

function showKeyCodes(e) {

    const insert = document.getElementById('insert');
    console.log('Better logic called');
    
    // Setting this to empty so that existing text is removed. Else every key press will append to existing entry.
    // Wasn't needed in earlier entry because there we are directly replacing innerHTML
    insert.innerHTML = '';              

    // We create an object
    const keyCodes = {         
        'e.key' : e.key === ' ' ? 'Space' : e.key,      //  'objectName' : objectValue
        'e.keyCode' : e.keyCode,                        //  'objectName' : objectValue
        'e.code' : e.code                               //  'objectName' : objectValue
    };

    // Using for...in loop. In case of for...in loop, they key is object name and not value
    for (let key in keyCodes) {

        /** We are trying to create this-
         * 
    *              <div class="key">
                    <small>e.key</small>
                    ${e.key === ' ' ? 'Space' : e.key}      
                </div>
         */
        // Creating div object first
        const div = document.createElement('div');
        div.className = 'key';

        // Creating small element
        const small = document.createElement('small');

        // Creating key and value text elements
        const keyName = document.createTextNode(key);           // Will contain: e.key, e.keyCode, e.code
        const keyValue = document.createTextNode(keyCodes[key]);    // Will contain actual values

        // Append keyName to small element
        small.appendChild(keyName);
        // Append keyValue to div element
        div.appendChild(keyValue);
        // Append small to div
        div.appendChild(small);
        // Append div to DOM via insert
        insert.appendChild(div);

    }

}

// Call above function
window.addEventListener('keydown', showKeyCodes);