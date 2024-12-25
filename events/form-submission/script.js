/**
 * In this tutorial, we are working on actual form submission.
 * 
 * The 'submit' event of a form basically fetches and sends data to downstream systems like
 * Our backend Microservice or Node.
 */

// Fetch form element
const form = document.getElementById('item-form');

function onSubmit(e) {

    /**If we keep just the console log line (line 21), then you'll see the 'Submitted' text logged for 
     * a fraction of second and it will disappear. This is because form is getting submitted 
     * to same page and page is reloaded again.
     * 
     * In order to avoid the submission and reloading, we are calling preventDefault() method
     */ 
    
    e.preventDefault();
    console.log('Submitted');   // Will be logged when you click on 'Add item' button

    // We ideally should do some form validation / check input parameters are filled in
    // ****** We fetch object values 'id' if we use '.getElementById'
    const text = document.getElementById('item-input').value;       // Calling .value to get just text value
    const dropdown = document.getElementById('priority-input').value;   // Calling .value to get just text value

    if (text === '' || dropdown === '0') {
        alert ('Please fill in all fields');
        return;             // Code will exit after this
    }

    console.log(text, dropdown);    // Will print the text entered by used and value (0,1,2) of dropdown


    /**
     * ********* There is other way to fetch values from form which is using FormData
     */
    console.log('Form Data tutorial');
    // We create an object of FormData using new FormData(form object);
    const formData = new FormData(form);

    /******** To fetch objects using form data, you can use .get() function.
     * For .get() function you have to use the 'name' property to fetch values.
     * You cannot fetch using 'id' property. Hence, you'll see difference in key passed
     * below and line number 25, 26
     */
    const formText = formData.get('item');          // get() method using name (item) as key and not id (item-input)
    const formDropdown = formData.get('priority')   // get() method using name (priority) as key and not id (priority-input)

    console.log(formText, formDropdown);    // Will print the text entered by used and value (0,1,2) of dropdown

    /******* We can also fetch values using 'entries' function.
     * This 'entries' function returns an Iterator object which is a list of objects
     * We can iterate over it using for...of loop.
     */
    const entries = formData.entries();
    console.log(entries);           // Iterator containing name / value pairs

    for (let entry of entries) {
        console.log(entry);
        /** If I enter text - 'Something' in text box and select 'Murr' from dropdown, then logger would be
         * ['item', 'Something']        --> In first iteration
         * ['priority','3']             --> In second iteration
         * 
         * As you can see it is an array of arrays. So if you want to fetch just the second object (value) from it i.e.
         * 'Something' and '3' you can use
         */
        
        console.log(entry[1]);      // 'Something' on first iteration and '3' on second
        console.log(entry[0]);      // 'item' on first iteration and 'priority' on second
    }
}

form.addEventListener('submit', onSubmit);