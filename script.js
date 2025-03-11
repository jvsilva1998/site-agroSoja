document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    section.classList.add("fade-in");
  });

  const form = document.getElementById("contact-form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Mensagem enviada com sucesso!");
    form.reset();
  });

  // script.js
  document.getElementById("mobile-menu").addEventListener("click", function () {
    const navList = document.getElementById("nav-list");
    navList.classList.toggle("active"); // Alterna a classe "active" para mostrar ou esconder o menu
  });
});
