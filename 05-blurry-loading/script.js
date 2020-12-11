const background = document.getElementById("background");
const loadingText = document.getElementById("loading");

let load = 0;

const init = setInterval(blurring, 30);

function blurring() {
  load++;

  loadingText.innerText = `${load}%`;
  loadingText.style.opacity = calc(load, 1, 0);
  background.style.filter = `blur(${calc(load, 30, 0)}px)`;

  if (load === 100) {
    clearInterval(init);
  }
}

function calc(val, start, end) {
  return (val * (end - start)) / 100 + start;
}
