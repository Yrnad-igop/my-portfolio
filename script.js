document.addEventListener("DOMContentLoaded", function () {
  const tabLinks = document.querySelectorAll(".tab-link");
  const tabContents = document.querySelectorAll(".tab-contents");

  window.openTab = function (tabName) {
    tabLinks.forEach((link) => link.classList.remove("active-link"));
    tabContents.forEach((tab) => tab.classList.remove("active-tab"));

    document.querySelector(`#${tabName}`).classList.add("active-tab");
    document.querySelector(`.tab-link[onclick*='${tabName}']`).classList.add("active-link");
  };

  // Animate elements on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  });

  document.querySelectorAll('.tab-contents').forEach(el => observer.observe(el));
});