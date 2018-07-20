class Letter {
    constructor(char) {
        let isChar = char.match(/[a-z]{1}|[A-Z]{1}/i)

        if(isChar && isChar[0] === isChar.input) {
            this.char = char
            this.guessed = false
        } else {
            // console.log('\n\tThat isn\'t a letter\'', char, '\'\n')
            return
        }
    }
    display() {
        return this.guessed ? this.char : '_'
    }
    check(ltr) {
        ltr = ltr instanceof Letter ? ltr : new Letter(ltr)
        if(!ltr.char) return //console.log('Errorrorrr')
        return this.guessed = ltr.char.toLowerCase() === this.char.toLowerCase() ? true : false
    }
}

module.exports = Letter