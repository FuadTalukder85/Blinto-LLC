function loadMenu() {
  let container = document.getElementById("menuContainer");
  if (!container) {
    console.error("Menu container not found!");
    return;
  }
  const menus = ["Features", "Achievements", "Testimonials", "FAQ"];

  const menuHTML = `
    <ul class="res-list">
      <li id="closeMenu" class="close-menu"><i class="fa-solid fa-xmark"></i></li>
      ${menus.map((menu) => `<li style="padding: 10px;">${menu}</li>`).join("")}
      <li>
        <div class="header-res">
          <button class="btn-outline">Sign Up</button>
          <button class="btn-fill">Log In</button>
        </div>
      </li>
    </ul>
  `;
  container.innerHTML = menuHTML;

  const menuList = container.querySelector(".res-list");
  if (menuList) {
    document.getElementById("closeMenu").addEventListener("click", () => {
      menuList.classList.remove("show");
    });
  }
}
document.getElementById("menuIcon").addEventListener("click", () => {
  let container = document.getElementById("menuContainer");
  let menuList = container.querySelector(".res-list");
  if (menuList && !menuList.classList.contains("show")) {
    menuList.classList.add("show");
  }
});
