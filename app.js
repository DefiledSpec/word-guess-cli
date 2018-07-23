let inquirer = require('inquirer')
let Word = require('./Word')

let curWord;

const words = ['apple', 'orange', 'pear', 'plumb']
start()
function start() {
    inquirer.prompt([{
        name: 'newGame',
        message: 'Would you like to play?',
        type: 'confirm'
    }]).then(res => {
        if(res.newGame) {
            let rand = Math.floor(Math.random() * words.length)
            let randWord = words[rand]
            curWord = new Word(randWord)
            run()
        }else{
            process.exit()
        }
    })
}

function run() {
    if(curWord.chances > 0 && !curWord.complete) {
        inquirer.prompt([
            { name: 'letter', message: `What letter would you like to guess? You have ${curWord.chances} left`}
        ]).then( res => {
            let guess = res.letter[0]
            let isLetter = guess.match(/[a-z]|[A-Z]/)
            if(isLetter && isLetter[0] === isLetter.input) {
                curWord.guess(guess)
                run()
            }
        })
    }else{
        start()
    }
}