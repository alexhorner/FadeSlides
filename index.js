var slidePos = 0;
var slides = document.getElementById("slideshow").querySelectorAll("img");
var slideCounter = document.getElementById("slideshow-position");
var slideAuto = document.getElementById("slideshow-auto");
slideCounter.innerText = (slidePos + 1) + "/" + slides.length;

function forwardSlide() {
    if(slidePos == slides.length - 1){
        slides[slides.length - 1].classList.remove("visible");
        slides[0].classList.add("visible");
        slidePos = 0;
    }else{
        slides[slidePos].classList.remove("visible");
        slides[slidePos + 1].classList.add("visible");
        slidePos++;
    }

    slideCounter.innerText = (slidePos + 1) + "/" + slides.length;
}

function backwardSlide() {
    if(slidePos == 0){
        slides[0].classList.remove("visible");
        slides[slides.length - 1].classList.add("visible");
        slidePos = slides.length - 1;
    }else{
        slides[slidePos].classList.remove("visible");
        slides[slidePos - 1].classList.add("visible");
        slidePos--;
    }

    slideCounter.innerText = (slidePos + 1) + "/" + slides.length;
}

setInterval(function(){
    if(slideAuto.checked){
        forwardSlide();
    }
}, 2000);