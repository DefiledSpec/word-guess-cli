let Word = require('../Word')

let log = str => console.log(str)
let nL = () => log(`\n`)

let apple = new Word('apple')

nL()

// log(apple)

nL()

apple.guess('a')
apple.guess('p')
apple.guess('L')
apple.guess('e')