const container = document.getElementsByClassName("container");
function generateHexcode(){
    const hexCode = Math.floor(Math.random() * 0xFFFFFF).toString(16);
    document.body.style.backgroundColor = `#${hexCode}`;
}

document.querySelector("button").addEventListener("click",generateHexcode)
console.log(document.querySelector(".body"))