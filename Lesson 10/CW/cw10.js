let target = document.getElementById('target');
target.onclick = function (event) {
    console.log('click')
    console.log(event)
};

// target.onmousemove = function (event) {
//     console.log(event.clientX, event.clientY);
//     let r = event.clientY;
//     let g = event.clientX;
//     let b = event.clientY;
//     this.style.background = `rgb(${r}, ${g}, ${b})`
//
// }

target.onclick = function () {
    console.log('asdasda');
}

target.addEventListener('click', function (event) {
        console.log('fas');
    })

target.onmouseover = function () {
    console.log('over');
}

target.onmouseleave = function () {
    console.log('leave');
}

// let i1 = document.getElementById('i1');
//
// i1.oninput = function () {
//     target.innerText = this.value;
// };

let f1 = document.forms.f1;

f1.onsubmit = function (event) {
    event.preventDefault();
    console.log('hello');
    let user = {name: this.username.value}
    console.log(user);
}

document.onreadystatechange = function () {
    if (document.readyState === 'interactive') {
        document.body.innerText = 'Loading Begin'
    }
    if (document.readyState === 'complete') {
        document.body.innerText = 'Complete Loading'
    }
}

localStorage.setItem('hello', 'world')
let item = localStorage.getItem('hello')
console.log(item);

localStorage.clear()

localStorage.setItem('user', JSON.stringify({id:1, name: 'John'}))
let user = localStorage.getItem('user');
console.log(user);
let parsedUser = JSON.parse(user);

console.log(parsedUser);
parsedUser.age = 40;
localStorage.setItem('user', JSON.stringify(parsedUser))

