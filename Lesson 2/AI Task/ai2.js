// 1. Робота з масивами
// Створіть масив із 5 чисел.
//
// Виведіть перший і останній елемент масиву.
// Додайте новий елемент у кінець масиву.
// Видаліть перший елемент масиву.
// Виведіть довжину масиву.

let arr = [11, 22, 33, 44, 55]
console.log(arr[0]);
console.log(arr[4]);
arr.push(66);
console.log(arr);
arr.unshift(0);
console.log(arr);
console.log(arr.length);


// 2. Багатовимірні масиви
// Створіть двовимірний масив, який представляє таблицю 3x3 (наприклад, матрицю).
//
// Заповніть його числами від 1 до 9.
// Виведіть елемент із другого рядка та третього стовпця.
// Замініть значення в першому рядку та першому стовпці на 0.
// Виведіть оновлений масив.

let numbers = [
    [1, 2, 3],
    [3, 4, 5],
    [6, 7, 8]
]

console.log(numbers[1][2]);
numbers[0][0] = 0;
console.log(numbers);

// 3. Робота з об'єктами
// Створіть об'єкт, який представляє книгу. У нього мають бути такі властивості: title, author, year, genre.
//
// Виведіть назву книги та її автора.
// Додайте нову властивість rating із будь-яким числовим значенням.
// Видаліть властивість genre.
// Виведіть оновлений об'єкт.

let book = {
    title: 'Kobzar',
    author: 'Taras Shevchenko',
    year: 1888,
    genre: 'poetry'
}

console.log(book.title, book.author);
book.rating = 9.1;

delete book.genre;
console.log(book);


// 4. Внутрішні об'єкти
// Використайте об'єкт Math, щоб знайти:
// Квадратний корінь із числа 144.
// Найбільше число серед: 5, 10, 15, 20.
// Округліть число 3.14159 до двох знаків після коми.
// Використайте об'єкт Date, щоб вивести поточну дату та час.

console.log(Math.sqrt(144));
console.log(Math.max(5, 10, 15, 20));
let a = 3.14159;
console.log(a.toFixed(2));
console.log(Date());


// 5. Модифікація об'єктів
// Створіть об'єкт, який представляє студента: name, age, grades (масив із оцінками).
//
// Додайте метод addGrade, який додає нову оцінку до масиву grades.
// Додайте метод getAverageGrade, який обчислює середню оцінку студента.
// Використайте ці методи та виведіть середню оцінку студента.

let student = {
    name: 'Alison',
    age: 18,
    grades: [4, 5, 5, 5]
}

function addGrade(grade) {
    student.grades.push(grade);
}

addGrade(8);
console.log(student);

function getAverageGrade(grades) {
    let sum = 0;
    for (const grade of grades) {
        sum += grade;
    }
    return sum / grades.length;
}

console.log(getAverageGrade(student.grades));


// 6. Різниця між примітивами та референціальними типами
// Створіть змінну a зі значенням 10 і змінну b, яка дорівнює a. Змініть значення b на 20. Що буде з a?
// Створіть об'єкт obj1 і змінну obj2, яка дорівнює obj1. Змініть властивість у obj2. Що буде з obj1?

let aa = 10;
let b= a;

b = 20;
console.log(aa);

let obj1 ={
    name: 'John'
}

let obj2 = obj1;

obj2.name = 'Jacob';

console.log(obj1);


// 7. Логічні розгалуження if
// Напишіть програму, яка запитує у користувача його вік через prompt і:
//
// Якщо вік менше 18, виводить "Ви ще неповнолітній".
// Якщо вік від 18 до 60, виводить "Ви дорослий".
// Якщо вік більше 60, виводить "Ви пенсіонер".

let result = prompt('Скількі Вам років?');
if (result<18) {
    console.log("Ви ще неповнолітній");
} else if (result>=18 && result<60) {
    console.log("Ви дорослий");
} else if (result>60) {
    console.log("Ви пенсіонер");
}

// 8. Логічні розгалуження switch
// Напишіть програму, яка запитує у користувача день тижня (число від 1 до 7) і виводить назву дня:
//
// 1 — "Понеділок",
// 2 — "Вівторок",
// і так далі до 7 — "Неділя".
// Якщо введено число поза діапазоном, виведіть "Невірний день".

switch (+prompt('Введіть номер дня тижня')) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break
    case 4:
        console.log('Thursday');
        break
    case 5:
        console.log('Friday');
        break
    case 6:
        console.log('Saturday');
        break
    case 7:
        console.log('Sunday');
        break
    default:
        console.log('Не вірно введено число');
}

// 9. Тернарний оператор
// Напишіть програму, яка запитує у користувача число через prompt і:
//
// Якщо число парне, виводить "Число парне".
// Якщо непарне, виводить "Число непарне".
// Використайте тернарний оператор.

let number1 = +prompt('Введіть число');
let numberResult = number1 % 2 ? "Число непарне":"Число парне";
console.log(numberResult);


// 10. Комбіноване завдання
// Створіть об'єкт, який представляє магазин:
//
// Властивості: name (назва магазину), products (масив із назвами товарів), isOpen (логічне значення).
// Додайте метод addProduct, який додає новий товар до масиву products.
// Додайте метод toggleOpen, який змінює значення isOpen на протилежне.
// Використайте ці методи, щоб додати товар і змінити стан магазину (відкрито/закрито).

let market = {
    name: 'Silpo',
    products: ['bread', 'milk', 'beer', 'meat'],
    isOpen: true
}

market.products.push('orange');

function toggleOpen(status) {
    if (status===true) {
        market.isOpen = false;
    } else if (status===false){
        market.isOpen = true;
    }
}

toggleOpen(true);
console.log(market);