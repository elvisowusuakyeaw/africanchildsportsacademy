/*=====================================================
AFRICAN CHILD SPORTS ACADEMY
MAIN JAVASCRIPT
=====================================================*/

/*
// ==============================
// HERO SLIDER
// ==============================

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(index) {

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");

}

function nextSlide() {

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);

}

// Change slide every 5 seconds

setInterval(nextSlide, 5000);
*/

/*====================================================
PREMIUM HERO SLIDER
====================================================*/

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

const nextBtn = document.querySelector(".next-slide");
const prevBtn = document.querySelector(".prev-slide");


let current = 0;

function updateSlider(index){

    slides.forEach(slide=>slide.classList.remove("active"));

    dots.forEach(dot=>dot.classList.remove("active"));

    slides[index].classList.add("active");

    dots[index].classList.add("active");

}

function nextSlide(){

    current++;

    if(current >= slides.length){

        current = 0;

    }

    updateSlider(current);

}

function prevSlide(){

    current--;

    if(current < 0){

        current = slides.length - 1;

    }

    updateSlider(current);

}

if (nextBtn && prevBtn) {

    nextBtn.addEventListener("click", nextSlide);

    prevBtn.addEventListener("click", prevSlide);

}

dots.forEach((dot,index)=>{

    dot.addEventListener("click",()=>{

        current = index;

        updateSlider(current);

    });

});

setInterval(nextSlide,6000);

// ==============================
// STICKY HEADER
// ==============================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 100) {

        header.style.background = "#0B4EA2";
        header.style.padding = "12px 0";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.15)";

    } else {

        header.style.background = "transparent";
        header.style.padding = "20px 0";
        header.style.boxShadow = "none";

    }

});

// ==============================
// MOBILE MENU
// ==============================
/*
const menuBtn = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("show");

    if (navLinks.classList.contains("show")) {

        menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';

    } else {

        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';

    }

});*/

const menuBtn = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        console.log("Menu clicked");

        navLinks.classList.toggle("show");

    });

}

// ==============================
// ACTIVE NAVIGATION
// ==============================

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {

    link.addEventListener("click", () => {

        links.forEach(item => item.classList.remove("active"));

        link.classList.add("active");

    });

});

// ==============================
// SCROLL REVEAL (Foundation)
// ==============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show-element");

        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll("section").forEach(section => {

    observer.observe(section);

});

console.log("African Child Sports Academy Website Loaded Successfully");

/*==================================
SCROLL TO TOP
==================================*/

const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if(window.scrollY > 500){

        scrollBtn.classList.add("active");

    }else{

        scrollBtn.classList.remove("active");

    }

});

if (scrollBtn) {
scrollBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
}

/*==============================================
ANIMATED COUNTERS
==============================================*/

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;
        const target = Number(counter.dataset.target);
        const duration = 2000; // 2 seconds
        const stepTime = Math.max(10, duration / target);

        let current = 0;

        const timer = setInterval(() => {

            current++;

            counter.textContent = current;

            if (current >= target) {

                counter.textContent = target + "+";
                clearInterval(timer);

            }

        }, stepTime);

        observer.unobserve(counter);

    });

}, {
    threshold: 0.5
});

counters.forEach(counter => {

    counterObserver.observe(counter);

});

/*==============================================
GALLERY LIGHTBOX
==============================================*/

document.addEventListener("DOMContentLoaded", () => {

    const galleryImages = document.querySelectorAll(".gallery-item img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeLightbox = document.querySelector(".lightbox-close");

    console.log(lightbox);
    console.log(lightboxImg);
    console.log(closeLightbox);

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        console.log("IMAGE CLICKED");

        lightbox.classList.add("show");
        lightboxImg.src = image.src;
        lightboxImg.alt = image.alt;

    });

});

    if (lightbox && lightboxImg && closeLightbox) {

    galleryImages.forEach(image => {

        image.addEventListener("click", () => {

            lightbox.classList.add("show");
            lightboxImg.src = image.src;
            lightboxImg.alt = image.alt;

        });

    });

    closeLightbox.addEventListener("click", () => {

        lightbox.classList.remove("show");

    });

    lightbox.addEventListener("click", e => {

        if (e.target === lightbox) {

            lightbox.classList.remove("show");

        }

    });

}

});

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    setTimeout(() => {
        preloader.classList.add("hide");
    }, 3200);
});


