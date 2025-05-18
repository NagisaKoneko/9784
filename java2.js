document
  .querySelector(".form_rec")
  .addEventListener("submit", function (event) {
    event.preventDefault();
  });
document
  .querySelector(".search-button")
  .addEventListener("click", function () {
    let input = document.querySelector(".search");
    let search_resp = input.value.trim().toLowerCase();

    let product = document.querySelector(
      `.recipies-card[data-name="${search_resp}"]`
    );
    if (product) {
      product.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      anime({
        targets: product,
        scale: [1, 1.05, 1],
        translateY: ["0px", "-5px", "0px"],
        filter: ["brightness(1)", "brightness(1.3)", "brightness(1)"],
        duration: 1500,
        easing: "easeInOutSine",
      });
    } else {
      alert("Рецепт не знайдено!");
    }
    input.value = ""
  });

let stars_empty = document.querySelectorAll(".fa-star");

for (let i = 0; i < stars_empty.length; i++) {
  stars_empty[i].addEventListener("click", function () {
    if (stars_empty[i].classList.contains("fa-regular")) {
      stars_empty[i].classList.remove("fa-regular");
      stars_empty[i].classList.add("fa-solid");
    } else {
      stars_empty[i].classList.remove("fa-solid");
      stars_empty[i].classList.add("fa-regular");
    }
  });
}
