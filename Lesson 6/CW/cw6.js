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

// users.forEach(value => console.log(value))
//
// let filtredUsers = users.filter(function (value) {
//     return value.age>30
// });
//
// console.log(filtredUsers);

// let mapedUsers = users.map((value, index) => {
//     let newUser = {
//         name: value.name,
//         age: value.age,
//         status: value.status,
//         id: index + 1
//     }
//     return newUser;
// });
//
// console.log(mapedUsers);

// let sortedAge = users.sort((a, b) => {
//     return b.age - a.age
// })
//
// console.log(sortedAge);
//
// let sortedName = users.sort((a, b) => {
//     if (a.name > b.name) {
//         return 1;
//     }
//     if (a.name < b.name) {
//         return -1;
//     }
//     if (a.name === b.name) {
//         return 0;
//     }
// })
//
// console.log(sortedName);

let reducedUsers = users.reduce((previousValue, currentValue) => {
    if (currentValue.age >= 30) {
        previousValue[0].push(currentValue)
    }
    if (currentValue.age < 30) {
        previousValue[1].push(currentValue)
    }
    return previousValue;
}, [[], []])

console.log(reducedUsers[0]);