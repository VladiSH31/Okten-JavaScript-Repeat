// JS preview | Змінні

console.log('asd');

// numbers - числа
// strings - стрінгові значення типу текстові
// boolean - булеві значення true або false

var a; /* процес декларації змінної.
У JavaScript декларація змінної — це процес створення змінної, яка може зберігати дані (значення). Це перший крок перед тим, як використовувати змінну в коді. У JavaScript є три ключові способи оголошення змінних: за допомогою ключових слів var, let і const.

Основні поняття декларації змінної
Ключове слово: Використовується для оголошення змінної (var, let, const).
Ім'я змінної: Унікальне ім'я, яке ви даєте змінній, щоб до неї можна було звертатися.
Присвоєння значення (опціонально): Ви можете одразу надати змінній значення під час її оголошення. */
a = 'Hello World'; /* ініціалізація змінної

Ініціалізація змінної — це процес присвоєння початкового значення змінній під час її оголошення.
У JavaScript ініціалізація може відбуватися одразу при декларації змінної або пізніше, після її оголошення. */

var b = 'Hello Vladi'; /* інлайн ініціалізація */

{
    let cc = 'Hi everyone';
    console.log(cc);
    var d = 'Goodbay everyone';

}

console.log(d);
let c = 'Hi everyone';
console.log(c);
/* var - відображається/доступна за блоком ініціалізації; let - доступна тільки у блоці ініціалізації.*/

/* Змінні не називаються починаючи з чисел, не розриваються пробілами не використовуються спец символи */

const PI = 3.14;
// PI = 123;
console.log(PI);

let abc = 'abc';
console.log(abc);
abc = 'cba';
console.log(abc);

/* const - не перевизначається декларуєця та ініціалізується тількі раз. let - змінна може перевизначатися */

// JS preview | Базові типи данних
{
    let a = 'Hello Vladi';

    console.log(typeof a, a);

    let b = '5';

    console.log(typeof b, b);

    let c = 5;

    console.log(typeof c, c);

    let d = true;

    console.log(typeof d, d);


}

// JS preview | Тип string та базові операції з ним
{
    let a = 'football';
    let b = "basketball";
    console.log(a, b);

    let greeting = 'Hello';
    let intro = 'my name is Vladi'

    let msg = greeting + intro;
    console.log(msg);
    let msg2 = greeting + ' ' + intro;
    console.log(msg2);
    let msg3 = `${greeting} ${intro}`;
    console.log(msg3);
}

// JS preview | Числа та операції з ними

let ab = 15000;
console.log(ab);
let ba = 3.142333;
console.log(ba);

console.log(10+20);
console.log(10-20);
console.log(10*20);
console.log(10/20);
console.log('Go');
console.log(11%3);
console.log(11%1);
console.log(11%2);
console.log(11%4);


console.log(0.1 + 0.2);

let big1 = 12372143289764364289756398265923n;
let big2 = BigInt(12372143289764364289756398265923);
console.log(big1 == big2);
console.log(big1 === big2);
console.log(big1 != big2);

// JS preview | Булевий тип та операції з ним

let aa = true;
console.log(typeof aa);

// > більше, < менше, >= більше або дорівнює, <= менше або дорівнює, == еквівалентно без урахування типу,
// === еквівалентно з урахуванням типу, != не еквівалентно без урахування типу, !== не еквівалентно з урахування типу

// JS preview | Приведення конвертація типів

console.log(typeof (100500 + ''));
console.log(typeof (100+200+''));
console.log(typeof ('' +100+200));
console.log(+'100500');
console.log(+'100500assd');
console.log(parseInt('100500assd'));
console.log(parseInt('100500.123456'));
console.log(parseFloat('100500.123456'));

console.log(!!1000); /* true */
console.log(!!0); /* false */
console.log(!!'qwe'); /* true */
console.log(!!''); /* false */
console.log(!!'0'); /* true */

console.log(true + '');
console.log(+false);
console.log(+true);

// JS preview | Визначення типів та інші типи і їх приведення
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof NaN);

console.log(!!0);
console.log(!!null);
console.log(!!undefined);
console.log(!!'');

console.log(!!'0');
console.log(!!' ');




