let decimals = 0
let seconds = 0
let minutes = 0
let hours = 0

let decimalsEl = document.getElementById("decimals")
let secondsEl = document.getElementById("seconds")
let minutesEl = document.getElementById("minutes")
let hoursEl = document.getElementById("hours")

let startHandler = document.getElementById("start")
let pauseHandler = document.getElementById("pause")
let resetHandler = document.getElementById("reset")

startHandler.addEventListener("click",start)
pauseHandler.addEventListener("click",pause)
resetHandler.addEventListener("click",reset)

function start() {
     timerInterval = setInterval(timer,100)
}

function timer(){
    if(decimals <= 9){
    decimals++
    decimalsEl.textContent = decimals
    } 
    if(decimals === 10){
        decimals = 0
        decimalsEl.textContent = 0
        seconds++
        secondsEl.textContent = seconds
       }if(seconds < 10){
        secondsEl.textContent = "0" + seconds
       } 
       if(seconds === 60){
        seconds = 0
        secondsEl.textContent = 00
        minutes++
        minutesEl.textContent = minutes 
       }if (minutes < 10){
        minutesEl.textContent = "0" + minutes
       } 
       if(minutes === 60){
        minutes = 0
        minutesEl.textContent = 00
        hours++
        hoursEl.textContent = hours
       } if (hours < 10){
        hoursEl.textContent = "0" + hours
       } if (hours >= 24) {
        clearInterval(myInterval)
    }
}

function pause(){
    clearInterval(timerInterval)
    }

function reset(){
   clearInterval(timerInterval)
   decimalsEl.textContent = 0 
   secondsEl.textContent = 0 + "0"
   minutesEl.textContent = 0 + "0"
   hoursEl.textContent = 0 + "0"
}