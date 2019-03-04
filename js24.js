'use strict'

/*Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя параметрами.
 Обязательно использовать оператор return.
 */

let a = +(prompt('Введите первое значение'));
let b = +(prompt('Введите второе значение'));

alert(`Сумма введеных чисел равна ${sum(a, b)}`);
alert(`Разность введных чисел равна ${difference(a, b)}`);
alert(`Произведение введенных чисел равно ${product(a, b)}`);
alert(`Производное от деления введенных чисел равно ${division(a, b)}`);


/**
 * Функция возвращает сумму
 * @param a{number}
 * @param b{number}
 * @returns {number}
 */
function sum(a, b) {
    return a + b;
}

/**
 * Функция возвращает разность
 * @param a{number}
 * @param b{number}
 * @returns {number}
 */
function difference(a, b) {
    return a - b;
}

/**
 * Функция возвращает произведение чисел
 * @param a{number}
 * @param b{number}
 * @returns {number}
 */
function product(a, b) {
    return a * b;
}

/**
 * Функция возвращает производное от деления
 * @param a{number}
 * @param b{number}
 * @returns {number}
 */
function division(a, b) {
    return a / b;
}
