/**
 * ****************** In this, we are going to cover how to fetch all objects.
 * 
 * .querySelectorAll()          --> Returns a NODE LIST
 * 
 * *** NOTE: **** On initial load of page, there are 4 entries in the list-
 * Apples, Orange Juice, Oreos, Milk and a Red Cross Mark against each entry.
 */

const listItems = document.querySelectorAll('.item');  // Or we can use 'li' but we prefer using className hence .className.

console.log(listItems);     // A NODELIST will be printed containing 4 items in the list.
// We can perform all higher level operations on a NODE list like .forEach(). We cannot perform them on HTML list.
console.log(listItems[0].textContent);  // Apples

/**  We cannot alter all objects of list item using:
 *              listItems.style.color = 'red'
 * because listItems is a NODE LIST. So we need to change things using index
*/
listItems[1].style.color = 'red';       // This changes color of 'Orange Juice' to Red as it is index 1

// If we want to change values of all, then we have to use forEach
listItems.forEach((item, index) => {            // index is non-mandatory but we have it here to perform some more actions

    item.style.color = 'blue';

    if (index === 1) {
        item.remove();          // This will remove entry of 'Orange Juice' from List. Only 3 items will be left!
    }

    
    // Changing content of 0th index from 'Apples' to 'Strawberries'
    if (index === 0) {

        // ************** If we do this:
        item.innerText = 'Strawberries';  
        // Then it will just replace the text but the red 'x' marked against it won't be there
        // because we are fetching entire class.

        // So it is better we:
        item.innerHTML = `Strawberries
                <button class="remove-item btn-link text-red">
                    <i class="fa-solid fa-xmark"></i>
                </button>`;
        // This will replace the text as well as keep the rex cross mark.
        // ***** Note: 'innerHTML' is used because we are updating complete HTML content

    }
})


/**
 * ************* This is another way of fetching data using className
 * .getElementsByClassName()    --> Returns HTMLCollection List item and not Node List
 * So we cannot perform high level operations like .forEach() in it
 */
const htmlListItem = document.getElementsByClassName('item');       // No need of '.' since method itself says it is for class
console.log(htmlListItem);          // Will print a HTMLCollection list item containing 3 items
console.log(htmlListItem[0].innerText);     // Strawberries

/**  We cannot directly perform:
 *          htmlListItem.forEach()  --> It will throw exception.
 * So we need to convert it to an array first
*/
const listArray = Array.from(htmlListItem);         // Converted to proper Array

listArray.forEach((item) => {
    console.log(item.innerText);           // Strawberries, Oreos, Milk
})


/**
 * ************* This is another way of fetching data using TAG Name (h1, p, li, etc are tags)
 * .getElementsByTagName()    --> Returns HTMLCollection List item and not Node List
 * So we cannot perform high level operations like .forEach() in it
 */
console.log('getElementsByTagName');

const tagsList = document.getElementsByTagName('li');
console.log(tagsList);    // Will print a HTMLCollection list item containing 3 items
console.log(tagsList[0].innerText);     // Strawberries


const headerList = document.getElementsByTagName('h1');
console.log(headerList[0].innerText);    // Shopping List which is the header