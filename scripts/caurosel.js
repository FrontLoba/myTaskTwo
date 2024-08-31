const slider = document.getElementById('testimony-container');
const slides = document.querySelectorAll('.slide');
const leftBtn = document.querySelector("#arrow-left");
const rightBtn = document.querySelector("#arrow-right");

const dotContainer = document.querySelector('.dot-container')
// slider.style.transform = 'scale(0.8) translateX(100px)';
// slider.style.overflow = 'hidden';

// slides.forEach((s, i) => (s.style.transform =` translateX(${100 * i}%)`))

const createDots = function () {
    dotContainer.forEach
slides.forEach((_,i)=> {
    dotContainer.insertAdjacentHTML('beforeend', `<button class="dots_dot" data-slide="${i}"></button>`);
});
}
createDots();

const maxSlide = slides.length - 1;
let curSlide = 0;

const goto = function(slide) {
    slides.forEach((s, i) => (s.style.transform =` translateX(${100 * (i-slide)}%)`)
    );
    // slide.classList.toggle('hide-slides')
}
goto(0);

const nextSlide = function () {
    if(curSlide === maxSlide) {
        curSlide = 0;
    }
    else {
        curSlide++;
    }
   goto(curSlide);
}

const prevSlide = function (){
    if(curSlide === 0) {
        curSlide = maxSlide;
    }
    else {
        curSlide--
    };
    goto(curSlide)
}
rightBtn.addEventListener('click', nextSlide);

leftBtn.addEventListener('click', prevSlide);

dotContainer.addEventListener('click', function (e) {
    const dotTarget = e.target.classList.container('dots-dot')
})





/*
let slidexIndex = 1;
showSlides(slidexIndex);

// Next/Previous controls
function arrow(n) {
    showSlides(slidexIndex +=n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('slides');
    
    if(n > slides.length) {
        slidexIndex = 1
    }
    if(n < 1) {
        slidexIndex = slides.length
    }
    
    for (i = 0; i < slides.length; i++) {
        // slides[i].style.transition = 'transform: -50%'
        slides[i].style.display = 'none'
    }
    slides[slidexIndex-1].style.display = 'block'

// slidexIndex++;
// if (slidexIndex > slides.length) {slidexIndex = 1;}
//     slides[slidexIndex - 1].style.display = 'block';
//     setTimeout(showSlides, 2000)
}

let arrowLeft = document.getElementById('arrow-left')
let arrowRight = document.getElementById('arrow-right')*/
