const capitalize = require('./capitalize')

test('returns capitalize form of string', () => {
  expect(capitalize('good')).toBe('Good')
})