/* Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo. */

let user_number = parseInt(prompt('Inserisci un numero'));

if (user_number % 2 == 0) {
    console.log(user_number);
} else {
    console.log('il tuo numero è dispari');
    console.log(user_number + 1);
}