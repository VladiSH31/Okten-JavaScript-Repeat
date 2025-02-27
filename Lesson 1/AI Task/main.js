/*
Завдання 1: Оголошення та ініціалізація змінних
Оголосіть три змінні: name, age і isStudent.
Ініціалізуйте їх такими значеннями:
name — ваше ім'я (рядок),
age — ваш вік (число),
isStudent — true або false (логічне значення).
Виведіть ці змінні в консоль.
*/
let name = 'Владислав';
let age = 36;
let isStudent = true;

console.log(name, age, isStudent);

/*
Завдання 2: Зміна значення змінної
Оголосіть змінну favoriteColor і присвойте їй значення вашого улюбленого кольору.
Потім змініть значення цієї змінної на інший колір.
Виведіть початкове та змінене значення в консоль.
*/

let favoriteColor = 'white';
console.log(favoriteColor);
favoriteColor = 'black';
console.log(favoriteColor);

/*
Завдання 3: Робота з const і масивами
Оголосіть змінну const з ім'ям hobbies і ініціалізуйте її масивом із трьох ваших хобі.
Додайте ще одне хобі до цього масиву за допомогою методу push.
Виведіть оновлений масив у консоль.
*/

const hobbies = ['football', 'basketball', 'JavaScript'];
hobbies.push('computer games');
console.log(hobbies);

/*
Завдання 1: Визначення типів даних
Оголосіть змінні з такими значеннями:
Рядок: ваше ім'я,
Число: ваш вік,
Логічне значення: чи ви студент,
undefined: змінна без значення,
null: змінна зі значенням null.
Використайте оператор typeof, щоб визначити тип кожної змінної, і виведіть результат у консоль.
 */
{
    let name = 'Vladsilav';
    console.log(typeof name, name);

    let age = 36;
    console.log(typeof age, age);

    let isStudent = true;
    console.log(typeof isStudent, isStudent);

    let a = undefined;
    console.log(typeof a, a);

    let b = null;
    console.log(typeof b, b);

}
/*
Завдання 2: Конкатенація рядків
Оголосіть дві змінні: firstName і lastName, і присвойте їм ваше ім'я та прізвище.
Створіть нову змінну fullName, яка об'єднає ці два рядки з пробілом між ними.
Виведіть fullName у консоль.
 */

let firstName = 'Vladislav';
let lastName = 'Sheremet';
let fullName = firstName + ' ' + lastName;
console.log(fullName);

/*
Завдання 3: Перетворення типів
Оголосіть змінну numberAsString зі значенням '123' (рядок).
Перетворіть її на число за допомогою Number() і збережіть у новій змінній convertedNumber.
Додайте до convertedNumber число 10 і виведіть результат у консоль.
 */
let numberAsString = '123';

function Number(value) {
    return +value;
}

console.log(Number(numberAsString) + 10);
