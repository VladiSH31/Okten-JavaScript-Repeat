// JS preview | DOM   Об'єктна модель документа та пошук елементів

console.log(document);
console.log(document.head);
console.log(document.head.children);
console.log(document.body);
console.log(document.body.innerHTML);

// ID
let ul1= document.getElementById('list-1')
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
let liCollection =list2list.getElementsByTagName('li')
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



// JS preview | Створення елементів