function loadWhoSection() {
  const whoContents = document.querySelectorAll(".who-content");
  const whoImages = document.querySelectorAll(".who-animie img");

  if (!whoContents.length || !whoImages.length) {
    console.error("Who section content or images not found!");
    return;
  }

  whoContents[0].classList.add("active");
  whoImages[0].classList.add("active");

  whoContents.forEach((content, index) => {
    content.addEventListener("click", function () {
      whoContents.forEach((item) => item.classList.remove("active"));
      whoImages.forEach((img) => img.classList.remove("active"));

      whoContents[index].classList.add("active");
      whoImages[index].classList.add("active");
    });
  });
}

document.addEventListener("DOMContentLoaded", loadWhoSection);
