"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Task 1, 2 and 3");
let wakeUpTime = 9;
if (wakeUpTime == 7) {
  printOut("If I wake up at exactly " + wakeUpTime + " o clock then I can catch the bus to school.");
} else if (wakeUpTime == 8){
  printOut("If I wake up at exactly " + wakeUpTime + " o clock, I can take the train to school. ");
} else {
  printOut (" I have to take the car to school. ");
}
printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let number = 5;

if (number > 0) {
  printOut(" Positive ");
} else if (number < 0) {
  printOut(" Negative ");
} else {
  printOut("The number is zero ");
}

printOut(newLine);

printOut("--- Part 6 and 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let image = Math.floor(Math.random() * 8) + 1;
if (image >=6 ) {
  printOut("The image is too large.")
} else if (image < 4) {
  printOut( "The image is too small.")
} else {
  printOut("Thank you. ")
}


printOut(" " + image);
printOut(newLine);

printOut("--- Part 8 and 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const monthList =["January", "February", "March", "April", "May",
  "June", "July", "August", "September", "October", "November", "December"];
  const noOfMonth = monthList.length;
  const monthName = monthList[Math.floor(Math.random() * noOfMonth)];
  if (monthName.includes("r")){
    printOut("You must take vitamin D. ")
  } else {
    printOut("You do not need to take vitamin-D. ")
  }
 printOut(newLine);


  if (monthName == "January" || monthName ==  "March" || monthName ==  "May" || monthName ==  "July" || monthName ==  "August" || monthName ==  "October" || monthName ==  "December") {
    printOut("31 days")
  } else if (monthName == "February") {
    printOut("28 days")
  } else {
    printOut("30 days")
  }
  
  printOut(" " + monthName);

printOut(newLine);


/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/*
const monthList =["January", "February", "March", "April", "May",
  "June", "July", "August", "September", "October", "November", "December"];
  const noOfMonth = monthList.length;
  const monthName = monthList[Math.floor(Math.random() * noOfMonth)]; */

  if (monthName == "March" || monthName == "May" ) {
printOut(" Closed gallery. ")
  } else if (monthName == "April") {
    printOut(" Closed, but we have temporary premises in the building next door. ")
  } else {
    printOut(" Open :) ")
  }


printOut(newLine);
