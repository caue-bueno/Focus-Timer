import Sounds from "./sound.js"


let sounds = Sounds()

export default function Controls({
    play,
    pause,
    forest,
    rain,
    coffee,
    fireplace,
    minutesDisplay,
    html,
    sun,
    moon,
}) 

{
    function togglePlayPause () {
        play.classList.toggle('hide')
        pause.classList.toggle('hide')
    }

    function reset() {
        play.classList.remove('hide')
        pause.classList.add('hide')
    }

    function pressButton (card) {
        forest.classList.remove('pressed')
        rain.classList.remove('pressed')
        coffee.classList.remove('pressed')
        fireplace.classList.remove('pressed')
        card.classList.add('pressed')
    }

    function lightMode () {
        html.classList.remove('darkmode')
        sun.classList.remove('hide')
        moon.classList.add('hide')
    }

    function darkMode () {
        html.classList.add('darkmode')
        sun.classList.add('hide')
        moon.classList.remove('hide')
    }

    // function add(minutes) {
    //     return minutes.min + 5
    //     minutesDisplay.textContent = String(minutes).padStart(2, "0")
    // }


    // function deduct() {
        
    //     minutes = minutes - 5
    //     minutesDisplay.textContent = String(minutes).padStart(2, "0")
    // }

    return {
        togglePlayPause,
        reset,
        pressButton,
        lightMode,
        darkMode,
    }
}






