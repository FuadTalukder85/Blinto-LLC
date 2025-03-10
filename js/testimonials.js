function loadtestimonials() {
  const container = document.getElementById("testimonialsContainer");
  const loadMoreBtn = document.querySelector(".tes-btn");
  if (!container) {
    console.error("Testimonials container not found");
    return;
  }
  const testimonials = [
    {
      rating: 5,
      review:
        "Lorem ipsum dolor sit amet, consectetur ad-zzz-ing elit. Proin vel urna at metus tempor mattis, or not, whatever.",
      image: "../assets/image/proImg01.png",
      name: "X_AE_A_13",
      designation: "Product Designer, slothUI",
    },
    {
      rating: 3.5,
      review:
        "Posuere una nec tincidunt praesent semper feugiat nibh sed. Velit dignissim sodales ut eu.",
      image: "../assets/image/proImg02.png",
      name: "Azunyan U. Wu",
      designation: "CEO, nextlife.ai",
    },
    {
      rating: 4,
      review:
        "Sit amet est placerat in. Blandit cursus risus at ultrices mi tempus imperdiet. Volutpat commodo sed egestas egestas fringilla phasellus. Tincidunt eget nullam non nisi.",
      image: "../assets/image/proImg03.png",
      name: "Mechatronics Yi",
      designation: "CTO, fin4win.ai",
    },
    {
      rating: 5,
      review:
        "Nisi porta lorem mollis aliquam ut porttitor leo. Sed odio morbi quis commodo. Arcu non odio euismod lacinia at quis. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae.",
      image: "../assets/image/proImg04.png",
      name: "Oarack Babama",
      designation: "Former President of US",
    },
    {
      rating: 4.5,
      review:
        "Accumsan tortor posuere ac ut consequat. Quis varius quam quisque id diam vel. Commodo odio aenean sed adipiscing diam donec adipiscing. Vel pharetra vel turpis nunc eget.",
      image: "../assets/image/proImg05.png",
      name: "Saylor Twift",
      designation: "Famous Singer",
    },
    {
      rating: 3.5,
      review:
        "Venenatis cras sed felis eget velit aliquet. Velit scelerisque in dictum non consectetur. Felis eget velit aliquet sagittis. Ultricies integer quis auctor elit sed vulputate mi.",
      image: "../assets/image/proImg06.png",
      name: "Asuna Yuuki",
      designation: "Virtual Swordsman",
    },
    {
      rating: 2.5,
      review:
        "Sagittis eu volutpat odio facilisis mauris sit amet massa. Urna et pharetra pharetra massa.",
      image: "../assets/image/proImg07.png",
      name: "Boe Jiden",
      designation: "Former President Of Canada",
    },
    {
      rating: 5,
      review:
        "Cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Nec nam aliquam sem et tortor consequat id porta nibh. Viverra suspendisse. Lacus sed viverra tellus in hac habitasse platea dictumst. Elit at imperdiet dui accumsan.",
      image: "../assets/image/proImg08.png",
      name: "Vermillion D. Gray",
      designation: "CEO, hacklife.ai",
    },
    {
      rating: 4.5,
      review:
        "Viverra accumsan in nisl nisi scelerisque eu. Vitae congue eu consequat ac felis donec.",
      image: "../assets/image/proImg09.png",
      name: "Zuckman Wu",
      designation: "CEO, tech4life.ai",
    },
  ];

  function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    let starsHTML = "";

    for (let i = 0; i < fullStars; i++) {
      starsHTML += '<i class="fas fa-star"></i>';
    }
    if (hasHalfStar) {
      starsHTML += '<i class="fas fa-star-half-alt"></i>';
    }
    for (let i = 0; i < emptyStars; i++) {
      starsHTML += '<i class="far fa-star"></i>';
    }

    return starsHTML;
  }

  function renderTestimonials(showAll = false) {
    const visibleTestimonials = showAll
      ? testimonials
      : testimonials.slice(0, 4);

    const testimonialsHTML = visibleTestimonials
      .map(
        (testimonial, index) =>
          `<div class="testimonial-content">
          <span class="stars">${generateStars(testimonial.rating)}</span>
          <p class="review">${testimonial.review}</p>
          <div class="reviewer">
            <div>
              <img src="${testimonial.image}" alt="image ${index + 1}">
            </div>
            <div>
              <p class="testimonial-name">${testimonial.name}</p>
              <p class="testimonial-designation">${testimonial.designation}</p>
            </div>         
          </div>
        </div>`
      )
      .join("");

    container.innerHTML = `<div class="testimonial">${testimonialsHTML}</div>`;
  }
  if (window.innerWidth <= 380) {
    renderTestimonials(false);
    loadMoreBtn.style.display = "block";
  } else {
    renderTestimonials(true);
    loadMoreBtn.style.display = "none";
  }

  // Load more button event
  loadMoreBtn.addEventListener("click", () => {
    renderTestimonials(true);
    loadMoreBtn.style.display = "none";
  });
}
document.addEventListener("DOMContentLoaded", loadtestimonials);
