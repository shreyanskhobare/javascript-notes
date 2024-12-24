/*************** In this tutorial we will cover the multiple events related to KEYBOARD which include
 * 
 * 'keypress' - When you click on any key
 * 'keydown' - When you press any key.
 * 'keyup' - When you release the key after pressing it.
 * 
 * All these events have some properties which are helpful to us viz.
 * 'key' --> Tells key that is pressed like a,b,c,Enter, etc
 * 
 * 'keyCode' --> All keys have a keyCode assigned to them which are digit values. 
 *      They are documented here: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
 * 
 * 'code' --> This returns the code assigned to a key like KeyA, KeyB, KeyC, etc
 * 
 * 'repeat' --> Tells whether the customer has pressed the key and hasn't released it! 
 *      It returns a boolean value if key is pressed and character is repeated.
 *      It won't return value based on comparison with last key. 
 *      So if you press same key after a break like 'ssss', it won't return true as it is manually typed.
 *      It will return true if 'ssss' is getting pressed due to you not releasing the key
 * 
 *  'shiftKey'  --> Returns a boolean if the Shift Key is pressed.
 *  'ctrlKey'  --> Returns a boolean if the Control Key is pressed.
 *  'altKey'  --> Returns a boolean if the Alt Key is pressed (or command in iOS).
 * 
 * We are performing activities on the input text box present on screen.
 */

// Getting text box using '.getElementById' as the text box has an id
const textBox = document.getElementById('item-input');

// Called when you release a key. 
const onKeyRelease = (e) => console.log('Key released!');
textBox.addEventListener('keydown', onKeyRelease);

// Called when a key is pressed.
const onKeyDown = (e) => {
    
    // key
    if (e.key === 'Backspace') {        // If we press Enter, then the text sent in 'Enter'
        console.log('Enter pressed and validated using e.key !');
    }

    // keyCode - https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
    
    if (e.keyCode === 32 ) {         // 32 is the digit value for space
        console.log('Space pressed and validated using e.keyCode !');
    }

    // code
    if (e.code === 'Digit1') {      // The number 1's code is 'Digit1'
        console.log('Digit 1 pressed and validated using e.code !');
    }

    // Log if key is pressed and not released meaning it is repeated
    e.repeat ? console.log(`Release key ${e.key}`) : null;

    // Log if Shift key is pressed
    e.shiftKey ? console.log('Shift Key pressed and validated using e.shiftKey') : null;

    // Log if Control key is pressed
    e.ctrlKey ? console.log('Control Key pressed and validated using e.ctrlKey') : null;

    // Log if Shift key is pressed
    e.altKey ? console.log('Alt Key pressed and validated using e.altKey') : null;

}
textBox.addEventListener('keydown', onKeyDown);

// Called when you press a key. 
const onKeyPress = (e) => console.log('Key Pressed');
textBox.addEventListener('keypress', onKeyPress);


/********* When above events will be called is dependent on how your keyboard behaves...
 * In case of Video tutorial I followed, if you press and hold a button for a long time, 
 * then character is printed just once. So it is considered a single keypress. In video if he doesn't release
 * the key, then only 'keydown' logger is printed multiple times while the 'keypress' and 'keyup' is called only once.
 * 
 * In case of my execution, if I keep any key pressed then the character pressed keeps getting printed multiple times.
 * So long press in my case means multiple key press. So it logs all 3 event loggers i.e. 'keydown', 'keypress' and 'keyup'
 */