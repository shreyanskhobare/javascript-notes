/************** If you see the HTML file you will observe that for this session purpose:
 * 'script.js' import is in 'head' tag and not body.
 * <head>
      <script src="./script.js"></script>
      <title>Window Events</title>
   </head>

   
   In such a case if we call below logic directly:
            document.querySelector('h1').textContent = 'Hello World!';
    
    It will throw an error - 'Uncaught TypeError: Cannot set properties of null'

    We can solve it by calling either 'load' or 'DOMContentLoaded' event of windows
 */


// Adding 'load' eventListener    
window.addEventListener('load', () => {
    console.log('Page Loaded');
});


// Adding DOMContentLoad
window.addEventListener('DOMContentLoaded', () => {

    console.log('DOM Loaded');
});

/******** Difference between 'load' and 'DOMContentLoaded' is that 
 * 'load' waits for entire page to be loaded including all resources such as images
 * While 'DOMContentLoaded' runs as soon as the DOM is parsed and loaded.
 * 
 * So if we run both of them (load and DOMContentLoaded), then you'll observe the logging sequence would be:
 * DOM Loaded
 * Page Loaded
 * 
 * If we add a console log anywhere, it will be printed first since we are not waiting for page to be loaded
 * 
*/
console.log('Regular text');
/**
 * Logging sequence would be:
 * Regular text
 * DOM Loaded
 * Page Loaded
 */


/********* Since our script.js is not in body tag instead it is in head tag,
 * we cannot access any of the DOM elements directly as it gives an error.
 * 
 * Exception to this is in case we add 'defer' attribute against the script tag i.e.
 *          <script src="./script.js" defer></script>
 * 
 * This 'defer' attribute will defer the javascript code from running until it can run  / DOM is loaded.
 * 'defer' is newly added.
 * 
 */

document.querySelector('h1').innerText = 'Hello World - Defered';   


/************* Resize event 
 * Gets triggered if you resize the window
*/
window.addEventListener('resize', () => {
    document.querySelector('h1').innerText = `Resized to ${window.innerWidth} x ${window.innerHeight}`;
});


/*********** Scroll Event
 * Gets triggered when you scroll your screen
 */
window.addEventListener('scroll', () => {
    console.log(`Scrolled: ${window.scrollX} x ${window.scrollY}`);

    if (window.scrollY > 300) {
        document.body.style.backgroundColor = 'cyan';
        document.body.style.color = 'red';
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    }
});


/*************** Focus and blurr */
window.addEventListener('focus', () => {
    document.querySelectorAll('p')
            .forEach((p) => {
                p.style.color = 'blue';
            });
});


window.addEventListener('blur', () => {
    document.querySelectorAll('p')
            .forEach((p) => {
                p.style.color = 'black';
            });
});