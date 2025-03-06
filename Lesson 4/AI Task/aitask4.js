// 1. Базова інформація про функції
// Створіть функцію greet, яка приймає ім'я як аргумент і виводить у консоль привітання: "Привіт, [ім'я]!".
// Викличте функцію кілька разів із різними іменами.

function greet(name) {
    console.log(`Привіт, ${name}!`)
}

greet('Влад')

// 2. Функція для обчислення площі прямокутника
// Створіть функцію calculateRectangleArea, яка приймає два аргументи: ширину та висоту прямокутника.
// Функція повинна виводити площу прямокутника у консоль.

function calculateRectangleArea(a, b) {
    return a * b;
}

let rectangleArea = calculateRectangleArea(5, 9);
console.log(rectangleArea);

// 3. Функції з return
// Створіть функцію sum, яка приймає два числа як аргументи, додає їх і повертає результат.
// Викличте функцію з різними числами та виведіть результат у консоль.

function calcSum(a, b) {
    return a + b;
}

let sum = calcSum(3, 8);
console.log(sum);

// 4. Функція для обчислення факторіалу
// Створіть функцію factorial, яка приймає число n і повертає його факторіал (n!).
// Використайте цикл for для обчислення факторіалу.

function factorial(n) {
    let factorial = 0;
    for (let i = n; i >= 0; i--) {
        factorial = factorial + (n * (n - 1));
    }
    return factorial;
}

let factorN = factorial(5);
console.log(factorN);

// 5. Змінна arguments
// Створіть функцію multiply, яка приймає довільну кількість чисел (використайте arguments) і повертає їх добуток.
// Викличте функцію з різною кількістю аргументів.

function multiply() {
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result
}

console.log(multiply(1, 2, 3, 4, 5, 6, 7));
console.log(multiply(11, 22, 13, 24, 85, 66, 57));


// 6. Функція з rest аргументами
// Створіть функцію average, яка приймає довільну кількість чисел (використайте rest аргументи) і повертає їх середнє значення.
// Викличте функцію з різною кількістю аргументів.

function average(...x) {
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        result += x[i];
    }
    return result / x.length;
}

console.log(average(11, 22, 13, 24, 85, 66, 57));

// 7. Функція для перевірки парності
// Створіть функцію isEven, яка приймає число і повертає true, якщо число парне, і false, якщо непарне.
// Викличте функцію з різними числами та виведіть результат у консоль.

function isEven(num) {
    return num % 2 === 0;
}

console.log(isEven(10));

// 8. Функція для пошуку максимального числа
// Створіть функцію findMax, яка приймає довільну кількість чисел (використайте rest аргументи) і повертає найбільше число.
// Викличте функцію з різними наборами чисел.

function findMax(...v) {
    let maxNum = 0;
    for (const vNum of v) {
        if (vNum>maxNum) {
            maxNum = vNum;
        }
    }
    return maxNum;
}

console.log(findMax(3, 4, 23, 11, 65, 76, 99, 121, 23, 45, 56, 9));

// 9. Функція для підрахунку кількості слів
// Створіть функцію countWords, яка приймає рядок і повертає кількість слів у ньому.
// Використайте метод .split(' ') для розділення рядка на слова.

function countWords(words) {
    let arrWords = words.split(' ')
    console.log(arrWords.length)
}

countWords('words Hello world Goodbay like');

// 10. Функція для перевірки паліндрома
// Створіть функцію isPalindrome, яка приймає рядок і повертає true, якщо рядок є паліндромом, і false в іншому випадку.
// Використайте методи .split(''), .reverse() і .join('') для перевірки.

function isPallindrome(word) {
    let editWord = word.split('');
    editWord.reverse();
    editWord.join('');
    return word === editWord;
}

console.log(isPallindrome('tenet'));


// Я ще не вивчав методи