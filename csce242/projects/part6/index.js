let index = 1;
showSlides(index);

function nextSlide(val) {
    showSlides(index += val);
}

function currentSlide(val) {
    showSlides(index = val);
}

function showSlides(val) {
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");
    if (val > slides.length) {
        index = 1;
    }
    if (val < 1) {
        index = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[index - 1].style.display = "block";
    dots[index - 1].className += " active";
}