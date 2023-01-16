// Get the navigation menu
const nav = document.getElementById("nav");

// Get the sections of the website
const sections = document.querySelectorAll("section");

// Add click event listener to the navigation menu
nav.addEventListener("click", (e) => {
  // Get the id of the clicked menu item
  const id = e.target.getAttribute("id");

  // Loop through sections and hide all sections
  sections.forEach((section) => {
    section.style.display = "none";
  });

  // Show the section corresponding to the clicked menu item
  document.getElementById(id + "-section").style.display = "block";
});
