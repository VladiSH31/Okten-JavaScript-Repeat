// JS preview | Інкремент / декременти

let x =0;
x = x + 1;
console.log(x);

x++;
x++;
x++;
x++;
console.log(x);

x-=4;
console.log(x);

x-=2;
console.log(x);

x*=2;
console.log(x);

x/=2;
console.log(x);


// JS preview |  Цикл for

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

// for (let i = 0; i < users.length; i++) {
//     let user = users[i];
//     document.write(`<div><h3>${user.name} ${user.age} ${user.status}</h3></div>`)
// }

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

// for (let i = 0; i<products.length; i++) {
//     let product = products[i];
//     document.write(`
// <div>
// <h3>${product.title}</h3> <p>${product.price} UAH</p>
// <img src="${product.image}" alt="Image">
// </div>
// `)
// }
// JS preview |  Цикл for of

for (let product of products) {
    document.write(`
        <div>
            <h3>${product.title}</h3> <p>${product.price} UAH</p>
            <img src="${product.image}" alt="Image" class="imgsize">
        </div>  
    `)
}

// JS preview | Цикл for in

for (let user of users) {
    for (let userKey in user) {
        console.log(userKey, user[userKey])
    }
}


// JS preview |  Цикл while

let i = 0;
while (i<users.length) {
    let user = users[i];
    console.log(user);
    ++i;
}