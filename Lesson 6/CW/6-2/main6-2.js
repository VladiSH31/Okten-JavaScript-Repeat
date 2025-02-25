let arr = [];
console.log(typeof []);
console.log(typeof {});
console.log(Array.isArray(arr));


// let arr1 = [];
// arr1[arr.length] = 1;
// console.log(arr1);
//
// arr1.push('method push');
// console.log(arr1);

console.log(arr.push('new element1'));
console.log(arr.push('new element2'));
console.log(arr.push('new element3'));
console.log(arr.push('new element4'));
console.log(arr.push('new element5'));
console.log(arr.push('new element6'));
console.log(arr.push('new element7'));
console.log(arr);

// push - додає вкінці масиву
// pop - видаляє вкінці масиву
// unshift - додає спочатку
// shift - видаляє спочатку

console.log(arr.pop());
console.log(arr);

console.log(arr.unshift(11, 22, true, 'new element0'));
console.log(arr);

console.log(arr.shift());
console.log(arr);

let join = arr.join(';');
console.log(join);

let numbers= [99, 111, 222];

let concat = arr.concat(numbers);
console.log(concat);
console.log(arr);

console.log(numbers.reverse());

let slice= concat.slice(0, 5);
console.log(slice);
console.log(concat);

let splice = concat.splice(0, 3, 'hello', ' ', 'worlf');
console.log(splice);
console.log(concat);

console.log(concat.indexOf(99));
concat.splice(9, 1);
console.log(concat);

console.log(concat.includes(111));