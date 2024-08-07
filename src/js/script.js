'use strict';

let item = document.querySelectorAll('.services__item_basket');
let count = document.querySelector('.form__count');

item.forEach(el =>{
        count.textContent = Number(count.textContent) + 1;
});
