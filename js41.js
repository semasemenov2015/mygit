'use strict';

/*Написать функцию, преобразующую число в объект. Передавая на вход число в диапазоне
 [0, 999], мы должны получить на выходе объект, в котором в соответствующих свойствах
 описаны разряды числа:
 - единицы (в свойстве firstDigit)
 - десятки (в свойстве secondDigit)
 - сотни (в свойстве thirdDigit)
 Например, для числа 45 мы должны получить следующий объект:*/

/**
 * Функция проверяет правильность введеных даных, в случае если данные верны, производится вызов расчета свойств
 * объекта, в следствии чего возвращаются разряды чисел. В случае если введенное число оказалось не верным, возвращеат
 * пустой объект путем вызова функции empty()
 * Принимает {number} num
 */
function okey(num) {
    if (!Number.isInteger(num) === true || num < 0 || num >= 999) {
        alert('Значение должно быть целым, не меньше нуля и не привышать 999');
        console.log(empty());
    } else {
        const getDigitsOfNumber = {};

        getDigitsOfNumber.firstDigit = num % 10;

        getDigitsOfNumber.secondDigit = (Math.floor(num / 10) % 10);

        getDigitsOfNumber.thirdDigit = Math.floor(num / 100) % 10;

        return console.log(getDigitsOfNumber)

    }
}

/**
 * Функция предназначена для возврата пустого объекта
 * @returns {{}}
 */
function empty() {
    return {};
}


let num = +(prompt(`Введите значение от 0 до 999`));


okey(num);
