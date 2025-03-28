// 1. Інкремент / Декремент
// Створіть змінну x зі значенням 5.
// Використайте префіксний інкремент і виведіть значення змінної.
// Використайте постфіксний інкремент і виведіть значення змінної.
// Використайте декремент (префіксний і постфіксний) і виведіть значення змінної.

let x = 5;
++x;
console.log(x);
x++;
console.log(x);
--x;
console.log(x);
x--;
console.log(x);

// 2. Цикл for of
// Створіть масив із 5 чисел.
// За допомогою циклу for of обчисліть суму всіх чисел у масиві.
// Виведіть результат у консоль.

let numbers = [23, 4, 87, 11, 52, 99];
let numSum = 0;
for (let number of numbers) {
    numSum = numSum + number;
}

console.log(numSum);

// 3. Цикл for
// Виведіть усі числа від 1 до 10 за допомогою циклу for.
// Виведіть усі парні числа від 1 до 20.
// Виведіть усі числа від 10 до 1 у зворотному порядку.

let numsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numsArray.length; i++) {
    const num = numsArray[i];
    console.log(num);
}

let numsArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

for (let number of numsArray2) {
    if (number % 2 === 0) {
        console.log(number)
    }
}

for (let i = numsArray.length - 1; i >= 0; i--) {
    let number = numsArray[i];
    console.log(number);
}


// 4. Цикл for in
// Створіть об'єкт, який описує книгу (поля: title, author, year).
// За допомогою циклу for in виведіть усі ключі та значення цього об'єкта у форматі: ключ: значення.

let book = {
    title: 'Lords of the Ring',
    author: 'J. Tolkien',
    year: 1990
}

for (let bookKey in book) {
    console.log(bookKey, ': ', book[bookKey])
}

// 5. Цикл while
// Виведіть усі числа від 1 до 10 за допомогою циклу while.
// Виведіть усі непарні числа від 1 до 20 за допомогою циклу while.

let i = 0;
while (i < numsArray.length) {
    let nums = numsArray[i];
    console.log(nums);
    i++;
}


let numsArray5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let q = 0;
while (q < numsArray5.length) {
    let number1 = numsArray5[q];
    if (number1 % 2 === 0) {
        console.log(number1)
    }
        q++;
}


// 6. Комбіноване завдання: Інкремент і цикл for
// Створіть змінну sum зі значенням 0.
// За допомогою циклу for додайте до sum усі числа від 1 до 100.
// Виведіть результат у консоль.


let sum = 0;
for (let j = 0; j < 101; j++) {
    let numbers1 = +[j];
    sum = sum + numbers1;
}
console.log(sum)

// 7. Комбіноване завдання: Цикл for of і масив
// Створіть масив із 5 рядків (наприклад, імена людей).
// За допомогою циклу for of виведіть кожен елемент масиву у верхньому регістрі (використайте метод .toUpperCase()).

let names = ['Vika', 'Mark', 'Nika', 'Vlad', 'Kira'];

for (let name of names) {
    console.log(name.toUpperCase())
}

// 8. Комбіноване завдання: Цикл for in і вкладені об'єкти
// Створіть об'єкт, який описує студента:
// Поля: name, age, grades (масив із оцінками).
// За допомогою циклу for in виведіть усі ключі та значення об'єкта.
// Виведіть середню оцінку студента (обчисліть середнє значення масиву grades).

let student = {
    name: 'Vasya',
    age: 18,
    grades: [5, 5, 4, 3, 3]
}

for (let Keys in student) {
    console.log(Keys, student[Keys]);
}
let sumGrades = 0;
for (const gradesElement of student.grades) {
    sumGrades = sumGrades + gradesElement;
}
console.log(sumGrades / student.grades.length)


// 9. Комбіноване завдання: Цикл while і масив
// Створіть масив із 10 чисел.
// За допомогою циклу while знайдіть найбільше число в масиві.
// Виведіть результат у консоль.

let numArr = [1, 22, 33, 14, 85, 65, 79, 18, 29, 10];

let n = 0;
let maxNum = 0;
while (n < numArr.length) {
    if (numArr[n] > maxNum) {
        maxNum = numArr[n];
    }
    n++;
}
console.log(maxNum);

// 10. Комбіноване завдання: Вкладені цикли
// Створіть двовимірний масив (матрицю) 3x3, заповнений числами від 1 до 9.
// За допомогою вкладеного циклу for виведіть усі елементи матриці у консоль.

let arrayNums = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

for (const Element of arrayNums) {
    for (const elementKey in Element) {
        console.log(Element[elementKey])
    }
}