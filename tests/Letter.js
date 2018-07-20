let Letter = require('../Letter')

let log = str => console.log(str)
let nL = () => log(`\n`)

let a = new Letter('a')
let B = new Letter('B')

let s = new Letter('s')
let one = new Letter('1')

nL()

log('Letter(a) : ', a)
log('Letter(B) : ', B)

log('Letter(s) : ', s)

nL()

log('a.check(\'a\') : ', a.check('a'))
log('a.check(\'A\') : ', a.check('A'))

nL()

log('a.check(Letter(a)) : ', a.check(a))
log('a.check(Letter(B)) : ', a.check(B))

nL()