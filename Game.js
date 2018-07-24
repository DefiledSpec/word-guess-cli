let inquirer = require('inquirer')
let Word = require('./Word')

class WordGuess {
    constructor(words) {
        this.words = words  
    }
    start() {
        inquirer.prompt([{
            name: 'newGame',
            message: 'Would you like to play?',
            type: 'confirm'
        }]).then(res => {
            if(res.newGame) {
                let rand = Math.floor(Math.random() * this.words.length)
                let randWord = this.words[rand]
                this.curWord = new Word(randWord)
                this.run()
            }else{
                process.exit()
            }
        })
    }
    run() {
        if(this.curWord.chances > 0 && !this.curWord.complete) {
            inquirer.prompt([{
                name: 'letter', 
                message: `What letter would you like to guess? You have ${this.curWord.chances} left`
            }]).then( res => {
                let guess = res.letter[0]
                let isLetter = guess.match(/[a-z]|[A-Z]/)
                if(isLetter && isLetter[0] === isLetter.input) {
                    this.curWord.guess(guess)
                    this.run()
                }
            })
        }else{
            this.start()
        }
    }
}
module.exports = WordGuess