'use strict';
/// Selecting elements from index.html
const slideContainer = document.getElementById('testimony-container');
const slides = document.querySelectorAll('.slide')
const leftArrow = document.querySelector('.arrow-left')
const rightArrow = document.querySelector('.arrow-right')
const dotsContainer = document.querySelector('.dots-container')





/// Function Carousel/slide on index.html
const initSlides = () => {
    let curSlide = 0;
    let maxSlide = slides.length -1 ;
    function getSlide (num) {
        slides.forEach((slide, index)=> {
            slide.style.transform = `translateX(${120 * (index - num)}%)`
        })
    }
    getSlide(0)

    function createSlidesDot () {
        slides.forEach((_, index)=> {
            dotsContainer.insertAdjacentHTML('beforeend',
            `<button class="dot" data-slide="${index}"></button>`
            )
        })
        
    }
    createSlidesDot()

    function activeSlideDot (s) {
        document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('dot--active'))
        document.querySelector(`.dot[data-slide="${s}"]`).classList.add('dot--active')
    }
    activeSlideDot(0)

    function clickDot (e) {
        const clickdot = e.target.classList.contains('dot')
        const {slide} = e.target.dataset;
        if(!clickdot) return;
        getSlide(slide)
        activeSlideDot(slide)
    }

    /// Slide buttons 
    function nextSlide () {
        if(curSlide === maxSlide) {
            curSlide = 0
        } else {
            curSlide++;
        }
        getSlide(curSlide)
        activeSlideDot(curSlide)
    }

    function prevSlide () {
        if(curSlide === 0) {
            curSlide = maxSlide
        } else {
            curSlide--
        }
        getSlide(curSlide)
        activeSlideDot(curSlide)
    }

    /// Click Event Listeners
    rightArrow.addEventListener('click', nextSlide)
    leftArrow.addEventListener('click', prevSlide)
    dotsContainer.addEventListener('click', clickDot )
}
initSlides()

