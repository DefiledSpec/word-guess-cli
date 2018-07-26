let Letter = require('./Letter')

class Word {
    constructor(str) {
        this.word = []
        this.letters = str.split('')
        this.complete = false
        this.letters.forEach( ltr => this.word.push(new Letter(ltr)) );
        this.totalChances = this.letters.length + 5
        this.chances = this.totalChances 
    }
    toString() {
        this.wordStr = ''
        this.word.forEach((ltr, i) => {
            this.wordStr += ltr.display()
            if(i + 1 < this.word.length) { this.wordStr += ' ' }
        })
        this.checkWord()
        (this.complete) 
        ?   console.log(`\nWord: ${this.wordStr}\n\nCongratulations, you won!\n\n<([ ${this.wordStr} ])>\n`)
        :   console.log(`\nWord: ${this.wordStr}\n`)
        return [this.complete, (this.chances > 0), this.wordStr]
    }
    guess(char) {
        let guess = new Letter(char)     
        this.chances--
        this.word.forEach(ltr => !ltr.guessed ? ltr.check(guess) : null )
    }
    checkWord() {
        this.complete = this.word.every( ltr => ltr.guessed )
    }
}

module.exports = Word
