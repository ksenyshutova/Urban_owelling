'use strict';

let item = document.querySelectorAll('.services__item_basket');
let count = document.querySelector('.form__count');

count.textContent = item.length;