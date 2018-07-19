
class Letter {
    constructor(char) {
        this.char = char
        this.guessed = false
    }
    display() {
        this.guessed ? this.char : '_'
    }
    check(ltr) {
        this.guessed = ltr === this.char ? true : false
    }
}

module.exports = Letter