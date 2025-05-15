let seaching_form = document.querySelector(".seaching_form");

seaching_form.addEventListener("submit", function (event) {
  let search_text = document
    .querySelector(".search")
    .value.trim()
    .toLowerCase();

  if (search_text) {
    location.assign(
      `https://www.google.com/search?q=${encodeURIComponent(
        search_text
      )}`
    );
  }
});

document
  .querySelector(".search-button")
  .addEventListener("click", () => {
    let search_resp = document
      .querySelector(".search")
      .value.trim()
      .toLowerCase();

    let product = document.querySelector(`data-name=${search_resp}`);
    if (product) {
      product.scrollIntoView({ behavior: "smooth", block: "center" });
      product.style.border = "2px solid red"; // для видимості
    } else {
      alert("Рецепт не знайдено!");
    }
  });

document
  .querySelector(".form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
  });
