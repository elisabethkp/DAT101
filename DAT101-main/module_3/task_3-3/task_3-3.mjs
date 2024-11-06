"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function printTodaysDate() {
    const today = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
    const options = {
        weekday: 'long',    
        year: 'numeric',    
        month: 'long',      
        day: 'numeric'     
    };

    
    const formattedDate = today.toLocaleDateString('no-NB', options);
    printOut(formattedDate);
}

printTodaysDate();


printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/


function printTodaysDate2() {
    const today = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    
    const formattedDate = today.toLocaleDateString('no-NB', options);
    printOut("Dagens dato: " + formattedDate);
    return today;
}

function calculateDaysUntilRelease(targetDate) {
    const today = new Date();
    const timeDifference = targetDate.getTime() - today.getTime();
    const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    return daysLeft;
}


function displayDateAndCountdown() {
   
    const today = printTodaysDate2();

   
    const releaseDate = new Date('2025-05-14');

    
    const daysUntilRelease = calculateDaysUntilRelease(releaseDate);

    
    printOut(`🎮 Det er ${daysUntilRelease} dager igjen til den episke lanseringen av 2XKO! 🎉`);
}


displayDateAndCountdown();


printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function calculateCircleProperties(radius) {
    const diameter = 2 * radius;
    const circumference = 2 * Math.PI * radius;
    const area = Math.PI * Math.pow(radius, 2);

    printOut(`For en sirkel med radius ${radius}:`);
    printOut(`Diameter: ${diameter}`);
    printOut(`Omkrets: ${circumference.toFixed(2)}`);
    printOut(`Areal: ${area.toFixed(2)}`);
}


calculateCircleProperties(5);


printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function calculateRectangleProperties(rectangle) {
    const { width, height } = rectangle;
    const circumference = 2 * (width + height);
    const area = width * height;

    printOut(`For et rektangel med bredde ${width} og høyde ${height}:`);
    printOut(`Omkrets: ${circumference}`);
    printOut(`Areal: ${area}`);
}


const rectangle = { width: 5, height: 10 };
calculateRectangleProperties(rectangle);


printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function convertTemperature(temperature, scale) {
    let celsius, fahrenheit, kelvin;

    if (scale === "C") {
        celsius = temperature;
        fahrenheit = Math.round(celsius * 9 / 5 + 32);
        kelvin = Math.round(celsius + 273.15);
    } else if (scale === "F") {
        fahrenheit = temperature;
        celsius = Math.round((fahrenheit - 32) * 5 / 9);
        kelvin = Math.round((fahrenheit - 32) * 5 / 9 + 273.15);
    } else if (scale === "K") {
        kelvin = temperature;
        celsius = Math.round(kelvin - 273.15);
        fahrenheit = Math.round((kelvin - 273.15) * 9 / 5 + 32);
    } else {
        printOut("Ugyldig temperaturskala. Bruk 'C', 'F' eller 'K'.");
        return;
    }

    printOut(`Temperatur i ${scale}: ${temperature}`);
    printOut(`Celsius: ${celsius}`);
    printOut(`Fahrenheit: ${fahrenheit}`);
    printOut(`Kelvin: ${kelvin}`);
}


convertTemperature(25, "C"); 
printOut(newLine);
convertTemperature(77, "F");  
printOut(newLine);
convertTemperature(300, "K"); 
printOut(newLine);


printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function calculateNetPrice(grossAmount, vatGroup) {
    let vatRate;


    switch (vatGroup.toLowerCase()) {
        case "normal":
            vatRate = 25;
            break;
        case "food":
            vatRate = 15;
            break;
        case "hotel":
        case "transport":
        case "cinema":
            vatRate = 10;
            break;
        default:
            return "Unkown tax group!";
    }

    
    const netPrice = (100 * grossAmount) / (vatRate + 100);
    return netPrice;
}


printOut(`1250 is : ${calculateNetPrice(1250, "normal")}` + " without taxes");
printOut(`1150 is : ${calculateNetPrice(1150, "food")}` + " without taxes");
printOut(`1100 is : ${calculateNetPrice(1100, "hotel")}` + " without taxes");
printOut(`Textile is : ${calculateNetPrice(1200, "textile")}`);


printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function calculate(speed, time, distance) {
   
    const missingParams = [speed, time, distance].filter(param => param === undefined).length;

    if (missingParams > 1) {
        return NaN;
    }

    
    if (speed === undefined) {
        return distance / time;  
    } else if (time === undefined) {
        return distance / speed;  
    } else if (distance === undefined) {
        return speed * time;  
    }

        null;
}

printOut(" " + calculate(undefined, 2, 100));  
printOut(" " + calculate(50, undefined, 100));  
printOut(" " + calculate(50, 2, undefined));    
printOut(" " + calculate(undefined, undefined, 100));  

printOut(" Skjønner ikke helt denne oppgaven :) ")


printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function extendText(text, maxSize, char, insertConsecutively) {
    
    if (text.length >= maxSize) {
        return text;
    }

    
    const charsToAdd = maxSize - text.length;
    const padding = char.repeat(charsToAdd);

    
    if (insertConsecutively) {
        return text + padding;  
    } else {
        return padding + text;  
    }
}


printOut(extendText("Hello", 10, "*", true));   
printOut(extendText("Hello", 10, "*", false));  
printOut(extendText("HelloWorld", 5, "*", true));  


printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function testMathExpression(lines) {
    let startNumber = 1;

    for (let line = 1; line <= lines; line++) {
       
        const leftCount = line + 1;
        const rightCount = line;

        
        let leftSum = 0;
        for (let i = 0; i < leftCount; i++) {
            leftSum += startNumber + i;
        }

      
        let rightSum = 0;
        for (let i = 0; i < rightCount; i++) {
            rightSum += startNumber + leftCount + i;
        }

      
        if (leftSum !== rightSum) {
            printOut(`Feil på linje ${line}: Venstre sum = ${leftSum}, Høyre sum = ${rightSum}`);
            return; 
        }

        
        startNumber += leftCount + rightCount;
    }

   
    printOut("Maths fun!");
}


testMathExpression(200);


printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function factorial(n) {
  
    if (n <= 1) {
        return 1;
    }


    return n * factorial(n - 1);
}


let number = 5;
printOut(`Fakultet av ${number} er: ${factorial(number)}`);  


printOut(newLine);
