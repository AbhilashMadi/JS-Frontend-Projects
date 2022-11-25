const smallCups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");

updateBigCup();

function fillCup(index){

    if(smallCups[index].classList.contains("full") && !smallCups[index].nextElementSibling.classList.contains("full")){
        index--;
    }

    smallCups.forEach((cup,inx) => {
        if(inx <= index){
            cup.classList.add("full");
        } else {
            cup.classList.remove("full")
        }
    })

    updateBigCup();

}

smallCups.forEach((cup,index) => {
    cup.addEventListener("click" , () => {
        fillCup(index);
    })
})

function updateBigCup(){
    const fullCups = document.querySelectorAll(".cup-small.full").length;
    const totalCups = smallCups.length;
    

    if(fillCup === 0){
        percentage.style.visibility = "hidden";
        percentage.style.height = 0;
    } else {
        percentage.style.visibility = "visible";
        percentage.style.height = `${(fullCups / totalCups) * 330}px`;

        if (`${(fullCups / totalCups) * 330}` == 0) {
          percentage.style.color = "#FFF";
        } else {
            percentage.style.color = "var(--border-)"
        }

        percentage.innerText = `${fullCups/totalCups*100}%`
        
        if(fullCups === totalCups){
            remained.style.visibility = "hidden"
            remained.style.height= 0;
        } else {
            remained.style.visibility = "visible"
            liters.innerText = `${2-((250 * fullCups) / 1000)}L`;
        }
    }

}