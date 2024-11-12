"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const accountTypes = {
    Normal: "Brukskonto",
    Saving: "Sparekonto",
    Credit: "Kreditkonto",
    Pension: "Pensjonskonto"
};

printOut(Object.values(accountTypes).join(", "));

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

class TAccount {
    constructor(accountTypes) {
        this.type = accountTypes;
    }
    toString() {
        return this.type;
    }
    setType(newType) {
        printOut(`Changing account type from ${this.type} to ${newType}`);
    }
}

const myAccount = new TAccount("Normal");

printOut(myAccount.toString());
myAccount.setType("Saving");

printOut(" " + myAccount.toString());

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

// Utvider TAccount-klassen
class TAccount1 {
    constructor(accountType) {
        this.type = accountType; // Setter kontotype
        this.balance = 0; // Initialiserer saldoen til 0
    }

    // toString-metode som returnerer kontotypen
    toString() {
        return this.type;
    }

    // setType-metode for å endre kontotype
    setType(newType) {
        printOut(`Changing account type from ${this.type} to ${newType}`);
        this.type = newType;
    }

    // getBalance-metode som returnerer saldoen
    getBalance() {
        return this.balance;
    }

    // deposit-metode for å øke saldoen med et gitt beløp
    deposit(amount) {
        this.balance += amount;
        printOut(`Deposited: ${amount}. New balance: ${this.balance}`);
    }

    // withdraw-metode for å redusere saldoen med et gitt beløp
    withdraw(amount) {
        if (amount > this.balance) {
            printOut("Insufficient funds!");
        } else {
            this.balance -= amount;
            printOut(`Withdrew: ${amount}. New balance: ${this.balance}`);
        }
    }
}

// Oppretter en konstant instans av TAccount-klassen med "Normal" som kontotype
const myAccount1 = new TAccount1("Normal");

// Endrer kontotypen til "Saving"
myAccount1.setType("Saving");

// Setter inn penger og skriver ut ny saldo
myAccount1.deposit(1000); // Skal skrive "Deposited: 1000. New balance: 1000"

// Henter og skriver ut saldoen
printOut(`Current balance: ${myAccount1.getBalance()}`); // Skal skrive "Current balance: 1000"

// Tar ut penger og skriver ut ny saldo
myAccount1.withdraw(500); // Skal skrive "Withdrew: 500. New balance: 500"

// Forsøker å ta ut mer enn saldoen
myAccount1.withdraw(600); // Skal skrive "Insufficient funds!"


printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function adjustString(text, maxSize, char, insertAtEnd) {
    // Sjekker om lengden på tekststrengen er mindre enn maks størrelse
    while (text.length < maxSize) {
        if (insertAtEnd) {
            text += char; // Legger til karakteren på slutten hvis insertAtEnd er true
        } else {
            text = char + text; // Legger til karakteren på begynnelsen hvis insertAtEnd er false
        }
    }
    return text;
}

// Eksempel på bruk av funksjonen
const result1 = adjustString("hello", 10, "*", true); // Legger til '*' på slutten
printOut(result1); // Skal skrive "hello*****"

const result2 = adjustString("world", 12, "-", false); // Legger til '-' i starten
printOut(result2); // Skal skrive "-------world"



printOut(newLine);
