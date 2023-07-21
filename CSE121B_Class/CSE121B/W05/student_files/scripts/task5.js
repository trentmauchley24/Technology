// Step 1: Declare and initialize a new variable to hold the current date
const currentDate = new Date();

// Step 2: Declare another variable to hold the day of the week
let dayOfWeek = "";

// Step 3: Using the variable declared in Step 1, assign the value of the variable declared in Step 2 to the day of the week (hint: getDay())
dayOfWeek = currentDate.getDay();

// Step 4: Declare a variable to hold a message that will be displayed
let message = ""; 

// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'
if (dayOfWeek >= 1 && dayOfWeek <= 5) {
    message = "Hang In There!";
} else {
    // Step 6: Using an else statement, set the message variable to 'Woohoo! It is the weekend!'
    message = "Woohoo! It's the weekend.";
}

/* SWITCH, CASE, BREAK */

// Step 1: Declare a new variable to hold another message
let message2 = "";

// Step 2: Use switch, case, and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared in Step 2 above
let dayName;
switch (dayOfWeek) {
    case 0:
        message2 = "Sunday";
        break;
    case 1:
        message2 = "Monday";
        break;
    case 2:
        message2 = "Tuesday";
        break;
    case 3:
        message2 = "Wednesday";
        break;
    case 4:
        message2 = "Thursday";
        break;
    case 5:
        message2 = "Friday";
        break;
    case 6:
        message2 = "Saturday";
        break;
}

/* OUTPUT */

// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1
let htmlmessage = document.querySelector("#message2");
htmlmessage.textContent = message;

// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2
let htmlmessage2 = document.querySelector("#message1");
htmlmessage2.textContent = message2;

/* FETCH */
// Step 1: Declare a global empty array variable to store a list of temples
let temples = [];

// Step 2: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:
function output(templeList) {
    // Step 3: Create an HTML <article> element
    // Step 4: Create an HTML <h3> element and add the temple's templeName property to it
    // Step 5: Create an HTML <h4> element and add the temple's location property to it
    // Step 6: Create an HTML <h4> element and add the temple's dedicated property to it
    // Step 7: Create an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
    // Step 8: Append the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
    // Step 9: Append the <article> element to the HTML element with an ID of temples

    const templesContainer = document.querySelector("#temples");
    templesContainer.innerHTML = ""; // Clear previous content

    templeList.forEach((temple) => {
        const article = document.createElement("article");
        const h3 = document.createElement("h3");
        h3.textContent = temple.templeName;

        const h4Location = document.createElement("h4");
        h4Location.textContent = temple.location;

        const h4Dedicated = document.createElement("h4");
        h4Dedicated.textContent = temple.dedicated;

        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = temple.templeName;

        article.appendChild(h3);
        article.appendChild(h4Location);
        article.appendChild(h4Dedicated);
        article.appendChild(img);

        templesContainer.appendChild(article);
    });
}

// Step 3: Create another function called getTemples. Make it an async function.
async function getTemples() {
    try {
        // Step 4: In the function, using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'. Create a variable to hold the response from your fetch. You should have the program wait on this line until it finishes.
        const response = await fetch('https://byui-cse.github.io/cse121b-course/week05/temples.json');

        // Step 5: Convert your fetch response into a JavaScript object (hint: .json()). Store this in the templeList variable you declared earlier (Step 1). Make sure the execution of the code waits here as well until it finishes.
        const templeList = await response.json();
        temples = templeList;

        // Step 6: Finally, call the output function and pass it the list of temples. Execute your getTemples function to make sure it works correctly.
        output(temples);
    } catch (error) {
        console.error("Error fetching temples data:", error);
    }
}

getTemples();

// Step 7: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples
function reset() {
    const templesContainer = document.querySelector("#temples");
    templesContainer.innerHTML = "";
}

// Step 8: Declare a function named sortBy that does the following:
function sortBy() {
    // Step 1: Calls the reset function
    reset();

    // Step 2: Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
    const sortBySelect = document.querySelector("#sortBy");
    const selectedValue = sortBySelect.value;
    switch (selectedValue) {
        case "templeNameAscending":
            temples.sort((a, b) => a.templeName.localeCompare(b.templeName));
            break;
        case "templeNameDescending":
            temples.sort((a, b) => b.templeName.localeCompare(a.templeName));
            break;
        default:
            // Default sorting method (no change to the order)
            break;
    }

    // Step 3: Calls the output function passing in the sorted list of temples
    output(temples);
}

// Step 9: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function
const sortBySelect = document.querySelector("#sortBy");
sortBySelect.addEventListener("change", sortBy);