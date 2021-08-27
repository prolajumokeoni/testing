const add = (...input) => {
  let sum = 0
  for (let i = 0; i < input.length; i++) {
    sum += input[i]
  }
  return sum
}

const subtract = (a, b) => {
  return a - b
}

const multiply = (...input) => {
  let result = input.reduce((a, b) => a * b)
  return result
}

const divide = (a, b) => {
  return a / b
}

module.exports = { add, subtract, multiply, divide }