// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken.
// Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om hetgeen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.

const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

/* Opdracht  1: Cum Laude */

/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie?
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6

/*
* declareer een local variabelen voor het aantal cum laude grades
* itereer door de grades heen
* maak een if statement met als voorwaarde dat het cijfer hoger of gelijk aan 8 moet zijn.
* als de voorwaarde waar is moet er 1 bij het aan cum laude grade worden opgeteld.
* return het aantal cum laude grade
* */

let numberOfCumLaudeGrades = 0;

for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 8) numberOfCumLaudeGrades += 1;
}

console.log(numberOfCumLaudeGrades);


/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3

function checkTheNumberOfCumLaudeGrades (grades) {
    let numberOfCumLaudeGrades = 0;

    for (let i = 0; i < grades.length; i++) {
        if (grades[i] >= 8) numberOfCumLaudeGrades += 1;
    }
    return numberOfCumLaudeGrades;
}

let outcome = checkTheNumberOfCumLaudeGrades(grades);
console.log(outcome);

let anOtherListWithGrades = [6, 4, 5];
outcome = checkTheNumberOfCumLaudeGrades(anOtherListWithGrades);
console.log(outcome);

anOtherListWithGrades = [8, 9, 4, 6, 10];
outcome = checkTheNumberOfCumLaudeGrades(anOtherListWithGrades);
console.log(outcome);


/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend?
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?
// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6.642857142857143

/*
maak een variable aan voor het totale cijfer
itereer door de gardes en tel elke grade op bij het totale cijfer
deel het totaal door het aantal grades
 */

let tempNumberOfGrades = 0;

for (let i = 0; i < grades.length; i++) {
    tempNumberOfGrades += grades[i];
}

outcome = tempNumberOfGrades / grades.length;
console.log(outcome);


/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft 5
// averageGrade([8, 9, 4, 6, 10]) geeft 7.4

function averageGrade (grades) {
    let tempNumberOfGrades = 0;

    for (let i = 0; i < grades.length; i++) {
        tempNumberOfGrades += grades[i];
    }

    return tempNumberOfGrades / grades.length;
}

outcome = averageGrade(grades);
console.log(outcome);

anOtherListWithGrades = [6, 4, 5];
outcome = averageGrade(anOtherListWithGrades);
console.log(outcome);

anOtherListWithGrades = [8, 9, 4, 6, 10];
outcome = averageGrade(anOtherListWithGrades);
console.log(outcome);



/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!

function gradeInTwoDecimals (grades) {
    return Math.round(grades);
}

outcome = gradeInTwoDecimals(averageGrade(grades));
console.log(outcome);

anOtherListWithGrades = [6, 4, 5];
outcome = gradeInTwoDecimals(averageGrade(anOtherListWithGrades));
console.log(outcome);

anOtherListWithGrades = [8, 9, 4, 6, 10];
outcome = gradeInTwoDecimals(averageGrade(anOtherListWithGrades));
console.log(outcome);


/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?
// * Op welke conditie moet ik checken?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 9

/*
Declareer een variabele highestGrade en zet hem op 0
Itereer door de array vergelijk in elke iteratie of het getal hoger is dan de waarde van highestGrade.
Zo ja, vervang de waarde van highestGrade met de waarde van de index van de array.

 */

let highestGradeWithoutAFunction = 0;

for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= highestGradeWithoutAFunction) highestGradeWithoutAFunction = grades[i];
}

console.log(highestGradeWithoutAFunction);

/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10

function highestGrade (grades) {
    let highestGrade = 0;

    for (let i = 0; i < grades.length; i++) {
        if (grades[i] >= highestGrade) highestGrade = grades[i];
    }

    return highestGrade;
}

outcome = highestGrade(grades);
console.log(outcome);

anOtherListWithGrades = [6, 4, 5];
outcome = highestGrade(anOtherListWithGrades);
console.log(outcome);

anOtherListWithGrades = [8, 9, 4, 6, 10];
outcome = highestGrade(anOtherListWithGrades);
console.log(outcome);