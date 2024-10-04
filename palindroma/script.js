//*Palindroma
// Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

const word = prompt('dammi una parola')

function palindroma(word) {
	let word_divise = word.split('')
	let word_reverse = word_divise.slice().reverse()
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
const pali = palindroma(word)

if (pali) {
	alert('la parola è palindroma')
} else {
	alert('la parola non è palindroma')
}
