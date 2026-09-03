let slideIndex = 0;

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");


function showSlide(index) {

    if (index >= slides.length) {
        slideIndex = 0;
    }

    if (index < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    slides[slideIndex].classList.add("active");
    dots[slideIndex].classList.add("active");
}


function changeSlide(direction) {

    slideIndex += direction;

    showSlide(slideIndex);
}


function currentSlide(index) {

    slideIndex = index;

    showSlide(slideIndex);
}


/* Automatic slider */

setInterval(() => {

    slideIndex++;

    showSlide(slideIndex);

}, 4000);