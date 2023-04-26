export default function Sounds() {
    const forestSound = new Audio ("./assets/Floresta.wav")
    const rainSound = new Audio ("./assets/Chuva.wav")
    const coffeeSound = new Audio ("./assets/Cafeteria.wav")
    const fireplaceSound = new Audio ("./assets/Lareira.wav")

    function pressForestButton () {
        forestSound.play()
    }

    function pressRainButton () {
        rainSound.play()
    }

    function pressCoffeeButton () {
        coffeeSound.play()
    }

    function pressFireplaceButton () {
        fireplaceSound.play()
    }

    function forestSetVolume(value) {
        forestSound.volume = value / 100;
    }

    function rainSetVolume(value) {
        rainSound.volume = value / 100;
    }

    function coffeeSetVolume(value) {
        coffeeSound.volume = value / 100;
    }

    function fireplaceSetVolume(value) {
        fireplaceSound.volume = value / 100;
    }

    function stop () {
        forestSound.pause()
        rainSound.pause()
        coffeeSound.pause()
        fireplaceSound.pause()
    }

    return {
        pressForestButton,
        pressRainButton,
        pressCoffeeButton,
        pressFireplaceButton,
        stop,
        forestSetVolume,
        rainSetVolume,
        coffeeSetVolume,
        fireplaceSetVolume
    }
}


