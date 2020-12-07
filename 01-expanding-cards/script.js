const allCards = document.querySelectorAll(".card");

allCards.forEach(el => {
  el.addEventListener("click", () => {
    clearActive();
    el.classList.add("active");
  });
});

function clearActive() {
  allCards.forEach(el => el.classList.remove("active"));
}
