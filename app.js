const WordGuess = require('./Game')

const words = [
    'apple', 
    'orange', 
    'pear', 
    'plumb', 
    'grapes', 
    'watermelon', 
    'strawberry', 
    'pineapple'
]

let running = false
const startTime = Date.now()
let instance

try {
    instance = new WordGuess(words)
    running = true
} catch(err) {
    throw `Start Error: ${err.message}`
} finally {
    console.log(`\nHangman ${running ? 'Started' : 'Failed to start'} in ${(Date.now() - startTime)/1000}s.`)
    if(running) {
        instance.start()
    }
}