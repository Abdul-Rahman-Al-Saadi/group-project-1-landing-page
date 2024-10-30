window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;

    // Adjust background position for parallax effect
    document.querySelector('.hero-section').style.backgroundPositionY = `${scrollPosition * 0.5}px`;

    // Adjust text and button position
    const heroContents = document.getElementById('hero-contents');
    heroContents.style.transform = `translateY(${scrollPosition * 0.3}px)`;
});


// Function used in slider:

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

