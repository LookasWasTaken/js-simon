/* 
Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. 
Bonus:
Invece di usare prompt e allerte usate inputs ed elementi della dom per mostrare a schermo il risultato.
*/

// math.random 5 +1
// setTimeout * 30000 (ms)
// prompt
// check if chosen numbers are the same of the software

// Seleziono il contenitore dei miei numeri randomici

const randomNumbers = document.getElementById("randomNumbers");

// Seleziono il bottone controlla il risultato

const check = document.getElementById("check");

// Dichiaro un array vuoto di numeri

const arrayNumbers = [];

// Dichiaro un array dell'utente vuoto di numeri

const userNumber = [];

// Dichiaro un array vuoto di numeri individuati

const guessedNumbers = [];

// Dichiaro una variabile score

let score = 0;
console.log("Score", score)

// Seleziono il contenitore del risultato

const result = document.getElementById("result");

// Selezione il contenitore del counter 

const counter = document.getElementById("counter");

// Richiamo la funzione show Number

showNumbers();

// Appendo l'array

randomNumbers.append(arrayNumbers);

setTimeout(() => {
  randomNumbers.innerHTML = "";
}, 30000);

// Pusho gli elementi nell'array vuoto tramite un ciclo for (i <= 5 sta per le volte che deve iterare)

function showNumbers() {
  for (let i = 1; i <= 5; i++) {
    arrayNumbers.push(generateNumbers());
  }
  console.log("Numeri Individuati =", arrayNumbers);
}

// Funzione di generazione di numeri fatta con un math.floor+math.random * 100 + 1 che visualizzerà dei numeri randomici da 1 a 10
// Se il numero sarà già presente nell'array, tramite ciclo while, lo rimpiazzo con uno nuovo, finchè non sarà diverso

function generateNumbers() {
  let number = Math.floor(Math.random() * 100) + 1;
  console.log("Numero Random =", number);
  while (arrayNumbers.includes(number)) {
    number = Math.floor(Math.random() * 100) + 1;
    console.log("Numero Random Alternativo =", number);
  }
  return number;
}

// Event Listner al Click di Check

check.addEventListener("click", function () {
  // Seleziono i 5 input
  const numberOne = document.getElementById("n1").value;
  const numberTwo = document.getElementById("n2").value;
  const numberThree = document.getElementById("n3").value;
  const numberFour = document.getElementById("n4").value;
  const numberFive = document.getElementById("n5").value;
  // Pusho dentro l'array
  userNumber.push(numberOne);
  userNumber.push(numberTwo);
  userNumber.push(numberThree);
  userNumber.push(numberFour);
  userNumber.push(numberFive);

  console.log(userNumber, "Numeri utente");
  for (let i = 0; i < userNumber.length; i++) {
    if (arrayNumbers.includes(Number(userNumber[i]))) {
      score++;
      guessedNumbers.push(Number(userNumber[i]));
    }
  }
  console.log(guessedNumbers, "Numeri individuati")
  console.log("Score Aggiornato", score)
  result.innerHTML = `Hai individuato ${score} numeri`;
  counter.innerHTML = `I numeri individuati sono ${guessedNumbers}`;
});


