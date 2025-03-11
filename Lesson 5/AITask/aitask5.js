// 1. Функціональні вирази
// Створіть функціональний вираз, який приймає два числа і повертає їх суму. Викличте функцію з різними аргументами.
// Створіть функціональний вираз, який перевіряє, чи є число парним, і повертає true або false.
let calcPlus = function (a, b) {
    return a + b;
}
console.log(calcPlus(10, 34));

let isPair = (c) => c % 2 === 0;

console.log(isPair(16));

// 2. Стрілочні функції
// Напишіть стрілочну функцію, яка приймає масив чисел і повертає масив квадратів цих чисел.
// Напишіть стрілочну функцію, яка приймає рядок і повертає його довжину.

let arrayNumbers = [4, 5, 6]
let arrayDoubleNumbers = []
let convertToDouble = (array) => arrayDoubleNumbers.push(array[0] * array[0], array[1] * array[1], array[2] * array[2]);
convertToDouble(arrayNumbers);
console.log(arrayDoubleNumbers);

let stringLenght = (string) => console.log(string.length)

stringLenght('Hello')

// 3. Функції в об'єктах та контекст this
// Створіть об'єкт user із полями name та методом greet, який виводить у консоль привітання з ім'ям користувача (використайте this.name).
// Створіть об'єкт calculator із методами add, subtract, multiply, divide, які виконують відповідні математичні операції над двома числами.

let user = {
    name: 'Oleksnadr',
    greet() {
        console.log(`Привіт мене звуть ${this.name}`);
    }
}

user.greet();

let calculator = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    },
    multiply(a, b) {
        return a * b;
    },
    divide(a, b) {
        return a / b;
    }
}

console.log(calculator.multiply(4, 4));
console.log(calculator.subtract(10, 2));
console.log(calculator.divide(10, 2));
console.log(calculator.add(27, 254));


// 4. Замикання
// Створіть функцію counter, яка повертає іншу функцію. Внутрішня функція повинна збільшувати значення лічильника на 1 і повертати його.
// Створіть функцію createMultiplier, яка приймає число x і повертає функцію, яка множить будь-яке число на x.
let n = 0

function counter() {


    return {
        count() {
            n++;
        }
    }
}

let counters = counter();
console.log(counters);
counters.count();
counters.count();
counters.count();
counters.count();
console.log(n);

