const loadingText = document.querySelector(".loading-text");
const background = document.querySelector(".background");

let load = 0;
let interval = setInterval(blurring, 30);

let scaler = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

function blurring() {
  load++;
//   console.log(load);
  if (load > 99) {
    clearInterval(interval);
  }

  loadingText.innerHTML = `${load}%`;
  loadingText.style.opacity = scaler(load,0,100,1,0)

  background.style.filter = `blur(${scaler(load,0,100,30,0)}px)`
}


