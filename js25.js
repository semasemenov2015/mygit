'use strict'

/*Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
 где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
 переданного значения операции (использовать switch) выполнить одну из арифметических операций
 (использовать функции из задания 4) и вернуть полученное значение.
 */

let a = +(prompt('Введите первое значение'));
let b = +(prompt('Введите второе значение'));
let c = prompt('Какое действие должно быть произведено с введенными числами ( /, *, - ,+ )');

mathOperation(a, b, c);

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+':
            alert(`Сумма введенных чисел равна ${sum(arg1, arg2)}`)
            break;
        case '-':
            alert(`Разность введенных чисел равна ${difference(arg1, arg2)}`)
            break;
        case '*':
            alert(`Произведение введенных чисел равно ${product(arg1, arg2)}`)
            break;
        case '/':
            alert(`Производное от деления чесел равно ${division(arg1, arg2)}`)
            break;
    }
}

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