//*Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

const user_number = Number(prompt('scegli un numero tra 1 e 5'))
alert(`hai scelto il numero ${user_number}`)

function pc_number(num) {
	const number = Math.floor(Math.random() * num) + 1
	return number
}

const number_computer = pc_number(5)
alert(`il computer ha scelto il numero ${number_computer}`)
const somma = user_number + number_computer

function pair(num) {
	return num % 2 === 0
}

const result = pair(somma)

if (result) {
	alert(`la somma dei due numeri ${somma} è pari`)
} else {
	alert(`la somma dei due numeri ${somma} è dispari`)
}
