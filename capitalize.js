const capitalize = (string) => {
	let firstLetter = string[0]
let otherLetters = ""
for (let i = 1; i < string.length; i++) {
	otherLetters += string[i].toLowerCase()
}
return firstLetter.toUpperCase() + otherLetters
}
module.exports = capitalize;