/**
 * ************* There are multiple ways in which we can replace an element. We will go through them in this
 * Approach # 1 is to create element and use '.replaceWith()' method on element you want to replace
 */
// Approach # 1
function replaceFirstElement() {
    // Get existing entry
    const existingElement = document.querySelector('li:first-child');   // Or we can just use 'li' as it will return first entry

    // Create new element to replace existing entry
    const newElement = document.createElement('li');
    newElement.textContent = 'Replaced first element!';

    // Call replace with on existing entry
    existingElement.replaceWith(newElement);        
    // Apple (first entry) will be replaced with 'Replaced first element!'
}

replaceFirstElement();


/**
 * APPROACH # 2 is to use .outerHtml or .innerHtml
 */
function replaceSecondElement() {

    // Get existing second entry
    let existingElement = document.querySelector('li:nth-child(2)');

    // Replace existing element using .outerHtml which will replace outer element of element as well which 
    // in this case is 'li'. 
    // So if you use '.outerHtml' then you need to use <li></li> tags as well in description
    existingElement.outerHTML = '<li>Replaced second with outerHtml!!!</li>';

    /**
     * ************ Had to call query selector again because if I call .innerHtml immediately after .outerHtml,
     * then the changes of innerHtml weren't getting reflected. So I had to fetch the value again and update it!
     * 
     * ****** But, if you call .outerHtml after replacing .innerHtml, then it works fine and the data uploaded by
     * .outerHtml will be reflected ! ... Go figure!
     */
    existingElement = document.querySelector('li:nth-child(2)');
    // If you use .innerHTML instead, then it will just replace the content in your list and not the li tags
    // In this case, no need to use <li></li>
    existingElement.innerHTML = 'Replaced second with innerHtml';

}

replaceSecondElement();





/** **************** REPLACING ALL */
function replaceAll() {

    // ********* Calling .querySelectorAll because we want entire list
    const list = document.querySelectorAll('li');   // This will return a NodeList.

    list.forEach((entry, index) => 
                    index === 1 
                    ? entry.innerHTML = 'Replaced Second using loop' 
                    : entry.innerHTML = 'Replaced all using loop' );
    
    // OR use index check just while text selection i.e.
    list.forEach((item, index) => 
                    item.innerHTML = index === 1 ? 'Replaced Second using loop' : 'Replaced all using loop');

    
    // Both codes will replace just the second entry in list as 'Replaced Second using loop' 
    // while others will be replaced with 'Replaced all using loop'

}

replaceAll();


/**
 * ************ Replace Child
 * In this method, we basically update the child element by using .replaceChild method on parent element.
 * 
 * In our HTML file, we have below header element which is parent containing <h1></h1> child element
 * 
 * <header>
            <img src="images/note.png" alt="" />
            <h1>Shopping List</h1>
    </header>

 * we will replace the <h1>Shopping List</h1> with an h2 element using .replaceChild
 */

function replaceChild() {

    // Fetching parent <header> element
    const parent = document.querySelector('header');

    // Fetching first child element.
    const existingChild = document.querySelector('header h1'); 

    // Create element to replace existing element with
    const newElement = document.createElement('h2');
    newElement.textContent = 'Replaced Header!';

    // Call the method to replace element. 
    // First parameter is new element and second parameter is existing element.
    parent.replaceChild(newElement, existingChild);

}

replaceChild();