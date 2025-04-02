// #sH8c4er
// – Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так,
// щоб при натисканні на кнопку зникав елемент з id=”text”.

// let div = document.createElement('div');
// div.setAttribute('id', 'text')
// document.body.append(div)
//
// div.style.width = '200px';
// div.style.height = '200px';
// div.style.background = 'grey';
//
// let button = document.createElement('button');
// button.innerText = 'Send'
// document.body.append(button)
//
// button.onclick = function () {
//     div.style.display = 'none'
// }

//#j693ca8

// – створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// та повідомити про це користувача

// let inputAge = document.getElementById('age');
// let buttonAge = document.getElementById('button')
//
// buttonAge.onclick = function () {
//     let age = inputAge.value;
//     if (age >= 18) {
//         console.log('Ви повнолітній')
//     } else if (age < 18) {
//         console.log('Вам ще немає 18')
//     } else if (typeof age !== 'number') {
//         console.log('Введіть коректне число')
//     }
// }

//#ymAmN2xJ
// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об’єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку, під формою з’явився блок з вашим об’єктом

// let f1 = document.forms.f1;
//
// let userDiv = document.getElementById('target')
//
// f1.onsubmit = function (e) {
//     e.preventDefault()
//     let name = f1.username.value;
//     let age = f1.userage.value;
//     let surname = f1.usersurname.value;
//     userDiv.innerText = name + ' ' + age + ' ' + surname;
// }

// #2VaLt4vDczH
// є сторінка, на якій є блок, я кому знаходиьтся цифра.
// написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

// let currentNumber = +localStorage.getItem('number');
// currentNumber += 1;
// localStorage.setItem('number', currentNumber);
//
// document.getElementById('number').innerText = currentNumber;

// #RbQGnH5DuC
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об’єкт
// сигнатура функції –
// addToLocalStorage(arrayName:string,objToAdd:any{}):void

// function addToLocalStorage(arrayName,objToAdd) {
//     let arrayLS = localStorage.getItem(arrayName);
//     if (!arrayLS) {
//         throw new Error('No such array name')
//     }
//
//     let parseArray = JSON.parse(arrayLS)
//     if (typeof objToAdd === 'object') {
//         parseArray.push(objToAdd)
//     }
//
//     localStorage.setItem(arrayName, JSON.stringify(parseArray));
// }
//
// addToLocalStorage('sessionList', {});

// #kUSgFqWY
//  Створити 3 інпута та кнопку. Один визначає кількість рядків, другий – кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

// let tableGenerator = document.forms['tableGenerator'];
//
// let table = document.getElementById('table');
//
// tableGenerator.onsubmit = function (ev) {
//     table.innerText = '';
//     ev.preventDefault();
//     let linesValue = +tableGenerator.lines.value;
//     let cellsValue = +tableGenerator.cells.value;
//     let dataValue = tableGenerator.data.value;
//
//     console.log(linesValue, cellsValue, dataValue);
//     for (let i = 0; i < linesValue; i++) {
//         let tr = document.createElement('tr');
//         for (let j = 0; j < cellsValue; j++) {
//             let td = document.createElement('td')
//             td.innerText = dataValue;
//             tr.appendChild(td);
//         }
//         table.appendChild(tr);
//     }
//
// }
// #bq1zkx7WP
// *** (подібне було вище, але…будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення “100грн”
// при перезавантаженні сторінки до значаення додається по 10грн, але !!! зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//
//  При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд – нічого не відбувається

const currentTime = Date.now();
const lastUpdateTime = +localStorage.getItem('lastUpdateTime');
let currentNumber = +localStorage.getItem('number');
if (!currentNumber) {
    currentNumber = 90;
}

if (!lastUpdateTime || currentTime - lastUpdateTime >= 10 * 1000) {
    currentNumber += 10;
    localStorage.setItem('lastUpdateTime', currentTime);
    localStorage.setItem('number', currentNumber);
}

document.getElementById('number').innerText = currentNumber;

