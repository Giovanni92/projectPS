class Burger{
    constructor({burgerSelector, navSelector, navToggleSelector, burgerToggleSelector}) {
        this.burgerBtn = document.querySelector(burgerSelector);
        this.navEl = document.querySelector(navSelector);

        this.burgerBtn.addEventListener('click', () => {
            this.navEl.classList.toggle(navToggleSelector);
            this.burgerBtn.classList.toggle(burgerToggleSelector);
        });
        
    }
}

new Burger ({
    burgerSelector:    '.header__burger', 
    navSelector:       '.header__nav', 
    navToggleSelector: 'header__nav--open',
    burgerToggleSelector: 'header__burger--open'
});