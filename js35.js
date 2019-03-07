'use strict';

/*5*. Дан массив (создать такой же, с такими же значениями):
 ```
 const arr = [
 [2, 4, 6],
 [1, 5, 10],
 [7, 4, 1],
 ];
 ```
 Задания:
 1 Найти массив, у которого сумма всех чисел максимальна, вывести в console.log
 индекс этого массива.
 2 Получить и вывести в console.log минимальное значение найденное в массиве,
 который мы получили в*/

const arr = [
    [2, 4, 6],
    [1, 5, 10],
    [7, 4, 1],
];

let maxSumOfArrayIndex = 0;
let maxSumOfArray = arraySum(arr[maxSumOfArrayIndex]);

for (let i = 1; i < arr.length; i++) {
    let max = arraySum(arr[i]);
    if (max > maxSumOfArray) {
        maxSumOfArray = max;
        maxSumOfArrayIndex = i;
    }
}


let arrayMax = [];
arrayMax = (arr[maxSumOfArrayIndex]);
//Для того что бы определить минимльное значение массива найдем его максимум
let max = 0;

for (let i = 0; i < arrayMax.length; i++) {

    if (max < arrayMax[i]) {
        max = arrayMax[i];
    }
}

//Присваеваем максимально значение массива переменной min
let min = max;
for (let i = 0; i < arrayMax.length; i++) {
    if (min > arrayMax[i]) {
        min = arrayMax[i];
    }
}
console.log(`Массив сумма элементов которого максимальна ${arr[maxSumOfArrayIndex]} минимальное значение элемента в этом масиве ${min}`);

/**
 * Функция определяет сумму элементов массива
 * @param arr - принимает массив под индексом [i]
 * @returns {number} Возвращает сумму элементов массива под индексом [i]
 */
function arraySum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {

        sum = arr[i] + sum;
    }
    return sum;
}