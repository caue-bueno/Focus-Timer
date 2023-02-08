import { play, pause, stop, add, deduct, forest, rain, coffee, fireplace, sun, moon } from "./elements.js"


export default function Events({controls, timer, sound}){

    moon.addEventListener('click', () => {
        controls.lightMode()
    })
    sun.addEventListener('click', () => {
        controls.darkMode()
    })
    
    play.addEventListener('click', () => {
        controls.togglePlayPause()
        timer.countdown()
    })

    pause.addEventListener('click',() => {
        controls.togglePlayPause()
        timer.pause()
    })

    stop.addEventListener('click', () => {
        controls.reset()
        timer.reset()
        sound.stop()
    })

    add.addEventListener('click', () => {
        timer.add()        
    })

    deduct.addEventListener('click', () => {
        timer.deduct()
    })

    forest.addEventListener('click', () => {
        sound.stop()
        sound.pressForestButton()
        controls.pressButton(forest)
    })

    rain.addEventListener('click', () => {
        sound.stop()
        sound.pressRainButton()
        controls.pressButton(rain)
    })

    coffee.addEventListener('click', () => {
        sound.stop()
        sound.pressCoffeeButton()
        controls.pressButton(coffee)
    })

    fireplace.addEventListener('click', () => {
        sound.stop()
        sound.pressFireplaceButton()
        controls.pressButton(fireplace)
    })

}