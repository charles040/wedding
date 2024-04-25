document.addEventListener("DOMContentLoaded", function () {
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", function () {
      const accordionItem = this.parentElement;
      const accordionContent =
        accordionItem.querySelector(".accordion-content");

      if (accordionContent.style.display === "block") {
        accordionContent.style.display = "none";
      } else {
        // Close all other accordion items
        document.querySelectorAll(".accordion-content").forEach((content) => {
          content.style.display = "none";
        });
        accordionContent.style.display = "block";
      }
    });
  });
});

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollToTopBtn").style.display = "block";
  } else {
    document.getElementById("scrollToTopBtn").style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/* clock */

let hrs = document.querySelector(".hrs");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");



setInterval(() => {
  let date = new Date();
  hrs.innerHTML = date.getHours();
  min.innerHTML = date.getMinutes();
  sec.innerHTML = date.getSeconds();
},1000);

//burger button nav bar

function toggleNavbar() {
  var navbarburger = document.getElementById("navbarr");
  if (navbarburger.style.display === "block") {
    navbarburger.style.display = "none";
  } else {
    navbarburger.style.display = "block";
  }
}