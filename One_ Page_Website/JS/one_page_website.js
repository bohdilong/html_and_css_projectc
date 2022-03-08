// open modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

// close Modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showslides(slideIndex);

//next and previous controls
function plusSlide(n) {
    showslides(slideIndex += n);
}

//thumbnail image controls
function currentSlide(n) {
    showslides(slideIndex = n);
}

function showslides(n) {
    var i;
    var slides = document.getElementsByClassName("myslides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex-1].style.display = "block";
    captionText.innerHTML = dots[slideIndex-1].alt;
}