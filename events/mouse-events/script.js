/*********** In this, we are going to learn other events of mouse apart from just onclick or click viz. 
 * Double click (dblclick),
 * Right click (contextmenu),
 * Mouse Down (mousedown),
 * Mouse Up (mouseup),
 * Scrolling of wheel (wheel),
 * Hovering over and out (mouseover, mouseout)
 * Dragging element (dragstart, drag, dragend)
 * 
 * 
 * We will perform multiple actions of mouse event on the image displayed on screen
 * NOTE: ALL EVENT NAMES PASSED TO ADD EVENT LISTENER ARE IN LOWER CASE !
 */
// Get image
const logo = document.querySelector('img');

const onClick = () => console.log('Click event Added');
// Because of below addition, 'Click event Added' will be logged everytime we click on the image.
logo.addEventListener('click', onClick);


//  *** Function definition for what should happen when you DOUBLE CLICK.
//  Color change of background on double click
const onDoubleClick = () => {

    if (document.body.style.backgroundColor !== 'pink') {

        document.body.style.backgroundColor = 'pink';
        document.body.style.color = 'white';

    } else {

        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'purple';

    }

}

/**
 * ********** For Double click the event is 'dblclick' where NOTHING IS CAMEL CASE.
 * Also, the event listener defined on line 11 will be triggered twice when we double click
 */
logo.addEventListener('dblclick', onDoubleClick);



/** ********* The RIGHT CLICK of MOUSE is called as 'contextmenu' event! */
const onRightClick = () => console.log('Right clicked a.k.a Context Menu opened');

logo.addEventListener('contextmenu', onRightClick);


/** *********** MOUSE DOWN EVENT - The pressing of left click is called mouse down. */
const onMouseDown = () => console.log('Mouse down event called');

logo.addEventListener('mousedown', onMouseDown);

/** *********** MOUSE UP EVENT - Releasing of mouse after pressing it is called Mouse Up */
const onMouseUp = () => console.log('Mouse up event called');

logo.addEventListener('mouseup', onMouseUp);

/*********** So if all 3 event listeners i.e. click, mousedown and mouseup are defined, 
 * the loggers would be in below sequence:
 * 
 * Mouse down event called   (Line 47)
 * Mouse up event called     (Line 52)
 * Click event Added         (Line 9)
 */


/** ***** There is also a event called 'wheel' which gets called when you scroll your mouse wheel 
 * NOTE: This will be called only when you scroll your mouse wheel over the IMAGE and not entire page!
 * It would be logged the number of times you will scroll your mouse on the image
*/
const onMouseWheel = () => console.log('Mouse Wheel event called');

logo.addEventListener('wheel', onMouseWheel);



/********** HOVERING EVENT. 
 * When you hover over the image, event is called 'mouseover' 
 * And when you exit, it is called 'mouseout' 
 */
const onMouseOver = () => console.log('Mouse over event called');
const onMouseOut = () => console.log('Mouse out event called');

logo.addEventListener('mouseover', onMouseOver);
logo.addEventListener('mouseout', onMouseOut);



/******* DRAG EVENT
 * If you drag an element (image in our case) using mouse, there are multiple events in that case too:
 * 'dragstart' is called when you start dragging the element (image)
 * 
 * 'drag' is called as long as you are dragging the element. So if you start the dragging and don't release the mouse, 
 * logic would keep calling 'drag' event as long as you don't release the mouse
 * 
 * 'dragend' is called as soon as you stop dragging the image
 */
const onDragStart = () => console.log('Drag Start event called');
const onDrag = () => console.log('Dragging event in progress');
const onDragEnd = () => console.log('Drag End event called');

logo.addEventListener('dragstart', onDragStart);
logo.addEventListener('drag', onDrag);
logo.addEventListener('dragend', onDragEnd);


/** ********** NOTE: ALL EVENT NAMES PASSED TO ADD EVENT LISTENER ARE IN LOWER CASE ! */