// 5. Рекурсія
// Напишіть рекурсивну функцію для обчислення факторіалу числа.
// Напишіть рекурсивну функцію для обчислення суми чисел у масиві.
function factorial(n) {
    if (n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(3));


let sumNums = 0;

function sumArray(array, i) {

    sumNums += array[i];
    i++;
    if (i < array.length) {
        sumArray(array, i)
    }
    return sumNums
}

sumArray([11, 22, 33, 1], 0)
console.log(sumNums);

// 6. Генератори
// Створіть генератор idGenerator, який генерує унікальні ідентифікатори (починаючи з 1).

let v = 1;

function* idGenerator() {
    yield v++;
    yield v++;
    yield v++;
    yield v++;
    yield v++;

}

let generatorId = idGenerator();
console.log(generatorId.next());
console.log(generatorId.next());
console.log(generatorId.next());
console.log(generatorId.next());
console.log(generatorId.next());

// Створіть генератор, який повертає числа Фібоначчі.
// let n = 0;
// function* fibonachiNumbers(n) {
//
//     n++;
//     if (n>0) {
//         yield n = fibonachiNumbers(n-1) + fibonachiNumbers(n-2);
//     }
// }
//
// let fibNumber = fibonachiNumbers();
// console.log(fibNumber.next());

// 7. Обробка помилок
// Напишіть функцію, яка приймає два числа і повертає їх частку. Якщо друге число дорівнює нулю, функція повинна викидати помилку.
// Обробіть цю помилку за допомогою try...catch.
// Напишіть функцію, яка приймає масив і повертає його перший елемент. Якщо масив порожній, функція повинна викидати помилку.
// Обробіть цю помилку за допомогою try...catch.

function returnPart(a, b) {
    if (b === 0 ) {
        console.log('Error')
    }
}

//ADD
// Напишіть рекурсивну функцію, яка обчислює суму всіх чисел від 1 до n.
// sumTo(5); // 15 (1 + 2 + 3 + 4 + 5)


function sumTo(n) {
    if (n===0) return 0;
    return  n + sumTo(n-1);
}

console.log(sumTo(5));

// 2. Пошук максимального числа в масиві
// Напишіть рекурсивну функцію, яка знаходить найбільше число в масиві.
//
// Приклад:
//
//
// findMax([1, 5, 3, 9, 2]); // 9

function findMax(arr, i) {
    if (i === arr.length-1) {
        return arr[i]
    }
    let maxOfArr = findMax(arr, i+1)

    if(arr[i]>maxOfArr) {
        maxOfArr = arr[i];
    }
    return maxOfArr;
}

console.log(findMax([1, 5,18, 3, 9, 2], 0))

// 3. Реверс рядка
// Напишіть рекурсивну функцію, яка перевертає рядок.
//
// Приклад:
//
// javascript
// Copy Code
// reverseString("hello"); // "olleh"
// 4. Перевірка паліндрома
// Напишіть рекурсивну функцію, яка перевіряє, чи є рядок паліндромом (читається однаково зліва направо і справа наліво).
//
// Приклад:
//
// javascript
// Copy Code
// isPalindrome("level"); // true
// isPalindrome("hello"); // false
// 5. Піднесення числа до степеня
// Напишіть рекурсивну функцію, яка підносить число x до степеня n.
//
// Приклад:
//
// javascript
// Copy Code
// power(2, 3); // 8 (2 * 2 * 2)
// 6. Сума цифр числа
// Напишіть рекурсивну функцію, яка обчислює суму цифр числа.
//
// Приклад:
//
// javascript
// Copy Code
// sumDigits(1234); // 10 (1 + 2 + 3 + 4)
// 7. Перетворення числа в двійкову систему
// Напишіть рекурсивну функцію, яка перетворює число в двійкову систему числення.
//
// Приклад:
//
// javascript
// Copy Code
// toBinary(10); // "1010"
// 8. Глибина вкладеного масиву
// Напишіть рекурсивну функцію, яка обчислює максимальну глибину вкладеного масиву.
//
// Приклад:
//
// javascript
// Copy Code
// getDepth([1, [2, [3, [4]]]]); // 4
// 9. Фільтрація масиву
// Напишіть рекурсивну функцію, яка повертає новий масив, що містить лише парні числа з вхідного масиву.
//
// Приклад:
//
// javascript
// Copy Code
// filterEven([1, 2, 3, 4, 5, 6]); // [2, 4, 6]
// 10. Числа Фібоначчі
// Напишіть рекурсивну функцію, яка повертає n-те число Фібоначчі.
//
// Приклад:
//
// javascript
// Copy Code
// fibonacci(6); // 8 (0, 1, 1, 2, 3, 5, 8)
// 11. Перевірка на наявність елемента в масиві
// Напишіть рекурсивну функцію, яка перевіряє, чи є заданий елемент у масиві.
//
// Приклад:
//
// javascript
// Copy Code
// contains([1, 2, 3, 4, 5], 3); // true
// contains([1, 2, 3, 4, 5], 6); // false
// 12. Підрахунок кількості елементів у масиві
// Напишіть рекурсивну функцію, яка підраховує кількість елементів у масиві.
//
// Приклад:
//
// javascript
// Copy Code
// countElements([1, 2, 3, 4, 5]); // 5
// 13. Перемноження всіх чисел у масиві
// Напишіть рекурсивну функцію, яка перемножує всі числа в масиві.
//
// Приклад:
//
// javascript
// Copy Code
// multiplyArray([1, 2, 3, 4]); // 24 (1 * 2 * 3 * 4)
// 14. Видалення всіх входжень елемента з масиву
// Напишіть рекурсивну функцію, яка видаляє всі входження заданого елемента з масиву.
//
// Приклад:
//
// javascript
// Copy Code
// removeElement([1, 2, 3, 2, 4, 2], 2); // [1, 3, 4]
// 15. Пошук шляху в об'єкті
// Напишіть рекурсивну функцію, яка знаходить значення за заданим шляхом у вкладеному об'єкті.
//
// Приклад:
//
// javascript
// Copy Code
// let obj = { a: { b: { c: 42 } } };
// findPath(obj, ["a", "b", "c"]); // 42