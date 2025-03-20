//JS preview | Оператор опціональної послідовності

let user = {
    name: 'John'
}

user?.age;

// JS preview | Новий синтаксис об'єктів та Деструктуризація

let name = 'Vasya';
let age = 20;
let user1 = {
    name,
    age,
    wife:{
        name: "Anna",
        age: 21
    }
}

console.log(user1);

let {name:nameUser1, age:ageUser1, wife:{name:nameWIfi, age:ageWifi}, wife:userWife} = user1;

console.log(nameUser1);
console.log(userWife);

let numbers = [99, 66, 88];
let [a, ,b] = numbers;

console.log(a);
console.log(b);

// JS preview | Spred оператор

let user2 = {
    name: 'Alex',
    age: 90
}

let user2Copy = {...user2};

console.log(user2Copy);
console.log(user2Copy === user2);

// JS preview | Поверхнева та глибока копії та JSON

let user3 = {
    name: 'QWE',
    age: 24,
    skills: ['html', 'css'],
    greeting () {

    }
}

let userStringify = JSON.stringify(user3);
console.log(userStringify);

let parseUser3 = JSON.parse(userStringify);
console.log(parseUser3);

let assignUser = Object.assign({}, user3);
console.log(assignUser);
console.log(assignUser === user3);
console.log(assignUser.skills === user3.skills);

// JS preview |  Prototyping

let base = {
    id: 1,
    name: 'Absos'
}

let copyBase = Object.create(base);

console.log(copyBase);
console.log(copyBase.id);
console.log(copyBase.hasOwnProperty('id'));
copyBase.id = 33;
console.log(copyBase);
copyBase.age = 99;



// JS preview |  Descriptors

let user5 = {
    firstName: 'John',
    lastName: 'Johnson'
}

Object.defineProperty(
    user5,
    'id',
    {
        value: 99,
        writable: false,
        enumerable: true,
        configurable: true,
    }
)

console.log(user5);
user5.id = 12;
console.log(user5);
for (const user5Key in user5) {
    console.log(user5[user5Key])
}
