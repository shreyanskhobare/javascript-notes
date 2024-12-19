/**
 * ************ In this we will learn how to create and append elements
 * 
 * To create an element, we use '.createElement('type')' method. We pass the type of element we want to create in parenthesis.
 */
const div = document.createElement('div');
console.log(div);       // <div></div>   --> Simple div object would be created with no body
div.className = 'my-div-class';   // Setting className to div
div.id = 'my-div-id';   // Setting id to div
div.setAttribute('title', 'My Div Title');   // Setting title attribute.

/**  We can use below to create InnerText... But it recommended that we don't. 
 *  Because it has to be used to update existing value and not set new. It will work but it is not recommended

            div.innerText = 'Div Inner Text';
            console.log(div);   

 *  Printed-->  <div class="my-div-class" id="my-div-id" title="My Div Title">Div Inner Text</div>
*/

// *********** Instead we should create a text node and append it to div.
const text = document.createTextNode('Div Text Node');        // Text node created
div.appendChild(text);    // ***** appendChild() will add this as the text node inside the div

console.log(div);    // <div class="my-div-class" id="my-div-id" title="My Div Title">Div Text Node</div>

// ****** appendChild is important and used a lot as it is used to append a child element to a parent element.
// In above example, it puts textNode inside the div    
// We can append it anywhere.

document.body.appendChild(div);         // This will insert the div object at the very bottom / end of body.

document.querySelector('ul').appendChild(div);      
// Above will insert the div object at the end of our List containing other objects. This is appended as a node

