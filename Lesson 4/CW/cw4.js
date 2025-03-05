// JS preview | Базова інформація про функції

function writer(title, price, description) {


    document.write(`
        <div>
            <h2>${title} - ${price} - UAH</h2>
            <p>${description}</p>
        </div>
    `);
}

writer('Milk', 50, 'Lorem ipsum dolor sit amet.');
writer('Meat', 160, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate fugiat tenetur ut.');

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

function display(array) {
    for (let arrayElement of array) {
        console.log(arrayElement);
    }
}

display(products);

// JS preview | Базова інформація про функції 2

function userFactory(id, name, age, status) {
    let user = {
        id: id,
        name: name,
        age: age,
        status: status
    }

    return user;
}

let user1 = userFactory(1, 'John', 20, true);
let user2 = userFactory(2, 'Jacob', 30, false);
console.log(user1);
console.log(user2);

// JS preview | Функції з return

function calc(a, b) {
    return a + b;
}

console.log(calc(2, 3))

function percent(sum, perc) {
    return sum/ 100 * perc;
}

function tax(sum) {
    return sum - percent(sum, 20) - percent(sum, 1.5);
}

console.log(tax(44000));


let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

function filter(array) {
    let filtredUsers = [];
    for (let arrayElement of array) {
        if (arrayElement.status === true){
            filtredUsers.push(arrayElement)
        }
    }
    return filtredUsers;
}

let usersTrue = filter(users);
console.log(usersTrue);

//JS preview | Змінна arguments у функціях

function func() {
    console.log(arguments);
    if (arguments.length === 2) {
        return arguments[0] + arguments[1]
    } else if (arguments.length === 3) {
        return arguments[0] + arguments[1] + arguments[2];
    }
}

let funcResult = func(12, 22, 34);
console.log(funcResult);