"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let original = 2 + 3 * 2 - 4 * 6
let revised = 2 + 3 * (2 - 4) * 6

printOut("Answer to the original expression =" + " " + original);
printOut("Revised expression = " + " " + revised)
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let millimeterToCentimeter = 25.4 / 10; //konverterer millimeter til cm
let metersToCentimeter = 25 * 100; // konverterer meter til cm
let centimeter = metersToCentimeter + 34; // finner total mengde cm
let inchesInCentimeter = millimeterToCentimeter; // bare for syns skyld

let inches = centimeter / inchesInCentimeter; // deler total mengde i cm på inches i cm for å finne resultat


printOut("25 meters and 34cm is " + inches.toFixed(2) + " inches"); // bruker toFixed for å kontrollere antall desimaler
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let daysToHours = 3 * 24; // konverterer dager til timer
let hoursToMinutes = (daysToHours + 12) * 60; // konverterer antall timer til minutter
let secondsToMinutes = 45 / 60; // konverterer sekunder til minutter
let minutes = 14 + hoursToMinutes + secondsToMinutes; // samler alt og finner antall minutter


printOut(" 3 days, 12 hours, 14 minutes, and 45 seconds is " + minutes + " minutes in total");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let totalMinutes = 6322.52;
let minutesInADay = 24 * 60;
let minutesInAnHour = 60;

let days = Math.floor(totalMinutes / minutesInADay);
let remainingMinutesAfterDays = totalMinutes % minutesInADay;

let hours = Math.floor(remainingMinutesAfterDays / minutesInAnHour);
let remainingMinutesAfterHours = remainingMinutesAfterDays % minutesInAnHour;

let minutes1 = Math.floor(remainingMinutesAfterHours);

let seconds = Math.floor((remainingMinutesAfterHours - minutes1) * 60);




printOut(" " + totalMinutes + " minutes are: " + days + " days," + hours + " hours, " + minutes1 + " minutes and " + seconds + " seconds.");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let nokToUsdRate = 8.6 / 76;
let usdToNokRate = 76 / 8.6;

let dollars = 54;
let nokConverted = Math.round(dollars * usdToNokRate);

let nokAmount = nokConverted;
let usdConverted = Math.round(nokAmount * nokToUsdRate);


printOut(dollars + " USD is " + nokConverted + " NOK. ");
printOut(nokAmount + " NOK is " + usdConverted + " USD. ");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let text = "There is much between heaven and earth that we do not understand.";

printOut(text);

printOut(newLine);

printOut("Number of characters in the text: " + text.length);

printOut("Character at position number 19: " + text.charAt(19));

printOut("Characters from position 35 and 8 characters forward: " + text.substr(35, 8));

printOut("The index at which Earth starts: " + text.indexOf("earth"));

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut("Is 5 greater than 3? " + (5 > 3));

printOut("Is 7 greater than or equal to 7? " + (7 >= 7));

printOut("Is A greater than B? " + ("A" > "B"));

printOut("Is 1 less than A? " + ("1" < "A"));

printOut("Is 2500 less than ABCD? " + ("2500" < "ABCD"));

printOut("arne is not equal to thomas. " + ("arne" !== "thomas"));

printOut("2 equals 5. " + (2 === 5));

printOut("ABCD is greater than BCD. " + !("ABCD" > "BCD"));

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let number1 = parseInt("254");
printOut("From text 254 to a number: " + number1);

let number2 = parseFloat("57.23");
printOut("FRom text 57.23 to a number: " + number2);

let number3 = parseInt("25 kroner");
printOut("From text 25 kroner to a number: " + number3);

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let r = Math.floor(Math.random() * 360) + 1;

printOut("Random generated number (r) from 1 to 360: " + r);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let totalDays = 131;
let weeks = Math.floor(totalDays / 7);
let days1 = totalDays % 7;

printOut("In " + totalDays + " days it is " + weeks + " weeks and " + days1 + " days. ");
printOut(newLine);