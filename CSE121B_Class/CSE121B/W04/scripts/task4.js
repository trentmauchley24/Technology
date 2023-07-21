/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
let myself = {
  // Step 2: Inside of the object, add a property named name with a value of your name as a string
  name: "Trent Mauchley",
  // Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
  photo: "images/me_and_my_wife.jpg",
  // Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings
  favoriteFoods: ["Pizza", "Mangoes", "Doughnuts", "French Fries"],
  // Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
  hobbies: ["Throwing javelin", "Gaming", "Spending time with my wife"],
  // Step 6: Add another property named placesLived with a value of an empty array
  placesLived: [
    {
      California: [
        {
          place: ["Modesto", "Rocklin"],
          length: ["2yrs", "6yrs"],
        },
      ],
      Utah: [
        {
          place: ["Tooele", "Herriman"],
          length: ["10yrs", "5yrs"],
        },
      ],
      Nebraska: [
        {
          place: ["Lincoln", "Fremont", "Columbus"],
          length: ["6mnths", "6mnths", "3mnths"],
        },
      ],
      Iowa: [
        {
          place: ["Storm Lake"],
          length: ["6mnths"],
        },
      ],
    },
  ],
};


    /* OUTPUT */

    // Step 1: Assign the value of the name property to the HTML <span> element with an ID of name
    document.querySelector("#name").textContent = myself.name;

    // Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
    document.querySelector("#photo").src = myself.photo;

    // Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
    document.querySelector("#photo").alt = myself.name;

    // Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
    const favoriteFoodsList = document.querySelector("#favorite-foods");
    myself.favoriteFoods.forEach(food => {
      const li = document.createElement("li");
      li.textContent = food;
      favoriteFoodsList.appendChild(li);
    });

    // Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods

    // Step 6: Repeat Step 4 for each hobby in the hobbies property
    const hobbiesList = document.querySelector("#hobbies");
    myself.hobbies.forEach(hobby => {
      const li = document.createElement("li");
      li.textContent = hobby;
      hobbiesList.appendChild(li);
    });

    // Step 7: Append the <li> elements created above as children of the HTML <ul> element with an ID of hobbies

    // Step 8: For each object in the placesLived property:
    // - Create an HTML <dt> element and put its place property in the <dt> element
    // - Create an HTML <dd> element and put its length property in the <dd> element
    const placesLivedList = document.querySelector("#places-lived");

    myself.placesLived.forEach(location => {
      for (const [state, cities] of Object.entries(location)) {
        cities.forEach(city => {
          const dt = document.createElement("dt");
          dt.textContent = state;
          placesLivedList.appendChild(dt);

          city.place.forEach((place, index) => {
            const dd = document.createElement("dd");
            dd.textContent = `${place} (${city.length[index]})`;
            placesLivedList.appendChild(dd);
          });
        });
      }
    });

    // Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
