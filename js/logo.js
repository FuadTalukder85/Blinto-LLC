function loadLogos() {
  const container = document.getElementById("logoContainer");
  if (!container) {
    console.error("Logo container not found!");
    return;
  }

  const logos = [
    "./assets/image/logo01.png",
    "./assets/image/logo02.png",
    "./assets/image/logo03.png",
    "./assets/image/logo04.png",
    "./assets/image/logo05.png",
    "./assets/image/logo06.png",
    "./assets/image/logo07.png",
    "./assets/image/logo08.png",
    "./assets/image/logo09.png",
    "./assets/image/logo10.png",
    "./assets/image/logo11.png",
  ];

  // Build HTML string
  const logoHTML = logos
    .map(
      (logoSrc, index) => `
        
        <li class="logo-img">
          <img src="${logoSrc}" alt="Logo ${index + 1}">
        </li>
      `
    )
    .join("");

  container.innerHTML = `<ul class="logos">${logoHTML}</ul>`;
}

document.addEventListener("DOMContentLoaded", loadLogos);
