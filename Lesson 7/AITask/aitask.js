// 1. Функції-конструктори
// Створіть функцію-конструктор User, яка приймає ім'я та вік користувача.
// Додайте метод sayHello, який виводить у консоль привітання з ім'ям користувача.

function User(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function () {
        console.log(`Hello my name is ${this.name}`)
    }
}

let user1 = new User('Vasya', 34);
console.log(user1);

user1.sayHello();

// Створіть функцію-конструктор Car, яка приймає марку, модель і рік випуску автомобіля.
// Додайте метод getCarInfo, який повертає рядок із інформацією про автомобіль.

function Car(model, year) {
    this.model = model;
    this.year = year;
    this.getCarInfo = function () {
        console.log(`Це машина моделі ${this.model}, і ${this.year} року випуску`);
    }
}

let carFiat = new Car('Fiat Grande Punto', 2011)
console.log(carFiat);
carFiat.getCarInfo()

// 2. Розширення через prototype
// Додайте до функції-конструктора User метод isAdult, який перевіряє,
// чи є користувач повнолітнім (вік >= 18).

User.prototype.isAdult = function () {
    if (this.age > 18) {
        console.log(`${this.name} is adult`)
    } else {
        console.log(`${this.name} is not adult`)
    }
}

user1.isAdult();

// Створіть функцію-конструктор Rectangle, яка приймає ширину та висоту.
// Додайте метод через prototype, який обчислює площу прямокутника.

function Rectangle(widht,height) {
    this.widht = widht;
    this.height = height;

}

Rectangle.prototype.calcArea = function () {
    return this.widht*this.height;
}

let rectangle1 = new Rectangle(12, 34);
console.log(rectangle1);

console.log(rectangle1.calcArea());

// 3. Підміна this через call, apply, bind
// Створіть об'єкт person із методом introduce, який виводить ім'я та вік.
// Використайте call, щоб викликати цей метод для іншого об'єкта.

class Persons {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce = function () {
        return `My name is ${this.name} me ${this.age} old`
    }
}

let person = new Persons('Alice', 24)
let person2 = new Persons('Sara', 18)

console.log(person);

console.log(person.introduce());
console.log(person2.introduce());


// Створіть функцію multiply, яка приймає два числа. Використайте bind, щоб створити нову функцію,
// яка завжди множить на 2.

// 4. Класи та наслідування
// Створіть клас Animal із методом makeSound, який виводить "Some generic sound".
// Створіть клас Dog, який наслідує Animal, і перевизначте метод makeSound, щоб він виводив "Woof!".

class Animal {
    constructor(type, name, age) {
        this.type = type;
        this.name = name;
        this.age = age;
    }

    makeSound = function () {
        console.log("Woof!")
    }
}

class Dog extends Animal{

    constructor(type, name, age) {
        super(type, name, age);
    }

    makeSound = function () {
        console.log("Some generic sound")
    }
}

// Створіть клас Person із властивостями name та age. Створіть клас Student, який наслідує Person,
// і додайте властивість grade. Додайте метод introduce, який виводить ім'я, вік і клас студента.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person{

    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }

    introduce = function () {
        console.log(this.name);
        console.log(this.age);
    }
}

let student1 = new Student('John', 23, 'A');
console.log(student1);
student1.introduce();

// 5. Колекції: Set
// Створіть Set, який містить унікальні числа. Додайте кілька чисел, видаліть одне з них і перевірте,
// чи містить Set певне число.

let set = new Set();
set.add(1)
set.add(2)
set.add(3)
set.add(5)
set.add(1)
console.log(set);
set.delete(5)
console.log(set.has(5));

// 6. Колекції: Map
// Створіть Map, який зберігає інформацію про студентів (ключ — ім'я, значення — оцінка).
// Додайте кілька студентів, отримайте оцінку одного з них і видаліть іншого.

let students = new Map();
students.set('John', 12)
students.set('Jacob', 7)
console.log(students);
console.log(students.get('John'));
students.delete('Jacob');
console.log(students);