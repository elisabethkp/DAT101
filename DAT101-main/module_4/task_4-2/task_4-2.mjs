"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
for (let i = 0; i < numbers.length; i++) {
    printOut(" " + numbers[i]);
}

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const result = numbers.join(" - ");
printOut(" " + result);

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const text = "Hei på deg, hvordan har du det?";
const words = text.split(" ");
for (let i = 0; i < words.length; i++) {
    printOut(`Word number: ${i + 1}, Index: ${i}, Word: "${words[i]}"`);
}

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const names = [
    "Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", 
    "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", 
    "Ida", "Nina", "Maria", "Elisabeth", "Kristin"
];

function removeElement(array, element) {
    const index = array.indexOf(element);
    if (index !== -1) {
        array.splice(index, 1);
        printOut(`"${element}" has been removed from the array. `);
    } else {
        printOut(`"${element}" does not exist in the array.`);
    }
}

removeElement(names, "Kari");
removeElement(names, "Ola");

printOut(" " + names);


printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const boyNames = [
    "Jakob", "Lucas", "Emil", "Oskar", "Oliver", "William", "Filip", "Noah",
    "Elias", "Isak", "Henrik", "Aksel", "Kasper", "Mathias", "Jonas", "Tobias",
    "Liam", "Håkon", "Theodor", "Magnus"
];

const allNames = names.concat(boyNames);

printOut(" " + allNames);

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

class TBook {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
    toString() {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}`;
    }
}

const books = [
    new TBook("1984", "George Orwell", "978-0451524935"),
    new TBook("To Kill a Mockingbird", "Harper Lee", "978-0060935467"),
    new TBook("The Great Gatsby", "F. Scott Fitzgerald", "978-0743273565")
];

for (const book of books) {
    printOut(" " + book.toString());
}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const EWeekDays = {
    WeekDay1: {vaule: 0x01, name: "Mandag"},
    WeekDay2: {value: 0x02, name: "Tirsdag"},
    WeekDay3: {value: 0x04, name: "Onsdag"},
    WeekDay4: {value: 0x08, name: "Torsdag"},
    WeekDay5: {value: 0x10, name: "Fredag"},
    WeekDay6: {value: 0x20, name: "Lørdag"},
    WeekDay7: {value: 0x40, name: "Søndag"},
    Workdays: {value: 0x01 + 0x02 + 0x04 + 0x08 + 0x10, name: "Arbeidsdager"},
    Weekends: {value: 0x20 + 0x40, name: "Helg"},
};

const keys = Object.keys(EWeekDays);
for (const key of keys) {
    const element = EWeekDays[key];
    printOut(`Key: ${key}, Value: ${element.value}, Name: ${element.name}`);
}

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const randomNumbers = Array.from({ length: 35 }, () => Math.floor(Math.random() * 20) + 1);

printOut("Original array: " + randomNumbers);

const ascending = [...randomNumbers].sort((a, b) => b - a);

printOut("Ascending order: " + ascending);

const descending = [...randomNumbers].sort((a, b) => b - a);

printOut("Descending order: " + descending);


printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const freqiencyMap = {};
randomNumbers.forEach((num) => {
    freqiencyMap[num] = (freqiencyMap[num] || 0) + 1;
});

const sortedByFrequency = Object.entries(freqiencyMap)
.sort(([numA, freqA], [numB, freqB]) => freqB - freqA || numA - numB);

printOut("Numbers and their frequencies: ");
sortedByFrequency.forEach(([num, freq]) => {
    printOut(`Number: ${num}, Frequency: ${freq}`);
});

const frequencyGroups = {};
sortedByFrequency.forEach(([num, freq]) => {
    if (!frequencyGroups[freq]) {
        frequencyGroups[freq] = [];
    }
    frequencyGroups[freq].push(Number(num));
});

printOut("\nFrequencies and corresponding numbers: ");
Object.entries(frequencyGroups)
.sort(([freqA], [freqB]) => freqB - freqA)
.forEach(([freq, nums]) => {
    printOut(`Frequency: ${freq}, Numbers: ${nums.sort((a, b) => a - b).join(", ")}`);
});


printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const grid = [];

for (let row = 0; row < 5; row++) {
    const currentRow = [];
    for (let col = 0; col < 9; col++) {
        currentRow.push(`Row: ${row}, Col: ${col}`);
    }
    grid.push(currentRow);
}

printOut("Grid content: ");
for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
        printOut(grid[row] [col] );
    }
}

printOut("Replace this with you answer!");
printOut(newLine);
