/* SNACK 1 
Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while.
 */

/* Con for */
let sum = 0;
let user_number;

for (let index = 0; index < 5; index++) {
    user_number = parseInt(prompt(`Inserisci il numero ${index}`));
    sum = sum + user_number
}

console.log(sum);


/* Con while */

let somma = 0;
let userNumber;

let i = 0

while (i < 5) {
    userNumber = parseInt(prompt(`Inserisci il numero ${i}`));
    somma = somma + userNumber

    i++
}

console.log(somma);