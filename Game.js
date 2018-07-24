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
            message: 'Would you like to play?',
            type: 'confirm'
        }]).then(res => {
            if(res.newGame) {
                this.guessed = []
                let rand = Math.floor(Math.random() * this.words.length)
                let randWord = this.words[rand]
                this.curWord = new Word(randWord)
                this.run()
            }else{
                console.log('Goodbye!')
                process.exit()
            }
        }).catch(err => console.log(err))
    }
    run() {
        if(this.curWord.chances > 0 && !this.curWord.complete) {
            this.curWord.toString()
            inquirer.prompt([{
                name: 'letter', 
                message: `What letter would you like to guess? You have ${this.curWord.chances} left`,
                
            }]).then( res => {
                let guess = res.letter[0]
                let isLetter = false
                if(guess) {
                    isLetter = guess.match(/[a-z]|[A-Z]/)
                }
                if(isLetter && isLetter[0] === isLetter.input) {
                    if(this.guessed.indexOf(guess) >= 0) {
                        console.log(`\nYou already guessed the letter '${guess}'!\n`)
                        return this.run()
                    }
                    this.guessed.push(guess)
                    this.curWord.guess(guess)
                    this.run()
                }else{
                    console.log('Please enter a valid input!')
                    return this.run()
                }
            }).catch(err => console.error(err))
        }else{
            if(this.curWord.chances <= 0) {
                console.log(`You have run out of chances! The word is '${this.curWord.toString()}'`)
                return this.start()
            }
            this.start()
        }
    }
}
module.exports = WordGuess