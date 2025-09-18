const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const thumbnails = document.querySelectorAll('.thumbnails img');

let index = 0;

function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function showSlide(i) {
    index = (i + images.length) % images.length;
    const slideWidth = document.querySelector('.carousel').clientWidth;
    slides.style.transform = `translateX(${-index * slideWidth}px)`;

    // highlight active thumbnail
    thumbnails.forEach((thumb, tIndex) => {
        thumb.classList.toggle("active", tIndex === index);
    });
}

nextBtn.addEventListener('click', () => showSlide(index + 1));
prevBtn.addEventListener('click', () => showSlide(index - 1));

thumbnails.forEach((thumb, tIndex) => {
    thumb.addEventListener('click', () => showSlide(tIndex));
});

// Auto-play every 3s
setInterval(() => showSlide(index + 1), 3000);

// Recalculate on resize
window.addEventListener('resize', () => showSlide(index));

// Init
showSlide(0);