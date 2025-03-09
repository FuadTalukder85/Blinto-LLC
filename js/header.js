// Function to load and display the menu
function loadMenu() {
  const container = document.getElementById("menuContainer");
  if (!container) {
    console.error("Menu container not found!");
    return;
  }

  // Menu items
  const menus = ["Features", "Achievements", "Testimonials", "FAQ"];

  // Create the HTML for the menu items
  const menuHTML = menus
    .map((menu) => {
      return `<li>${menu}</li>`; // Correcting the map function to return valid HTML for each menu item
    })
    .join(""); // Joining all the items into a single string

  // Inject the menu items into the container
  container.innerHTML = `<ul>${menuHTML}</ul>`;

  // Toggle the 'show' class to slide in/out the menu
  container.classList.toggle("show");
}

// Add an event listener to the menu icon to toggle the menu
document.getElementById("menuIcon").addEventListener("click", loadMenu);
