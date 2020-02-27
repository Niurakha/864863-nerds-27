var slides = document.querySelectorAll('.slider-list .slider-item');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,4000);
 
function nextSlide() {
    slides[currentSlide].className = 'slider-item';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slider-item slider-item-showing';
}