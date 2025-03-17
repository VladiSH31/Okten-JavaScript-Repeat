// JS preview | Функції конструктори

function User(name, age, status) {
    this.name = name;
    this.age = age;
    this.status = status;
}
let user1 = new User('Vladi', 36, true);
let user2 = new User('Mark', 10, true);
console.log(user1);
console.log(user2);

// JS preview | Розширення конструкторів через prototype, підміна this через call apply bind

user1.greet = function () {
    console.log('hi')
}
console.log(user1)

User.prototype.greet = function () {
    console.log(`Hello my name is ${this.name}`)
}

user2.greet();
user1.greet();

// JS preview | Класи та наслідування

class People {
    constructor(name, surname, age, status) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.status = status;
    }
    greeting() {
        return `Hello my name ${this.name} ${this.surname} and i ${this.age} years old`
    }
}

let people1 = new People('John', 'Johnson', 40, true)
console.log(people1);

console.log(people1.greeting());

class Customer extends People {
    constructor(name, surname, age, status, password, skills) {
        super(name, surname, age, status);
        this.password = password;
        this.skills = skills;
    }
}

function Human(name, age) {
    this.name = name;
    this.age = age;
}

function Humanoid(name, age, password) {
    Human.apply(this, arguments);
    this.password = password;
}
let human1 = new Human('Vasya', 22);
console.log(human1);
let humanoid1 = new Humanoid('Octopus', 209, 98765);
console.log(humanoid1);
// JS preview | Дата

let now = new Date();
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getTime());
// JS preview | Set

let set = new Set();
set.add('asd');
set.add('qwe');
set.add('zxc');
set.add('asd');
console.log(set);
console.log(set.size);
console.log(set.has('xxx'));
set.delete('asd');
console.log(set);
set.forEach(value => {console.log(value)})
let arrayFromSet = Array.from(set)
console.log(arrayFromSet);
console.log(arrayFromSet === set);


// JS preview | Map