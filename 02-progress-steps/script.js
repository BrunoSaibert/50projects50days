function create(val) {
  const container = document.getElementById("container");

  for (let i = 0; i < val; i++) {
    const el = document.createElement("div");
    el.innerText = i + 1;
    el.classList.add("step");

    if (i === 0) {
      el.classList.add("active");
    }

    container.appendChild(el);
  }

  let currentActive = 1;

  const stepList = document.querySelectorAll(".step");
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");
  const progress = document.getElementById("progress-bar");

  prev.addEventListener("click", () => {
    currentActive--;

    if (currentActive < 1) {
      currentActive = 1;
    }

    update();
  });

  next.addEventListener("click", () => {
    currentActive++;

    if (currentActive > stepList.length) {
      currentActive = stepList.length;
    }

    update();
  });

  function update() {
    stepList.forEach((el, id) => {
      if (id < currentActive) {
        el.classList.add("active");
      } else {
        el.classList.remove("active");
      }
    });

    const actives = document.querySelectorAll(".active");

    progress.style.width = `${(100 * (actives.length - 1)) /
      (stepList.length - 1)}%`;
  }
}

create(4);
