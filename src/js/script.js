'use strict';

let item = document.querySelectorAll('.services__item_basket');
let count = document.querySelector('.form__count');
let btn = document.querySelectorAll('.service-card__btn');

item.forEach(el =>{
        count.textContent = Number(count.textContent) + 1;
});

btn.oncklick = function(event) {
        event.preventDefault;
}
