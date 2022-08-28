class Slider {
    constructor(sliderSelector) {
        this.root = document.querySelector(sliderSelector);
        this.body = this.root.querySelector('.middle__slider');
        this.prevBtn = this.root.querySelector('.middle__prev');
        this.nextBtn = this.root.querySelector('.middle__next');
        this.items = Array.from(this.root.querySelectorAll('.slider__item'));
        this.currentSlide = 0;
        this.visibleSlides = 3;

        this.prevBtn.addEventListener('click', this.prev.bind(this));
        this.nextBtn.addEventListener('click', this.next.bind(this));
    }

    show(slideIdx){
        const shownSlide = this.items[slideIdx];
        if (!shownSlide){
            return null;
        }
        this.currentSlide = slideIdx;
        this.render();
    }

    next(){
        this.show(this.currentSlide + 1);
    }

    prev(){
        this.show(this.currentSlide - 1);
    }

    render(){
        const shownSlide = this.items[this.currentSlide];
        const slideRect = shownSlide.getBoundingClientRect();
        const bodyRect = this.body.getBoundingClientRect();
        const translateX = bodyRect.left - slideRect.left;
        console.log( shownSlide );
        console.log({ slideRect, bodyRect });
        this.body.style.transform = `translate(${translateX}px)`;
        this.items.forEach((slide, slideIdx) => {
            if (slideIdx < this.currentSlide && slideIdx > this.currentSlide + this.visibleSlides){
                slide.classList.add('item--hidden')
            } else {
                slide.classList.remove('item--hidden')
            }
        });

        if(this.currentSlide > this.items.length - this.visibleSlides - 1){
            this.nextBtn.classList.add('next--hidden');
        } else{
            this.nextBtn.classList.remove('next--hidden');
        }

        // if(this.currentSlide === 0){
        //     this.prevBtn.classList.add('previous--hidden');
        // } else {
        //     this.prevBtn.classList.remove('previous--hidden');
        // }
        if(this.currentSlide > 0){
            this.prevBtn.classList.remove('previous--hidden');
        } else if (this.currentSlide === 0){
            this.prevBtn.classList.add('previous--hidden')
        }
    }
}

const slider1 = new Slider('.middle__container');
console.log(new Slider('.middle__container'));

slider1.show(0);
