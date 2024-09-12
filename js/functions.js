//'use strict'

const input = document.querySelector('input')
const button = document.querySelector('button')

getRandomIntNumberInRange = (min, max) => {
    return Math.floor(Math.random() * max) + min
}

button.addEventListener('click', () => {
    const randomizedNumber = getRandomIntNumberInRange(1, 6)
    const quess = Number(input.value)

    if (quess === randomizedNumber) {
        console.log("Arvasit oikein, numero on " + randomizedNumber)
        alert("Arvasit oikein, numero on " + randomizedNumber)
    }
    else {
        console.log("Arvasit väärin, numero on " + randomizedNumber)
        alert("Arvauksesi on väärin, numero on " + randomizedNumber)
    }

    input.value = ''
    input.focus()

})