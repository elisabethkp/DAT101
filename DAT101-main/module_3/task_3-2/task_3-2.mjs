"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let countUp = "";
let countDown = "";

for (let i = 1; i <= 10; i++ ) {
    countUp += i + " ";
} 
printOut(countUp);

for (let i = 10; i >= 1; i--) {
    countDown += i + " ";
}
printOut(countDown);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let k = 0;

while(k != 45) {
    k = Math.floor((Math.random() * 45) + 1);
}

printOut("" + k);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let randomnr = 0;
let attempts = 0;

let startTime = Date.now();

while(randomnr != 160823) {
    randomnr = Math.floor((Math.random() * 1000000) + 1 );
    attempts++ ;
}
let endTime = Date.now();
let timeTaken = endTime -startTime;

printOut(" " + randomnr);
printOut(" Antall forsøk: " + attempts);
printOut("Tid brukt (millisekunder):" + timeTaken);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let primeNumbers = []; 

for (let i = 2; i < 200; i++) {
    let isPrime = true;
    let j = 2;

    while (j <= i / 2) {
        if (i % j === 0) {
            isPrime = false;
            break;  
        }
        j++;
    }

    if (isPrime) {
        primeNumbers.push(i);
    }
}
printOut(" Primtall: " + primeNumbers);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function text2(rowText) {
    printOut(rowText);
}

for (let r = 1; r <= 7; r++) {
    let rowText = ""; 

    for (let k = 1; k <= 9; k++) {
        rowText += `K${k}R${r} `;
    }

    printOut(" " + rowText.trim()); 
}

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let students = 0;
let g = 0;

function getGrade(score) {
    let percentage = (score / 236) * 100;

    if (percentage >= 89) return 'A';
    if (percentage >= 77) return 'B';
    if (percentage >= 65) return 'C';
    if (percentage >= 53) return 'D';
    if (percentage >= 41) return 'E';
    return 'F';
}

for(g = 1; g < 6; g++){
   students = Math.floor((Math.random()* 236) +1);

  let grade = getGrade(students)

    printOut(" Karakter " + grade ); 
}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);
