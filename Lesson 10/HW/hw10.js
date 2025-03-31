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

let f1 = document.forms.f1;

let userDiv = document.createElement('div');
document.body.append(userDiv)

f1.onsubmit = function () {
    let name = f1.username.value;
    let age = f1.userage.value;
    let surname = f1.usersurname.value;
    let obj = {name, age, surname}
    console.log(obj);
    userDiv.innerText = name + ' ' + age + ' ' + surname;
}
