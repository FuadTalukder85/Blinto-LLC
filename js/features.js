function loadFeatures() {
  const container = document.getElementById("featuresContainer");
  if (!container) {
    console.error("Features container not found");
    return;
  }
  const features = [
    {
      icon: "../assets/icon/icon01.png",
      title: "Lazy Efficient",
      description:
        "A cras semper auctor neque. Proin libero nunc consequat interdum varius sit. Libero volutpat sed cras ornare arcu dui vivamus arcu felis.",
    },
    {
      icon: "../assets/icon/icon02.png",
      title: "Streamlined Process",
      description:
        "Montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada. Orci porta non pulvinar neque laoreet.",
    },
    {
      icon: "../assets/icon/icon03.png",
      title: "Minimum Effort",
      description:
        "Tincidunt eget nullam non nisi est sit amet facilisis magna. Rhoncus dolor purus non enim praesent elementum.",
    },
    {
      icon: "../assets/icon/icon04.png",
      title: "Absolutely Easy To Use",
      description:
        "Rutrum quisque non tellus orci ac. Purus viverra accumsan in nisl. Id interdum velit laoreet id donec ultrices adipiscing elit.",
    },
    {
      icon: "../assets/icon/icon05.png",
      title: "Just Sleep & Chill",
      description:
        "Bibendum est ultricies integer quis auctor elit. Ultrices in iaculis nunc sed. A scelerisque purus semper eget. Facilisi morbi tempus iaculi.",
    },
    {
      icon: "../assets/icon/icon06.png",
      title: "Don’t Worry About Life",
      description:
        "Pharetra diam sit amet nisl suscipit adipiscing bibendum est. Risus ultricies tristique nulla aliquet enim tortor.",
    },
  ];

  const featuresHTML = features
    .map(
      (feature, index) =>
        `<div>
        <div class="features-img"><img src="${feature.icon}" alt="Logo ${
          index + 1
        }"></div>
            <p class="features-title">${feature.title}</p>
            <p class="features-description">${feature.description}</p>
        </div>`
    )
    .join("");
  container.innerHTML = `<div class="features">${featuresHTML}</div>`;
}
document.addEventListener("DOMContentLoaded", loadFeatures);
