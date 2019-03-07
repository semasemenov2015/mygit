'use strict';

/*3 Нарисовать горку с помощью console.log (используя цикл for), как показано на
 рисунке,
 только у вашей горки должно быть 20 рядов, а не 5:
 ```
 x
 xxx
 xxxxx
 xxxxxxx
 xxxxxxxxx
 ```*/

let x = 'x';
console.log(x);

for (let i = 0; i < 20; i++) {
    x = x + 'xx';
    console.log(x);
}