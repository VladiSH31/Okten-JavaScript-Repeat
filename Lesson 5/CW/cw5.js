// JS preview | Функціональні вирази

let greeting = function () {
    console.log('Hi everyone')
}

greeting();
asd();

function asd() {
    console.log('asd asd asd');
}

// JS preview | Стрілочні функції

function calculate(a, b) {
    return a * b;
}

console.log(calculate(10, 10));

let calc = (a, b) => a * b;
console.log(calc(10, 10));

// JS preview | Функції в об'єктах та контекст this

let user = {
    name: 'John',
    age: 30,
    greet: function (msg) {
        return `${msg} my name is ${this.name}`
    },
    vitannya: function (msg) {
        return `${msg} i am ${this.age} years old`
    }
}

console.log(user.greet('Hi'));
console.log(user.vitannya('Hello'));


// JS preview | Замикання
// function asad() {
//     let x = 10;
//
//     function inner() {
//         return ++x;
//     }
//
//     return inner;
// }
//
// let fun = asad();
// console.log(fun());
function userFactory(name, age) {
    let user1 = {name, age}
    return {
        getName() {
            return user1.name;
        },
        getAge() {
            return user1.age;
        },
        setAge(age) {
            if (age > 0) {
                user1.age = age;
            }
        }
    }
}


let user1 = userFactory('John Byu', 56);
console.log(user1.getName());
console.log(user1.getAge());
user1.setAge(99);
console.log(user1.getAge());


// JS preview | Рекурсія

let arrayNumbers = [11, 22, 33, [44, 55, [66, 77, 88, [99, 100]]]];

let filtredArray = [];

function flatter(array) {
    for (const arrayElement of array) {
        if (Array.isArray(arrayElement)) {
            flatter(arrayElement)
        } else {
            filtredArray.push(arrayElement)
        }
    }
}

flatter(arrayNumbers);

console.log(filtredArray);

// JS preview | Генератори

function* cardsHolderGenerator() {
    const cards = [
        {value: 6, suits: 'Diamond'},
        {value: 7, suits: 'Spade'},
        {value: 8, suits: 'Diamond'},
        {value: 10, suits: 'Spade'},
    ]
    for (const card of cards) {
        yield card;
    }
}
let cardGenerator = cardsHolderGenerator();

console.log(cardGenerator.next());
console.log(cardGenerator.next());
console.log(cardGenerator.next());

// JS preview | Обробка помилок

let start = 'start';
let end = 'end';

console.log(start);
try {
    console.log(middle)
} catch (e) {
    console.log(e);
}
console.log(end);