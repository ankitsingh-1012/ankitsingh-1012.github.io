// script.js
window.onload = function() {
    // Function to toggle navigation menu for small screens
    const toggleButton = document.getElementById("toggle-button");
    const navLinks = document.getElementById("nav-links");

    toggleButton.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Function to close navigation menu when a link is clicked
    const navItems = document.querySelectorAll(".nav-item");
    navItems.forEach(item => {
        item.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });
};