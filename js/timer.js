

export default function Timer ({minutesDisplay, secondsDisplay, resetControls}){
    
    let minutes = Number(minutesDisplay.textContent)
    let timerTimeout

    function updateDisplay (newMinutes, seconds) {
        newMinutes = newMinutes === undefined ? minutes : newMinutes
        seconds = seconds === undefined ? 0 : seconds
        minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
        secondsDisplay.textContent = String(seconds).padStart(2, "0")
    }
    
    function reset () {
        updateDisplay(minutes, 0)
        clearTimeout(timerTimeout)
    }

    function pause () {
        clearTimeout(timerTimeout)
    }

    function add() {
        minutes = minutes + 5
        minutesDisplay.textContent = String(minutes).padStart(2, "0")
    }


    function deduct() {
        minutes = minutes - 5
        minutesDisplay.textContent = String(minutes).padStart(2, "0")
    }
    
    function countdown () {
       timerTimeout = setTimeout(function() {

            let seconds = Number(secondsDisplay.textContent)
            let minutes = Number(minutesDisplay.textContent)
            let isFinished = minutes <= 0 && seconds <= 0

            if( seconds <= 0 ) {
                seconds = 60
                --minutes
            }

            if (isFinished) {
                updateDisplay()
                resetControls()
                return
            }
            
            updateDisplay(minutes, seconds - 1)
            
            countdown()
        }, 1000)
    }

    return {
        updateDisplay,
        reset,
        countdown,
        pause,
        add,
        deduct
    }


}



