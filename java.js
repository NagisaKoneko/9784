let seaching_form = document.querySelector(".seaching_form");

seaching_form.addEventListener("submit", function (event) {
  event.preventDefault();
  let input = document.querySelector(".search");
  let search_text = input.value.trim().toLowerCase();

  if (search_text) {
    location.assign(
      `https://www.google.com/search?q=${encodeURIComponent(
        search_text
      )}`
    );
  }
  input.value = "";
});
