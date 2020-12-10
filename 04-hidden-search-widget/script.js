const search = document.getElementById("search");
const input = document.getElementById("search-input");
const button = document.getElementById("search-button");

button.addEventListener("click", () => {
  search.classList.toggle("active");

  if (search.classList.contains("active")) {
    input.value = "";
    input.focus();
  }
});
