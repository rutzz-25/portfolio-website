// nav-arrow.js
// This script creates a back-to-home arrow and injects it into the page

document.addEventListener("DOMContentLoaded", () => {
  // Create anchor element
  const arrow = document.createElement("a");
  arrow.href = "index.html"; // where arrow takes you
  arrow.className = "back-to-home";
  arrow.title = "Go to Home";
  arrow.innerHTML = "&#8592;"; // left arrow symbol

  // Append arrow to body
  document.body.appendChild(arrow);
});

document.addEventListener("DOMContentLoaded", () => {
  const arrow = document.createElement("a");
  arrow.href = "index.html";
  arrow.className = "back-to-home";
  arrow.title = "Go to Home";
  arrow.innerHTML = "&#8592;";
  arrow.style.display = "none"; // hidden initially
  document.body.appendChild(arrow);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      arrow.style.display = "block";
    } else {
      arrow.style.display = "none";
    }
  });
});

