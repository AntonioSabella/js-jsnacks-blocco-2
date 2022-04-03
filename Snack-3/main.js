/* Generatore di “nomi cognomi” casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi, 
e da queste vuole generare una falsa lista di invitati con nome e cognome. */

// Lista nomi e cognomi invitati 
let name_list = ['Antonio','Pietro','Giovanni','Marco','Luca','Alfonso','Mario','Giuseppe','Ignazio','Osvaldo'];
let surname_list = ['Sabella','Giacobson','Amilcari','Cunegondi','Ametist','Lebano','Iafulli','Esposito','Corradi','Russo'];
console.log(name_list);
console.log(surname_list);

// Lista falsi invitati
let false_list = [];

// Costruzione lista falsi invitati
for (let i = 0; i < 20; i++) {
    name_random = Math.floor(Math.random() * name_list.length);
    surname_random= Math.floor(Math.random() * surname_list.length);
    document.getElementById('falsa_lista').innerHTML += name_list[name_random] + " " + surname_list[surname_random] + " " + ";" + "<br>";
    new_name = name_list[name_random] + " " + surname_list[surname_random] +";";
    false_list.push(new_name);
} 

console.log(false_list);

