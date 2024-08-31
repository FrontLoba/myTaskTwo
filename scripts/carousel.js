// Java Script for the Caurosel section on Home page
const slidesContainer = document.getElementById('testimony-container');
const arrows = document.querySelectorAll('.arrow')
const slides = document.getElementsByClassName('slide');
const arrowLeft = document.querySelector('#arrow-left');
const arrowRight = document.querySelector('#arrow-right');


arrowLeft.addEventListener('click', () => {
  for (let i = slidesContainer.length - 1; i > 0; i--) {
   slidesContainer[i]
  }
});
arrowRight.addEventListener('click', () => {
  for (let i = 1; i < slidesContainer.length; i++){
    slidesContainer[i]
  }
})

/*
let slideIndex = 1;
showSlides(slideIndex);

function arrowIndicator(n) {
  showSlides(slideIndex +=n)
};

function viewedSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
let i;
let slides;
let arrows;
if (n > slides.length) {
  slideIndex = 1
}
if (n < 1) {
  slideIndex = slides.length
}
for (i = 0; i < slides.length; i++) {
  slides[i].style.display = 'none';
}
slides[slideIndex - 1].style.display = 'block'

}

arrowLeft.addEventListener('click', arrowIndicator(-1));
arrowRight.addEventListener('click', arrowIndicator(1));
*/
