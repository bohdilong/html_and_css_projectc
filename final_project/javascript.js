function openForm() {// these functions open and close the contact form
    document.getElementById("myform").style.display = "block";
}

function closeForm() {
    document.getElementById("myform").style.display = "none";
}

var slideIndex = 1; // this function displays the first image in the slideshow when the page loads
showSlides(slideIndex);

function plusSlides(n) { // this function changes the slide when the left or right arrows are clicked
    showSlides(slideIndex +=n);
}

function currentSlide(n) { // this function changes the slide when the dots are clicked
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides"); // this takes all elements with the class name "mySlides" and stores them in the variable array "slides"
    var dots = document.getElementsByClassName("dot"); // this takes all elements with the class name "dot" and stores them inthe variable array "dots"
    if (n > slides.length) {slideIndex = 1}; // if n (thenumber passed into the function) is greater than the length of the array "slides", the slideIndex is set to 1
    if (n < 1) {slideIndex = slides.length}; //if n if less than 1, the slideIndex is set to the length of the array "slides"
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // this for loop takes each item in the array "slides" and sets the display th none
    }
    for (i = 0; i < slides.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); // this for loop thaes each item in the array "dots" and removes "active" which removes the active styling
    }
    slides[slideIndex - 1].style.display = "block"; // this displays the image in the slideshow
    dots[slideIndex - 1].className += " active"; // this adds the active styling to the dot associated with the image
}

// this code will create close the contact form when the user clicks off of it
// the first step is to add an event listener for any clicks on the website
document.addEventListener("click", function(event){
    // here we stated that if the click happens on the cancel button or anywhere that is not the contact form and the click does not happen on any element with contact class then call the closeForm() function
    if (event.target.matches(".cancel") || !event.target.closest(".form-popup") && !event.target.closest(".Pop_Up_Button") && !event.target.closest(".contact")) {
        closeForm()
    }
}, false)