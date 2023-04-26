import { play,pause,add,deduct,forest,rain,coffee,fireplace, minutesDisplay, secondsDisplay, html, sun, moon } from "./elements.js"
import Controls from "./controls.js"
import Events from "./events.js" 
import Timer from "./timer.js"
import Sound from "./sound.js"



let minutes = Number(minutesDisplay.textContent)



const controls = Controls({
    play,
    pause,
    add,
    deduct,
    forest,
    rain,
    coffee,
    fireplace,
    minutesDisplay,
    html,
    sun,
    moon,
    minutes
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset,
    minutes
})


const sound = Sound()


Events({controls, timer, sound})