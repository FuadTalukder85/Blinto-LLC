function loadScrollToTop() {
  document.querySelector(".up-arrow").addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
