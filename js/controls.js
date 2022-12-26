import Sounds from "./sound.js"

let sounds = Sounds()




export default function Controls({
    play,
    pause,
    add,
    deduct,
    forest,
    rain,
    coffee,
    fireplace,
    minutesDisplay
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

        // let alreadyPressed = card.classList.contains('pressed')

        // if (alreadyPressed){
        //     card.classList.remove('pressed')
        //     return
        // }
        forest.classList.remove('pressed')
        rain.classList.remove('pressed')
        coffee.classList.remove('pressed')
        fireplace.classList.remove('pressed')
        card.classList.add('pressed')
    }

    // function add() {
    //     let minutes = Number(minutesDisplay.textContent)
    //     minutes = minutes + 5
    //     minutesDisplay.textContent = String(minutes).padStart(2, "0")
    // }


    // function deduct() {
    //     let minutes = Number(minutesDisplay.textContent)
    //     minutes = minutes - 5
    //     minutesDisplay.textContent = String(minutes).padStart(2, "0")
    // }

    return {
        togglePlayPause,
        reset,
        pressButton,
        add,
        deduct,
    }
}






