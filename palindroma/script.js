//*Palindroma
// Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

const word = prompt('dammi una parola')
const word_divise = word.split('')
console.log(word_divise)
const word_reverse = word_divise.slice().reverse()
console.log(word_reverse)
console.log(word_divise)

function palindroma() {
	let pali = false
	for (let i = 0; i < word_divise.length; i++) {
		if (word_divise[i] !== word_reverse[i]) {
			pali = false
			break
		} else {
			pali = true
		}
	}
	return pali
}
const pali = palindroma()

if (pali) {
	alert('la parola è palindroma')
} else {
	alert('la parola non è palindroma')
}
