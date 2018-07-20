let Word = require('../Word')

let log = str => console.log(str)
let nL = () => log(`\n`)

let apple = new Word('apple')


nL()

// log(apple)


// nL()


nL()

apple.guessLetter('a')
apple.guessLetter('p')
apple.guessLetter('L')
apple.guessLetter('e')
