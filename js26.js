'use strict'

/*Программа должна спросить у пользователя количество денег, которое он хочет положить в банк.
 Пользователь должен ввести целое число, а программа должна выдать соответствующее сообщение:
 "Ваша сумма в 101 рубль успешно зачислена." - в случае если пользователь ввел 101.
 "Ваша сумма в 10020 рублей успешно зачислена." - в случае если пользователь ввел 10020.
 "Ваша сумма в 120104 рубля успешно зачислена." - в случае если пользователь ввел 120104.
 Если пользователь введет любое другое целое число, программа также должна выдать соответствующее сообщение,
 в котором будет отображено это число, а также поставить верное окончание в слове "рубль". Для получения верного
 склонения слова (любого слова с числом) вам необходимо создать функцию.
 */

let sum = +(prompt('Какую сумму Вы желаете положить в банк ?'));
alert(`Ваша сумма в ${sum} ${end(sum)} успешно зачислена.`);


/**
 * В функию передается сумма которую полюзователь вводит через prompt
 * Путем вычисления остатка отделения опеределяем окончание
 * @param sum{number}
 * @returns {string}
 */
function end(sum) {
    let rez = sum % 10;
    if (rez === 1) {
        return 'рубль'
    } else if (rez === 0) {
        return 'рублей'
    } else if (rez >= 2 && rez <= 5) {
        return 'рубля'
    } else if (rez <= 9 && rez >= 6) {
        return 'рублей'
    }

}












































