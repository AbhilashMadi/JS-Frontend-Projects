const fill = document.querySelector(".fill");
const emptys = document.querySelectorAll(".empty");

function drageStart(){
    // console.log("drag Start");
    this.className += " hold"
    setTimeout(() => {
       this.className = "invisible"; 
    }, 0);
}

function drageEnd(){
    // console.log("drag End")
    this.className = "fill"
}

fill.addEventListener("dragstart",drageStart);
fill.addEventListener("dragend",drageEnd);

function dragEnter(e){
    // console.log("drag enter")
    e.preventDefault();
    this.className += " hovered"
}

function dragOver(e) {
//   console.log("drag Over");
e.preventDefault();
}

function dragLeave(e) {
//   console.log("drag leave");
e.preventDefault();
this.className ="empty"
}


function dragDrop() {
    //console.log("drag drop");
    this.className = "empty";
    this.append(fill)
}

emptys.forEach((empty) => {
    empty.addEventListener("dragenter",dragEnter);
    empty.addEventListener("dragover", dragOver);
    empty.addEventListener("dragleave", dragLeave);
    empty.addEventListener("drop", dragDrop);
})