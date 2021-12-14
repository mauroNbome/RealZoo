const animalSounds = {
    LION: "roar",
    TIGER: "grrr",
    PIG: "oink",
    CAT: "meow"
}

class Animal {
    constructor(name) {
        this.name = name
        this.sound = animalSounds[name.toUpperCase()]
    }

    speak(input) {
        const fixedSplit = input.split(" ")
        let newPhrase = ""

        fixedSplit.forEach(word => {
            newPhrase += `${word} ${this.getSound()} `
        })

        console.log(newPhrase)
        return newPhrase
    }

    getSound() {
        return this.sound
    }
}
