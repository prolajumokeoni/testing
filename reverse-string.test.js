const reverseString = require('./reverse-string');

test('should reverse string', () => {
expect(reverseString('hello')).toBe('olleh')
})