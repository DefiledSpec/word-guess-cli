let Letter = require('./Letter')

class Word {
    constructor(str) {
        let isWord = str.match(/[a-z]{1,}|[A-Z]{1,}/i)
        if(!isWord || isWord.input !== isWord[0]) return
        this.letters = str.split('')
        this.word = []
        this.complete = false
        this.letters.forEach(ltr => {
            let letter = new Letter(ltr.toUpperCase())
            this.word.push(letter)
        });
        this.guessed = []
        this.chances = this.letters.length + 5 
        this.toString() 
    }
    display() {
        this.complete ?
            console.log(`Congratulations, you won!\n\n<([ ${this.wordStr} ])>\n`)
        :
            console.log(`\nWord: ${this.wordStr}\n`)
        
    }
    toString() {
        this.wordStr = ''
        this.word.forEach((ltr, i) => {
            this.wordStr += ltr.display()
            if(i + 1 < this.word.length) { this.wordStr += ' ' }
        })
        return this.wordStr
    }
    guessLetter(guess) {
        this.word.forEach(ltr => !ltr.guessed ? ltr.check(guess) : null )
        this.checkWord()
    }
    checkWord() {
        this.toString()
        this.complete = this.word.every( ltr => ltr.guessed )
        this.display()
    }
}

module.exports = Word