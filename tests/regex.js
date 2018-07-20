

let a = 'app1e'

let b = a.match(/[a-z]{1,}|[A-Z]{1,}/i)
let c = b[0] === b.input


console.log(c)