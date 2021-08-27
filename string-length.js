const stringLength = (string) => {
	if (string.length > 0 && string.length < 10) {
		return string.length
	} else {
	 return	'string is too short or long'
	}
}


module.exports = stringLength;