const nums = require('./numbers')
let sum = 0

const addFunc = (numbers) => {
  console.log('adding')
  sum = numbers.reduce((partialSum, nextNum) => partialSum + nextNum, 0)
  // console.log(sum)
  return console.log(sum + ' sum!')
}

// console.log(sum)


addFunc(nums)

module.export = addFunc
// console.log(nums)

// console.log(module)