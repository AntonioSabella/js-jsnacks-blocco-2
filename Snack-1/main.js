/* SNACK 1 
Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while.
 */

/* Con for */
let sum = 0;
let user_number;

let index = 0

while (index < 5) {
    user_number = parseInt(prompt("Inserisci un numero"));
    sum = sum + user_number

    index++
}

console.log(sum);


/* Con while */

let somma = 0;
let userNumber;

let i = 0

while (i < 5) {
    userNumber = parseInt(prompt("Inserisci un numero"));
    somma = somma + userNumber

    i++
}

console.log(somma);