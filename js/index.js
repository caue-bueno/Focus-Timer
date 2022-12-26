import { play,pause,add,deduct,forest,rain,coffee,fireplace, minutesDisplay, secondsDisplay } from "./elements.js"
import Controls from "./controls.js"
import Events from "./events.js" 
import Timer from "./timer.js"
import Sound from "./sound.js"

const controls = Controls({
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

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset
})

const sound = Sound()


Events({controls, timer, sound})