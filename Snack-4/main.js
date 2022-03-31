/* Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari */

let integers_array = [] 
// Creazione di un ciclo for che inserisca, "scegliendo", numeri casuali nell'array
for (let i = 0; i < 10; i++) {
    let number_for_array = Math.ceil(Math.random() * 100);
    console.log(number_for_array);
    integers_array.push(number_for_array);
}

console.log(integers_array);

//console.log(integers_array[0]);
let somma = 0;
somma = integers_array[1] + integers_array[3] + integers_array[5] + integers_array[7] + integers_array[9]
console.log(somma);