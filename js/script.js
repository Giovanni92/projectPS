class Burger{
    constructor({burgerSelector, navSelector, navToggleSelector, burgerToggleSelector}) {
        this.bodyAll = document.querySelector("body");
        this.burgerBtn = document.querySelector(burgerSelector);
        this.navEl = document.querySelector(navSelector);

        this.burgerBtn.addEventListener('click', () => {
            this.navEl.classList.toggle(navToggleSelector);
            this.burgerBtn.classList.toggle(burgerToggleSelector);
            this.bodyAll.classList.toggle('lock');
        });
        
    }
}

new Burger ({
    burgerSelector:    '.header__burger', 
    navSelector:       '.header__nav', 
    navToggleSelector: 'header__nav--open',
    burgerToggleSelector: 'header__burger--open'
});