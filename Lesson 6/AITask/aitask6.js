// 1. Функції для рядків
// Напишіть функцію, яка приймає рядок і повертає його довжину.
// Приклад:
// javascript
// Copy Code
// stringLength("Hello"); // 5

let greet = 'Hellooo';

function stringLenght(string) {
    console.log(string.length);
}

stringLenght(greet);

// Напишіть функцію, яка приймає рядок і повертає його у верхньому регістрі.
// Приклад:
// javascript
// Copy Code
// toUpperCase("hello"); // "HELLO"

function toUpperCase(string) {
    console.log(string.toUpperCase())
}

toUpperCase(greet);
// Напишіть функцію, яка приймає два рядки і перевіряє, чи містить перший рядок другий.
// Приклад:
// javascript
// Copy Code
// contains("Hello world", "world"); // true

function contains(s1, s2) {
    console.log(s1.includes(s2))
}

contains("Hello world", "world");

// 2. Базові функції масивів
// Напишіть функцію, яка приймає масив чисел і повертає його довжину.
// Приклад:
// javascript
// Copy Code
// arrayLength([1, 2, 3, 4]); // 4

function arrayLength(array) {
    console.log(array.length);
}

arrayLength([1, 2, 3, 4]);

// Напишіть функцію, яка приймає масив чисел і повертає перший елемент масиву.
// Приклад:
// javascript
// Copy Code
// firstElement([10, 20, 30]); // 10

function firstElement(array) {
    console.log(array[0]);
}

firstElement([10, 20, 30]);

// Напишіть функцію, яка приймає масив чисел і додає новий елемент у кінець масиву.
// Приклад:
// javascript
// Copy Code
// addElement([1, 2, 3], 4); // [1, 2, 3, 4]

function addElement(array, item) {
    array.push(item);
    console.log(array);
}

addElement([1, 2, 3], 4);

// 3. Функції масивів із колбеками
// Напишіть функцію, яка приймає масив чисел і повертає новий масив, у якому всі числа помножені на 2 (використайте map).
// Приклад:
// javascript
// Copy Code
// doubleNumbers([1, 2, 3]); // [2, 4, 6]

function doubleNumbers(arrayNumbers) {
    let result = [];
    for (const number of arrayNumbers) {
        result.push(number * 2);
    }
    return result;
}

console.log(doubleNumbers([1, 2, 3]));


// Напишіть функцію, яка приймає масив чисел і повертає лише парні числа (використайте filter).
// Приклад:
// javascript
// Copy Code
// filterEven([1, 2, 3, 4]); // [2, 4]

function filterEven(array) {
    let result = [];
    for (const number of array) {
        if (number % 2 === 0) {
            result.push(number)
        }
    }
    return result;
}

console.log(filterEven([1, 2, 3, 4]));

// Напишіть функцію, яка приймає масив чисел і повертає їх суму (використайте reduce).
// Приклад:
// javascript
// Copy Code
// sumArray([1, 2, 3, 4]); // 10

function sumArray(array) {
    let resultSum = 0;
    array.reduce((previousValue, currentValue) => {
        if (currentValue > 0) {
            resultSum += currentValue;
        }
    }, {})
    return resultSum;
}

console.log(sumArray([1, 2, 3, 4]));
// 4. Callback-функції
// Напишіть функцію processArray, яка приймає масив і callback-функцію. processArray повинен викликати callback для кожного елемента масиву.
// Приклад:
// javascript
// Copy Code
function processArray(arr, callback) {
    for (const num of arr) {
        callback(num)
    }
}

processArray([1, 2, 3], (num) => console.log(num * 2));
// // Виведе: 2, 4, 6
// Нове завдання на callback-функції:
// Напишіть функцію processArray, яка приймає масив і callback-функцію.
// processArray повинен викликати callback для кожного елемента масиву.
// Callback-функція повинна перевіряти, чи є число парним, і виводити "Even" або "Odd" у консоль.
// Приклад:
//
// javascript
// Copy Code
// processArray([1, 2, 3, 4], (num) => {
//     // Ваш код тут
// });

function processArray(array, callback) {
    return callback(array);
}
processArray([1, 2, 3, 4], (num) => {
    for (const numElement of num) {
       if (numElement%2===0) {
           console.log('Even')
       } else {
           console.log('Odd')
       }
    }
});

// Очікуваний результат:
//
// Odd
// Even
// Odd
// Even