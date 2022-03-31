/* Generatore di “nomi cognomi” casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi, 
e da queste vuole generare una falsa lista di invitati con nome e cognome. */

let name_list = ['Antonio','Pietro','Giovanni','Marco','Luca','Alfonso','Mario'];
let surname_list = ['Sabella','Giacobson','Amilcari','Cunegondi','Ametist','Lebano','Iafulli'];
let false_list = [];

for (let i = 0; i < 10; i++) {
    name_random = Math.floor(Math.random() * 7);
    surname_random= Math.floor(Math.random() * 7);
    document.getElementById('falsa_lista').innerHTML += name_list[name_random] + " " + surname_list[surname_random] + " " + ";" + "<br>";
    new_name = name_list[name_random] + " " + surname_list[surname_random] + " " + ";";
    false_list.push([new_name]);
    console.log(false_list);
} 

