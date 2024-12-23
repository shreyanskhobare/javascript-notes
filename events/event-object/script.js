/** **************** In this we are going to cover the EVENT Object and it's properties...
 * The .addEventListener accepts a Function that can take in an Event object as a parameter.
 * In all tutorials before we have passed simple functions. In below examples, we will pass in the event object
 * amd observe its properties.
 * 
 * `target` - The element that triggered the event
 * currentTarget` - The element that the event listener is attached to (These are the same in this case
 * `type` - The type of event that was triggered
 * `timeStamp` - The time that the event was triggered
 * `clientX` - The x position of the mouse click relative to the window
 * `clientY` - The y position of the mouse click relative to the window
 * `offsetX` - The x position of the mouse click relative to the element
 * `offsetY` - The y position of the mouse click relative to the element
 * `pageX` - The x position of the mouse click relative to the page
 * `pageY` - The y position of the mouse click relative to the page
 * `screenX` - The x position of the mouse click relative to the screen
 * `screenY` - The y position of the mouse click relative to the screen
 * `preventDefault` - Prevents the default behavior of elements
 */

/** 'target' and 'currentTarget'
 * `target` - The element that triggered the event
 * currentTarget` - The element that the event listener is attached to (These are the same in this case
 */
const image = document.querySelector('img');

// We can externalize the function as well with same signature.
image.addEventListener('click', function(e) {       // 'e' here is the event object populated at runtime

    console.log(e.target);          //  <img src="images/note.png" alt="">
    console.log(e.currentTarget);   //  <img src="images/note.png" alt="">

    console.log(e.type);            // click --> Tells the event type.
    console.log(e.timeStamp);       // 2669.6999999284744  --> Gives the timestamp of when we clicked it

    /**
     * Click 1 : Top left of image
     * Click 2 : Top right of image
     * Click 3 : Bottom left of image
     * Click 4 : Bottom right of image
     * Click 5 : Centre of image
     */

    // 'client' tells the position of the mouse click relative to the window
    console.log(e.clientX);     // 54 , 115 , 54 , 116 , 80
    console.log(e.clientY);     // 50 , 52 , 111 , 113 , 82

    // 'offset' tells the position of the mouse click relative to the element (image in our case)
    console.log(e.offsetX);     // 1 , 62 , 1 , 63 , 27
    console.log(e.offsetY);     // 1 , 2 , 61 , 63 , 33

    // 'page' tells the position of the mouse click relative to the page
    console.log(e.pageX);       // 54 , 115 , 54 , 116 , 82
    console.log(e.pageY);       // 50 , 52 , 111 , 113 , 82

    // 'screen' tells the position of the mouse click relative to the screen i.e. YOUR MONITOR
    console.log(e.screenX);     // 276 , 336 , 276 , 337 , 301
    console.log(e.screenY);     // 177 , 179 , 238 , 240 , 209

    // We can also make changes to element using target / currentTarget
    e.target.style.backgroundColor = 'purple'; 
    // So if I click on the image, it's background color will change to purple


 
});

// target and currentTarget value in case of above is SAME as we are adding eventListener on image explicitly.
// It will make a difference if we add it on complete 'document.body' and click on different things.
document.body.addEventListener('click', function(e) {

    console.log(e.target);
    console.log(e.currentTarget);

    /** WHAT IS LOGGED IN CASE I CLICK ON:
     * 
     * IMAGE-
     * e.target = <img src="images/note.png" alt="">
     * e.currentTarget = <body>....</body>  --> Complete body object
     * 
     * CLEAR ALL BUTTON-
     * e.target = <button id="clear" class="btn-clear">Clear All</button>
     * e.currentTarget = <body>....</body>  --> Complete body object
     * 
     * ANY ENTRY IN LIST-
     * e.target = <li>....</li>   --> Complete list object
     * e.currentTarget = <body>....</body>  --> Complete body object
     * 
     * So basically 'currentTarget' bubbles up and finds the topmost parent object which 
     * generally in our case is the complete <body> element
     */

});




/** ************ '.preventDefault()' WHICH IS GENERALLY USED WITH FORMS
 * It stops the default behaviour of elements.
 * 
 * Example:
 * If you are dealing with front-end javascript for validation or any other request AND 
 * If you DON'T WANT to submit to the page then you will use prevent default.
 * 
 * OR You can also use it on link to prevent it's default behaviour
 * 
 * For our example, I have added below at the end of our page
 * 
 *          <a href="https://www.shreyanskhobare.com">My Website</a>
 * 
 * So default behaviour would be that if I click on it, it will take me to My website!
 * 
 * If we want to avoid it, we can use .preventDefault and as it to perform some other action like just log something
 */

document.querySelector('a').addEventListener('click', (e) => {

    e.preventDefault();         // Stopping default behaviour

    console.log('Link clicked but default behaviour prevented!');       // This will be logged when I'll click on it
    // My website won't be opened on new screen
});



/** Just another EXAMPLE of how we can use the event - 
 * Print the X and Y coordinate of image when you drag it.
 */
image.addEventListener('drag', (e) => {
    
    document.querySelector('h1').textContent = `X: ${e.pageX} and Y: ${e.pageY}`;

    // Above code will print the X and Y coordinate in place of 'Shopping List' text when you drag the image.
    // After dragging is complete and when you leave the mouse, it will print:
    //          X: 0 and Y: 0
    // Since you are not dragging it anymore    
})

// Below code added myself to set the heading back to original after dragging is complete (not there in tutorial!)
image.addEventListener('dragend', (e) => {

    document.querySelector('h1').textContent = `Shopping List!`;
    // Once dragging is complete, the h1 value will be set to ShoppingList because we are using
    // 'dragend' event on the image element 

})