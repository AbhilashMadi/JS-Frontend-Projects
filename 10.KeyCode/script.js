const pressed = document.getElementById("pressed");
const eventKey = document.getElementById("event-key");
const eventKeyCode = document.getElementById("event-key-code");
const timeStamp = document.getElementById("time-stamp")

window.addEventListener('keydown',(event)=>{
    pressed.innerHTML = `${event.key==" "?"Space":event.key}`
    eventKey.innerHTML = event.code;
    eventKeyCode.innerHTML = event.keyCode;
    timeStamp.innerHTML = event.timeStamp
})