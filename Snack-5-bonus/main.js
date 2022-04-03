/* Crea due array che hanno un numero di elementi diversi.
 Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro. */

//Creo i due array
 let first_array = ['volpe','lupo','ghiottone','orso','falco'];
 let second_array = ['lepre','cervo','usignolo','coniglio','scoiattolo','stambecco','procione','picchio'];
 console.log(first_array);
 console.log(second_array);

//Imposto un ciclo while che mi permette di riempire quello con meno elementi
let go = true;
while (go) {
    if (first_array.length < second_array.length) {
        first_array.push(prompt('Inserisci un predatore'));
    } else if (first_array.length > second_array.length) {
        second_array.push(prompt('Inserisci un preda'));
    } else if (first_array.length == second_array.length) {
        go = false
    }
}
   
console.log(first_array);
console.log(second_array); 