document
  .querySelector(".form_rec")
  .addEventListener("submit", function (event) {
    event.preventDefault();
  });
document
  .querySelector(".search-button")
  .addEventListener("click", function () {
    let search_resp = document
      .querySelector(".search")
      .value.trim()
      .toLowerCase();

    let product = document.querySelector(
      `.recipies-card[data-name="${search_resp}"]`
    );
    if (product) {
      product.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      product.style.border = "2px solid red"; // для видимості
    } else {
      alert("Рецепт не знайдено!");
    }
  });
