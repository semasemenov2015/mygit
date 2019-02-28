'use strict';

let number = +prompt('Введите номер билета');
let number6 = number % 10;
let number5 = (Math.floor(number / 10)) % 10;
let number4 = (Math.floor(number / 100)) % 10;
let number3 = (Math.floor(number / 1000)) % 10;
let number2 = (Math.floor(number / 10000)) % 10;
let number1 = (Math.floor(number / 100000)) % 10;

if ((number1 + number2 + number3) === (number4 + number5 + number6)) {
    alert('Поздравляем Вы являетесь обладателем "счастливого" билета')
} else {
    alert('К сожалению Ваш билет не является "счастливым"')
}