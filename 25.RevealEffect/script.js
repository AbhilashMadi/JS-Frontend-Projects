const revealElements = document.querySelectorAll("[data-reveal]");

const scrollReveal = function () {
    revealElements.forEach((item) => {
        const isElementOnScreen = item.getBoundingClientRect().top < window.innerHeight;

        if(isElementOnScreen) item.classList.add("revealed");
        else item.classList.remove("revealed");
    })
}

window.addEventListener("scroll",scrollReveal);
window.addEventListener("load",scrollReveal);
