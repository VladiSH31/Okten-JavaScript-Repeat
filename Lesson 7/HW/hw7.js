// #XjJuucOMR0
//
// – Створити функцію конструктор для об’єктів User з полями id, name, surname , email, phone
//
// створити пустий масив, наповнити його 10 об’єктами new User(….)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = []
users.push(new User(1, 'John', 'Johnson', 'mail1@mail.com', '0633331101'));
users.push(new User(2, 'Jacob', 'Jacobson', 'mail2@mail.com', '0633331102'));
users.push(new User(3, 'Sara', 'Em', 'mail3@mail.com', '0633331103'));
users.push(new User(4, 'Jessica', 'As', 'mail4@mail.com', '0633331104'));
users.push(new User(5, 'Alla', 'Bas', 'mail5@mail.com', '0633331105'));
users.push(new User(6, 'Elloy', 'Das', 'mail6@mail.com', '0633331106'));
users.push(new User(7, 'Josh', 'Cal', 'mail7@mail.com', '0633331107'));
users.push(new User(8, 'Adam', 'Joson', 'mail8@mail.com', '0633331108'));
users.push(new User(9, 'Eva', 'Johnsh', 'mail9@mail.com', '0633331109'));
users.push(new User(10, 'Bob', 'Jotah', 'mail10@mail.com', '0633331110'));

console.log(users);

//#2ikXsE2WiKZ
//
// – Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об’єкти з парними id (filter)

let ovenUsers = users.filter(user => user.id % 2 === 0);
console.log(ovenUsers);

// #pOeHKct
// – Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sortedUsers = users.sort((user1, user2) => {
    return user2.id - user1.id;
})

console.log(sortedUsers);

//#nkMXISv
//
// – створити конструктор для об’єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
//
// створити пустий масив, наповнити його 10 об’єктами Client

function Client(id, name, surname , email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}

let clients = [
    new Client(11, 'Oleg', 'Petrov', 'mail11@gmail.com', '380112223311', ['bread', 'milk']),
    new Client(22, 'Max', 'Ivanov', 'mail22@gmail.com', '380112223322', ['bread', 'milk', 'tomat']),
    new Client(33, 'Olga', 'Valtsov', 'mail3@gmail.com', '380112223333', ['bread', 'cucumber', 'milk']),
    new Client(44, 'Valentin', 'Shevchenko', 'mail44@gmail.com', '380112223344', ['beer', 'milk']),
    new Client(55, 'Semen', 'Illenko', 'mail55@gmail.com', '380112223355', ['meat', 'milk']),
    new Client(66, 'Mark', 'Glagolov', 'mail66@gmail.com', '380112223366', ['bread', 'eggs']),
    new Client(77, 'Oleksandr', 'Malt', 'mail77@gmail.com', '380112223377', ['bread', 'tomat']),
    new Client(88, 'Vera', 'Falonenko', 'mail88@gmail.com', '380112223388', ['cucumber', 'tomat']),
    new Client(99, 'Nadezhda', 'Bilos', 'mail99@gmail.com', '380112223399', ['bread', 'beer', 'meat']),
    new Client(111, 'Anna', 'Pedrenko', 'mail110@gmail.com', '380112223300', ['bread', 'milk', 'eggs']),
]

//#8abtVjRv
// – Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sortedClients = clients.sort((client1, client2) => {
    return client1.order.length - client2.order.length
})
console.log(sortedClients);
//#vV9a6584I5
//
// – Створити функцію конструктор яка дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
//     — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
//     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
//     — changeYear (newValue) – змінює рік випуску на значення newValue
//     — addDriver (driver) – приймає об’єкт який “водій” з довільним набором полів, і додає його в поточний об’єкт car

function Car(model, manufactur, year, maxSpeed, engineVolume) {
    this.model = model;
    this.manufactur = manufactur;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`)
    }
    this.info = function () {
        console.log(`Модель - ${this.model}`)
        console.log(`Виробник - ${this.manufactur}`)
        console.log(`Рік випуску - ${this.year}`)
        console.log(`Максимальна швидкість - ${this.maxSpeed}`)
        console.log(`Об'єм двигуна- ${this.engineVolume}`)
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = newSpeed;
    }
    this.changeYear = function (newValue) {
        this.year = newValue
    }
    this.addDriver = function (driver) {
        this.driver = driver;
    }
}

let car1 = new Car('Grande Punto', 'Fiat', 2011, 150, 1.4);
console.log(car1);
car1.drive();
car1.info();
car1.increaseMaxSpeed(160);
car1.info();
car1.changeYear(2020)
car1.info();
car1.addDriver({name: 'Vladislav'})
console.log(car1);

//#5kla3yMpgp
// – (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
// — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
// — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
// — changeYear (newValue) – змінює рік випуску на значення newValue
// — addDriver (driver) – приймає об’єкт який “водій” з довільним набором полів, і додає його в поточний об’єкт car