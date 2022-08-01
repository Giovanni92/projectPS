class Bascket {
    constructor({pizzaSelector, markedPizzaSelector, chosenBtnSelector}){
        this.root = document.querySelector(pizzaSelector);
        this.body = this.root.querySelector('.middle__slider');
        this.itemsPizza = Array.from(this.root.querySelectorAll('.pizza--item'));
        
        this.button = this.root.querySelectorAll('.slider__button');
        
        this.button.addEventListener('click', () => {
            this.itemsPizza.classList.toggle(markedPizzaSelector);
            this.button.classList.toggle(chosenBtnSelector);
        });

        console.log(this.button);
        console.log(this.itemsPizza);
    }
    
}

new Bascket ({
    pizzaSelector: '.container__pizza',
    markedPizzaSelector: 'marked--item',
    chosenBtnSelector: 'chosen--btn',
});



