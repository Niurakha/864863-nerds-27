var slides = document.querySelectorAll(".slider-item");
var dots = document.querySelectorAll(".slider-dots_item");
var index = 0;
var slideInterval = setInterval(moveSlide, 2000);




function prevClass(obj, index, strClass) {
  obj[index].className = strClass;
}

function nextClass(obj, index, strClass) {
  obj[index].className = strClass;
}

function moveSlide() {
  prevClass(slides, index, "slider-item");
  prevClass(dots, index, "slider-dots_item");
  index++;
  if (index >= slides.length) {
    index = 0;
  }
  nextClass(slides, index, "slider-item slider-item-showing");
  nextClass(dots, index, "slider-dots_item active");
}

function stopSlide() {
  clearInterval(slideInterval);
}

function target() {
  prevClass(slides, index, "slider-item");
  prevClass(dots, index, "slider-dots_item");
  index = parseInt(this.dataset.target);
  nextClass(slides, index, "slider-item slider-item-showing");
  nextClass(dots, index, "slider-dots_item active");
}

Array.prototype.map.call(dots, function(e) {
  e.addEventListener("click", target);
  e.addEventListener("mouseenter", stopSlide);
  e.addEventListener("mouseleave", function() {
    slideInterval = setInterval(moveSlide, 3000);
  });
});
