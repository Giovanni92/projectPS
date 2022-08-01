

const root = document.querySelector('.container__pizza');
const body = document.querySelector('.middle__slider');
const itemsPizza = Array.from(body.querySelectorAll('.pizza--item'));
const buttons = Array.from(body.querySelectorAll('.button__bascket'));

for (let i = 0; i <= buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        buttons[i].classList.toggle('chosen--btn');
        for (let k = 0; k <= itemsPizza.length; k++) {
            itemsPizza[k].classList.toggle('chosen--item');
        }           
    });
    
}

