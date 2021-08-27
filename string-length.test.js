const stringLength = require('./string-length');

test('should return length of string', ()=> {
	expect(stringLength('bicycle')).toBe(7)
})

test('should return length of string', ()=> {
	expect(stringLength('')).toBe('string is too short or long')
})