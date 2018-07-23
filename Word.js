let Letter = require('./Letter')

class Word {
    constructor(str) {
        this.word = []
        this.letters = str.split('')
        this.complete = false
        this.letters.forEach( ltr => this.word.push(new Letter(ltr)) );
        this.guessed = []
        this.totalChances = this.letters.length + 5
        this.chances = this.totalChances 
        this.toString() 
    }
    toString() {
        this.wordStr = ''
        this.word.forEach((ltr, i) => {
            this.wordStr += ltr.display()
            if(i + 1 < this.word.length) { this.wordStr += ' ' }
        })
        this.checkWord()
        this.complete ?
            console.log(`\nWord: ${this.wordStr}\n\nCongratulations, you won!\n\n<([ ${this.wordStr} ])>\n`)
        :   console.log(`\nWord: ${this.wordStr}\n`)
    }
    guess(char) {
        let guess = new Letter(char)     
        this.guessed.push(guess)
        this.chances--
        this.word.forEach(ltr => !ltr.guessed ? ltr.check(guess) : null )
        this.toString()
    }
    checkWord() {
        this.complete = this.word.every( ltr => ltr.guessed )
    }
}

module.exports = Word