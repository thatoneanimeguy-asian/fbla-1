// This function toggles the visibility of the mobile menu when the hamburger button is clicked
alert("JavaScript is working!");
function toggleMobileMenu() {
  // Get the element with the id "navLinks"
  const nav = document.getElementById("navLinks");

  // Toggle the "show" class on the nav element
  nav.classList.toggle("show");
}