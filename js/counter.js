

const root = document.querySelector('.container__pizza');
const body = document.querySelector('.middle__slider');
const itemsPizza = Array.from(body.querySelectorAll('.pizza--item'));
const buttons = Array.from(body.querySelectorAll('.button__bascket'));

for (let i = 0; i <= buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        buttons[i].classList.toggle('chosen--btn');
        itemsPizza[i].classList.toggle('chosen--item');
    });
}

for (let i = 0; i <=itemsPizza.length; i++) {
    console.log (itemsPizza[i]);
}
