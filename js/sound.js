export default function Sounds() {
    const forestButton = new Audio ("./assets/Floresta.wav")
    const rainButton = new Audio ("./assets/Chuva.wav")
    const coffeeButton = new Audio ("./assets/Cafeteria.wav")
    const fireplaceButton = new Audio ("./assets/Lareira.wav")

    function pressForestButton () {
        forestButton.play()
        console.log('play')
    }

    function pressRainButton () {
        rainButton.play()
    }

    function pressCoffeeButton () {
        coffeeButton.play()
    }

    function pressFireplaceButton () {
        fireplaceButton.play()
    }

    function stop () {
        forestButton.pause()
        rainButton.pause()
        coffeeButton.pause()
        fireplaceButton.pause()
    }

    return {
        pressForestButton,
        pressRainButton,
        pressCoffeeButton,
        pressFireplaceButton,
        stop,
    }
}


