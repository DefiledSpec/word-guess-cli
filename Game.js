let inquirer = require('inquirer')
let Word = require('./Word')

class WordGuess {
    constructor(words) {
        this.words = words
        this.guessed = []
    }
    start() {
        inquirer.prompt([{
            name: 'newGame',
            message: 'Would you like to play again?',
            type: 'confirm'
        }]).then(res => {
            if(res.newGame) {
                this.guessed = []
                let rand = Math.floor(Math.random() * this.words.length)
                this.randWord = this.words[rand]
                this.curWord = new Word(this.randWord)
                this.run()
            }else{
                console.log('\nGoodbye!')
                process.exit()
            }
        }).catch(err => console.log(err))
    }
    run() {
        let complete = this.curWord.toString()
        if(!complete[0] && complete[1]) {
            inquirer.prompt([{
                name: 'letter', 
                message: `What letter would you like to guess? You have ${this.curWord.chances} left`,
                validate: (ltr) => {
                    ltr.toLowerCase()
                    let isLetter = ltr.match(/[a-z]|[A-Z]/)
                    return isLetter && isLetter[0] === isLetter.input
                }
            }]).then( res => {
                let guess = res.letter
                if(this.guessed.indexOf(guess) >= 0) {
                    console.log(`\nYou already guessed the letter '${guess}'!\n`)
                    return this.run()
                }
                this.guessed.push(guess)
                this.curWord.guess(guess)
                this.run()
            }).catch(err => console.error(err))
        }else{
            if(!complete[1]) {
                console.log(`You have run out of chances! The word is '${this.randWord}'\n`)
                return this.start()
            }
            this.start()
        }
    }
}

module.exports = WordGuess
