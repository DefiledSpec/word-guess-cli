class Letter {
    constructor(char) {
        this.char = char.toUpperCase()
        this.guessed = false
    }
    display() {
        return this.guessed ? this.char : '_'
    }
    check(ltr) {
        return this.guessed = ltr.char === this.char ? true : false
    }
}

module.exports = Letter