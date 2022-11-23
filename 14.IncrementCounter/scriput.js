const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
    counter.innerText = 0;

    function updateCounter(){
        const target = parseInt(counter.getAttribute("data-target"));
        const c = parseInt(counter.innerText);
        
        const increment = target/200;

        if(c < target){
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter,1);
        }
    }
    updateCounter();
})