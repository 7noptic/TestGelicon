'use script';

let arrPrice = document.querySelectorAll('.cardItem__price'),
    finalPrice = document.querySelector('#finalprice'),
    finalPriceValue = 0,
    cardItem = document.querySelectorAll('.addCard');

cardItem[0].addEventListener('click', ()=>{addToCart(0)});
cardItem[1].addEventListener('click', ()=>{addToCart(1)});
cardItem[2].addEventListener('click', ()=>{addToCart(2)});

function addToCart(i) {
    finalPriceValue = finalPriceValue + parseInt(arrPrice[i].innerHTML, 10);
    finalPrice.innerHTML = finalPriceValue;
    cardItem[i].innerHTML = 'Добавлено';
    cardItem[i].style.backgroundColor = '#0c902b';
    cardItem[i].disabled = true;
}