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

// users.forEach(function (value, index) {
//     console.log(value, index)
// });

// users.forEach(value => console.log(value));

// users.filter(value => {
//     if (value.age > 30) {
//         console.log(value)
//     }
// });

// let mappedUsers = users.map((value, index) => {
//     return {
//         name: value.name,
//         age: value.age,
//         status: value.status,
//         id: index + 1
//     };
// })
//
// console.log(mappedUsers);

// let findedName = users.find(value => value.name === 'olya');
// console.log(findedName);

// console.log(users.every(value => value.status));
// console.log(users.some(value => value.status));

// let sorted = users.sort((a, b) => {
//     return a.age - b.age;
// })
//
// console.log(sorted);

// let sortedUsers = users.sort((a, b) => {
//     if (a.name > b.name){
//         return 1;
//     }
//     if (a.name < b.name){
//         return -1;
//     }
//     if (a.name === b.name){
//         return 0;
//     }
// })
// console.log(sortedUsers);

let reducedUsers = users.reduce((previousValue, currentValue) => {
    if (currentValue.status) {
        previousValue.statusT.push(currentValue)
    } else {
        previousValue.statusF.push(currentValue)
    }
    return previousValue;
}, {statusT:[], statusF:[]})

console.log(reducedUsers);