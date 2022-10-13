//Moduels
const names = require('./names')
const addNumbersFunction = require('./addFunc') 
// require('./addFunc') CALLING AN EXPORT LIKE THIS INVOKES IT IF IT IS A FUNCTION.

const number = 20

if (number >= 20 ) {
  console.log('Of Age')
} else {
  console.log('Not of Age')
}


console.log(addNumbersFunction)

// console.log('hi world!')

// console.log(__dirname)
// console.log(__filename)
// console.log(module)