'use strict';

let rez1 = console.log(10 + 10 + '10');
/*первые два операнда указаны в числовом формате, третий в строковом, такм образом мы
 сложили первые два, получилось 20 и контектенировали 10. Итог 2010*/
let rez2 = console.log(10 + '10' + 10);
/*первый операнд число, второй строка, так как все действия равны по приоритету
 выполнение происходит по порядку, таким образом мы контектенирует 10 и 10, получаем 1010, далее после выполнения первого
 действия мы получаем строковое значение (1010) и путем присоединения к нему третьго операнда получаем 101010 */
let rez3 = console.log(10 + 10 + +'10');
/*первые два операнда число третий строка, однако оператор + стоящий перед ним
 преобразует его в число, по итогу получаем упорядочное сложение числе 30*/
let rez4 = console.log(10 / -'');
/*В данном случае строковое выражение преобразуем в -0 и делим на это значение, получаем
 -Infinity*/
let rez5 = console.log(10 / +'2,5');
/*Полагаю что в данном случаем мы пытаемся преобразовать в число значение с запятой
 так как джава скрипт не знает таких чисел в итоге получаем Nan*/