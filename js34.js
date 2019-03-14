'use strict';

/*4*. С помощью цикла while вывести все простые числа в промежутке от 0 до 100
 (можно без оптимизаций).*/
/**Функция проводит проверку числа, а именно явлется ли оно опростым, возвращает простое число
 * в противном случае возвращает false
 * @param {number}i
 * @returns {number}
 */
function check(i) {
    let chekin = 0;
    if (!(i === 0 || i === 1)) {
        let arr = [];
        for (let kol = 1; kol <= i; kol++) {
            arr.push(kol);
        }
        for (let kol = 0; kol <= arr.length; kol++) {
            let rez = arr[kol];
            if (i % rez === 0)
                chekin++;
        }
        if (chekin === 2) {
            return i;
        } else
            return false;


    } else {
        return false;
    }
}

let i = 0;
while (i <= 100) {
    if (check(i))
        console.log(`${i} - Простое число`);
    i++;

}
