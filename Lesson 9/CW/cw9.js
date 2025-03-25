// JS preview | DOM   Об'єктна модель документа та пошук елементів

console.log(document);
console.log(document.head);
console.log(document.head.children);
console.log(document.body);
console.log(document.body.innerHTML);

// ID
let ul1 = document.getElementById('list-1')
console.log(ul1);

// Class
let menus = document.getElementsByClassName('menu')
console.log(menus);

for (const menu of menus) {
    console.log(menu);
}

// TAG

let lilist = document.getElementsByTagName('li')
console.log(lilist);


let list2list = document.getElementById('list-2')
let liCollection = list2list.getElementsByTagName('li')
console.log(liCollection);

// Bad
console.log(document.querySelector('ul'));
console.log(document.querySelectorAll('ul'));
console.log(document.querySelectorAll('#list-2 > li'));

// JS preview | Forms API

console.log(document.forms);
console.log(document.forms['f1']);
console.log(document.forms['f1'].userName);
console.log(document.forms['f2'].userEmail);
console.log(document.forms['f2']);

// JS preview | Маніпуляція DOM елементами

let workDiv = document.getElementsByClassName('target')[0];

console.log(workDiv.innerText);
// workDiv.innerText = 'Hello world'
workDiv.style.background = 'silver';
workDiv.style.border = '2px black solid';
workDiv.style.marginTop = '4px'

console.log(workDiv.classList);
workDiv.classList.add('main-left');
workDiv.classList.add('footer');
console.log(workDiv.classList);

console.log(workDiv.classList.keys());
console.log(workDiv.classList.item(2));
console.log(workDiv.classList.contains('footer'));
workDiv.classList.toggle('header')
console.log(workDiv.classList);

console.log(workDiv.getAttribute('zzz'));
workDiv.setAttribute('id', 'allow')
console.log(workDiv.getAttribute('id'));
console.log(workDiv.classList);
console.log(workDiv.previousElementSibling);
console.log(workDiv.nextElementSibling);
console.log(workDiv.children);
console.log(workDiv.childNodes);
// JS preview | Створення елементів

let h2 = document.createElement('h2');
h2.innerText = 'Users'
document.body.appendChild(h2);

class User {
    constructor(id, name, surname, mail, phone) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.mail = mail;
        this.phone = phone;
    }
}

let users = [
    new User(1, 'John', 'Johnson', 'mail1@mail.com', '0633331101'),
    new User(2, 'Jacob', 'Jacobson', 'mail2@mail.com', '0633331102'),
    new User(3, 'Sara', 'Em', 'mail3@mail.com', '0633331103'),
    new User(4, 'Jessica', 'As', 'mail4@mail.com', '0633331104'),
    new User(5, 'Alla', 'Bas', 'mail5@mail.com', '0633331105'),
    new User(6, 'Elloy', 'Das', 'mail6@mail.com', '0633331106'),
    new User(7, 'Josh', 'Cal', 'mail7@mail.com', '0633331107'),
    new User(8, 'Adam', 'Joson', 'mail8@mail.com', '0633331108'),
    new User(9, 'Eva', 'Johnsh', 'mail9@mail.com', '0633331109'),
    new User(10, 'Bob', 'Jotah', 'mail10@mail.com', '0633331110')
]
let usersDiv = document.createElement('div');
usersDiv.classList.add('users');
document.body.appendChild(usersDiv)
for (const user of users) {
    let div = document.createElement('div')
    div.classList.add('user')
    div.innerText = user.name;
    usersDiv.appendChild(div)
}