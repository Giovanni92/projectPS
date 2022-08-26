const popupBody = document.querySelector('.popup');
const popupBackgr = document.querySelector('.popup__bg')
const popupBtn = document.querySelector('.popup__img');
const pizzaBtn = Array.from(document.querySelectorAll('.button__bascket'));

pizzaBtn.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('chosen--btn');
        popupBody.classList.toggle('active--popup');  
        popupBackgr.classList.toggle('active--popup__bg');   
    });
})

popupBtn.addEventListener('click', () => {
    popupBody.classList.remove('active--popup');
    popupBackgr.classList.remove('active--popup__bg');  
})

popupBackgr.addEventListener('click', () => {
    popupBody.classList.remove('active--popup');
    popupBackgr.classList.remove('active--popup__bg');
})