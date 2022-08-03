class Bascket{
    constructor({pizzaSelector, itemSelector, btnSelector }){
        this.root = document.querySelector(pizzaSelector);
        this.body = this.root.querySelector('.middle__slider');
        this.pizzaEl = Array.from(this.root.querySelectorAll(itemSelector));
        this.buttonsEl = Array.from(this.root.querySelectorAll(btnSelector));
        this.currentPizza = 0;
        this.buttonsEl.forEach(button => {
            button.addEventListener('click', () => {
                button.classList.toggle('chosen--btn');

            });
        });
        
        console.log(this.buttonsEl);
    }

    choose(pizzaIdx){
        const chooseItem = this.pizzaEl[pizzaIdx];
        if(!pizzaIdx){
            return null;
        }
        this.currentPizza = pizzaIdx;
        this.render();
    }

    render(){
        const chooseItem = this.pizzaEl[this.currentPizza];
        this.pizzaEl.forEach((pizzaItem, pizzaIdx) => {
            if (pizzaIdx >= this.currentPizza){
                pizzaItem.classList.toggle('chosen--pizza')
            }
        });
    }
    
}

console.log(new Bascket({
    pizzaSelector: '.container__pizza',
    itemSelector: '.pizza--item',
    btnSelector: '.button__bascket',
    toggleBtnSelector: 'chosen--btn'
}));

