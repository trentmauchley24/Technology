/* Lesson 2 */

/* VARIABLES */

 // Step 1: declare and instantiate a variable to hold your name
let myName = "Trent Mauchley";

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector("#name").textContent =myName;

// Step 3: declare and instantiate a variable to hold the current year
let thisYear = 2023;

// Step 4: place the value of the current year variable into the HTML file

document.querySelector('#year').textContent = thisYear;
// Step 5: declare and instantiate a variable to hold the name of your picture
let thisPhoto = document.querySelector("#thisPhoto");

// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
thisPhoto.setAttribute("src", "images/me_and_my_wife.jpg")



/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
var myFoods =["Peaches", " Steak ", " Pie"];

// Step 2: place the values of the favorite foods variable into the HTML file
var food = document.querySelector("#food");
food.textContent = myFoods;

// Step 3: declare and instantiate a variable to hold another favorite food
var newFood = " Mango"

// Step 4: add the variable holding another favorite food to the favorite food array
myFoods.push(newFood);

// Step 5: repeat Step 2
food.textContent = myFoods;

// Step 6: remove the first element in the favorite foods array
let firstItem = myFoods.shift();

// Step 7: repeat Step 2
food.textContent = myFoods;

// Step 8: remove the last element in the favorite foods array
let lastItem = myFoods.pop();

// Step 7: repeat Step 2

food.textContent = myFoods;

