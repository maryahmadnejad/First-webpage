"use strict";
//General

// Current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

//Make mobile nav work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// Slider Script
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("my-slides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 3000); // Change image every 2 seconds
}

var currentIndex = 1;

//Show current image
showSlides(currentIndex);

//Function to move Next
function plusSlides(n) {
  showSlides((currentIndex += n));
}

//Function to move back
function currentSlide(n) {
  showSlides((currentIndex = n));
}
//Initiate moving of slides
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("my-slides");
  var dots = document.getElementsByClassName("navigation-dot");
  if (n > slides.length) {
    currentIndex = 1;
  }
  if (n < 1) {
    currentIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[currentIndex - 1].style.display = "block";
  dots[currentIndex - 1].className += " active";
}
