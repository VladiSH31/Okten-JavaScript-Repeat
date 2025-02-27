// JS preview | Масиви

let arr = [1, 2, 3, 4, true, 'qwe', 'avangard'];
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[10]);
console.log(arr.length);

arr[7] = 'asdfghjkl';
console.log(arr);

arr[arr.length] = false;
console.log(arr);

arr[1] = 22;
console.log(arr);

// JS preview | Багатовимірні масиви

let array = [
    [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ],
    [
        [11, 22, 33],
        [44, 55, 66],
        [77, 88, 99]
    ],
    [
        [111, 222, 333],
        [444, 555, 666],
        [777, 888, 999]
    ]
]

console.log(array);
console.log(array[0][0][1]);
console.log(array[1][1][0]);
console.log(array[2][2][2]);

// JS preview | Об'єкти


let object = {
    name: 'John',
    age: 27,
    id: 1,
    wife: {
        name: 'Elizabeth',
        age: 23,
        id: 2
    }
}

console.log(object.wife);
console.log(object.wife.age);

// JS preview | Внутрішні об'єкти

let users = [
    {name: 'Vasil', age: 23, id: 1, skills: ['html', 'js', 'react', 'node.js'], status: true},
    {name: 'Anna', age: 18, id: 2, status: false},
    {name: 'Boris', age: 34, id: 3, skills: ['html', 'java', 'mysql', 'python'], status: true},
    {name: 'Anton', age: 30, id: 4, skills: ['html', 'js', 'react', 'node.js'], status: true},
    {},
]

console.log(users[0]);
console.log(users[1].age);
console.log(users[2]['name']);
let userAnton = users[3];
console.log(userAnton.skills);
console.log(users.length);