"use strict";

const CarTypes = [
  { value: 1, caption: "Aston Martin" },
  { value: 2, caption: "Bentley" },
  { value: 3, caption: "Alfa Romeo" },
  { value: 4, caption: "Ferrari" },
  { value: 5, caption: "Subaru" },
  { value: 6, caption: "Porsche" },
  { value: 7, caption: "Tesla" },
  { value: 8, caption: "Toyota" },
  { value: 9, caption: "Renault" },
  { value: 10, caption: "Peugeot" },
  { value: 11, caption: "Suzuki" },
  { value: 12, caption: "Mitsubishi" },
  { value: 13, caption: "Nissan" },
];

const GirlsNames = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

const MovieGenre = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film Noir",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Superhero",
  "Thriller",
  "War",
  "Western",
];

//--- Part 1 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
function cmbTask1CalculateClick() {
const height = document.getElementById("txtRectHeight").value;
const width = document.getElementById("txtRectWidth").value;

if (isNaN(height) || isNaN(width)) {
  document.getElementById("txtTask1Output").innerText = "Please enter valid numbers for both height and width.";
  return;
}

const perimeter = 2 * height + 2 * width;
const area = height * width;

document.getElementById("txtTask1Output").innerText =
`Perimeter: ${perimeter} units\nArea: ${area} square units`;

}

document.getElementById("cmbTask1Calculate").addEventListener("click", cmbTask1CalculateClick);

//--- Part 2 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

const task2Words = [];

function txtTask2WordKeyPress(event) {
  if (event.key === "Enter") {
    const inputField = document.getElementById("txtTask2Word");
    const word = inputField.value.trim();

    if (word !== "") {
      task2Words.push(word);

      const outputField = document.getElementById("txtTask2Output");
      outputField.innerText = `Number of words: ${task2Words.length}\nWords: ${task2Words.join(", ")}`;

      inputField.value = "";
    }
  }
}

const txtTask2Word = document.getElementById("txtTask2Word");
txtTask2Word.addEventListener("keypress", txtTask2WordKeyPress);
//--- Part 3 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

function checkSelectedCheckboxes() {
  // Get all checkboxes
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');

  // Collect the values of selected checkboxes
  const selected = [];
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      selected.push(checkbox.value); // Add value of the selected checkbox
    }
  });

  // Display the result
  const output = document.getElementById("txtTask3Output");
  if (selected.length > 0) {
    output.innerText = `You selected: ${selected.join(", ")}`;
  } else {
    output.innerText = "No checkboxes are selected.";
  }
}

// Add click event listener to the button
const checkButton = document.getElementById("cmbTask3CheckAnswer");
checkButton.addEventListener("click", checkSelectedCheckboxes);

//--- Part 4 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

const divTask4Cars = document.getElementById("divTask4Cars");

    // Use a for-loop to add radio buttons to the div
    for (let i = 0; i < CarTypes.length; i++) {
      const carType = CarTypes[i];

      // Create a radio button
      const radioButton = document.createElement("input");
      radioButton.type = "radio";
      radioButton.name = "car"; // Ensure all radios belong to the same group
      radioButton.value = carType.value;
      radioButton.id = `car_${carType.value}`; // Unique ID for each button

      // Create a label for the radio button
      const label = document.createElement("label");
      label.htmlFor = `car_${carType.value}`;
      label.innerText = carType.caption;

      // Add the radio button and label to the div
      divTask4Cars.appendChild(radioButton);
      divTask4Cars.appendChild(label);
      divTask4Cars.appendChild(document.createElement("br")); // Line break for better layout
    }

    // Add an event listener to the div to handle radio button clicks
    divTask4Cars.addEventListener("change", function (event) {
      // Check if the event target is a radio button
      if (event.target.type === "radio") {
        const selectedCar = CarTypes.find(car => car.value == event.target.value);
        const output = document.getElementById("txtTask4Output");
        output.innerText = `You selected: ${selectedCar.caption}`;
      }
    });

//--- Part 5 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

//--- Part 6 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

//--- Part 7 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
