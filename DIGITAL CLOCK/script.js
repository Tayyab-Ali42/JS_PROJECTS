
document.addEventListener('DOMContentLoaded', () => {
    DigitalClock()
})
const hoursElm = document.getElementById('hours')
const minElm = document.getElementById('minutes')
const secElm = document.getElementById('seconds')
const amPmElm = document.getElementById('ampm')
const formatToggle = document.getElementById('formatToggle');





let chagneFormat = false


let DigitalClock = () => {
    let date = new Date()
    // const date = new Date(2025, 0, 15, 15, 58, 60);
    let hours = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()

    // ADD ZERO WITH SEC
    if (sec >= 0 && sec < 10) {
        sec = '0' + sec
    }

    // ADD ZERO WITH MIN 
    if (min >= 0 && min < 10) {
        min = '0' + min
    }

    // ADD ZERO WITH hours 
    if (hours >= 0 && hours < 10) {
        hours = '0' + hours
    }

    // AM PM
    amPmElm.innerText = hours < 12 ? "AM" : 'PM'


    // ADDING IN DOM
    if (chagneFormat) {
        let twelveFormat = hours % 12
        if (twelveFormat >= 0 && twelveFormat < 10) {
            hours = '0' + twelveFormat
            console.log(hours)
        } else {
            hoursElm.textContent = twelveFormat
            formatToggle.textContent = 'Switch to 24-Hour'
        }
    } else {
        hoursElm.textContent = hours
        formatToggle.innerText = 'Switch to 12-Hour'
    }
    minElm.textContent = min
    secElm.textContent = sec

}


formatToggle.addEventListener('click', () => {
    chagneFormat = !chagneFormat
})



let Timer = setInterval(() => {
    DigitalClock()
}, 1000);





