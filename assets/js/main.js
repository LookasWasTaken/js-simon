/* Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

// math.random 5 +1 
// setTimeout * 30000 (ms)
// prompt
// check if chosen numbers are the same of the software


// Seleziono il contenitore dei miei numeri randomici

const randomNumbers = document.getElementById("randomNumbers")

// Dichiaro un array vuoto di numeri

const arrayNumbers = [];

// Richiamo la funzione show Number

showNumbers();

// Appendo l'array

randomNumbers.append(arrayNumbers);

// Pusho gli elementi nell'array vuoto tramite un ciclo for (i <= 5 sta per le volte che deve iterare)

function showNumbers() {
    for (let i = 1; i <= 5; i++) {
        arrayNumbers.push(generateNumbers())
    }
    console.log("Numeri Individuati =", arrayNumbers);
    timer()
}


// Funzione di generazione di numeri fatta con un math.floor+math.random * 100 + 1 che visualizzerà dei numeri randomici da 1 a 10
// Se il numero sarà già presente nell'array, tramite ciclo while, lo rimpiazzo con uno nuovo, finchè non sarà diverso

function generateNumbers() {
    let number = Math.floor(Math.random() * 100) +1
    console.log("Numero Random =", number)
    while (arrayNumbers.includes(number)) {
        number = Math.floor(Math.random() * 100) + 1;
        console.log("Numero Random Alternativo =", number);
      }
    return number;
}
