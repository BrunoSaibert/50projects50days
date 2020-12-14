const container = document.getElementById("container");

function render() {
  for (let index = 0; index < 20; index++) {
    const element = document.createElement("div");

    element.classList.add("card");

    element.innerText = `Content ${index + 1}`;

    container.appendChild(element);
  }
}

render();

function animate() {
  const cards = document.querySelectorAll(".card");
  const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4;

  cards.forEach(card => {
    if (windowTop > card.offsetTop) {
      card.classList.add("visible");
    } else {
      card.classList.remove("visible");
    }
  });
}

animate();

window.addEventListener("scroll", animate);
