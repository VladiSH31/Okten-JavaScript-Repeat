// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

let calcRectangleArea = (a, b) => a * b;

console.log(calcRectangleArea(3, 4));

// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r

let calcCircleArea = (r) => 2 * r * Math.PI;

console.log(calcCircleArea(8));

// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

let calcCilinderArea = (r, h) => 2 * r * h * Math.PI;

console.log(calcCilinderArea(5, 9));

// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент

let arrDisplay = (arr) => {
    for (const elementArr of arr) {
        console.log(elementArr)
    }
}

arrDisplay([1, 2, 3, 4, 5, 6]);

// #59g0IsA
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

let textCreator = (text) => {
    document.write(`<p>${text}</p>`)
}

textCreator('Hello repeat');
// #hOL6126
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let textCreatorWithUl = (text) => {
    document.write(`
        <ul>`);
    document.write(`
        <li>${text}</li>
        <li>${text}</li>
        <li>${text}</li>
    `)
    document.write(`</ul>`)
}

textCreatorWithUl('Hello repeat');
// #0Kxco1edSN
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let liCreatorWithText = (text, li) => {
    document.write(`
        <ul>`);
    for (let i = 0; i < li; i++) {
        document.write(`
            <li>${text}</li>
        `)
    }
    document.write(`</ul>`)
}

liCreatorWithText('Hi i`ll try', 5)

// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let primitiveArray = [1, 2, 3, 'hi', 'bey', false]
let liCreatorOffArray = (arr) => {
    document.write(`
        <ul>`);
    for (let i = 0; i < arr.length; i++) {
        const arrElement = arr[i];
        document.write(`
            <li>${arrElement}</li>
        `)
    }
    document.write(`</ul>`)
}

liCreatorOffArray(primitiveArray);

// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

let objArray = [
    {id: 1, name: 'Donald', age: 78},
    {id: 2, name: 'Vince', age: 56},
    {id: 4, name: 'Anthony', age: 34},
];

let objDisplay = (arr) => {
    for (const arrElement of arr) {
        document.write(`
            <div>`)

        for (const Key in arrElement) {
            document.write(`<p>${Key} - ${arrElement[Key]}</p>`)
        }
        document.write(`</div>`)
    }
}

objDisplay(objArray);


// #pghbnSB
// - створити функцію яка повертає найменьше число з масиву

let minNumber = (array, i) => {
    if (i === array.length - 1) {
        return array[i];
    }
    let minNum = minNumber(array, i + 1);
    if (array[i] < minNum) {
        minNum = array[i]
    }
    return minNum;
}

console.log(minNumber([34, 23, 56, 14, 9, 34, 49, 99, 1], 0));

// #EKRNVPM
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let sum = (arr) => {
    let sumArrNums = 0;
    for (const arrElement of arr) {
        sumArrNums += arrElement;
    }
    return sumArrNums;
}

console.log(sum([10, 10, 20]));

// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let swap = (arr, i1, i2) => {
    let temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
    return arr
}

console.log(swap([11, 22, 33, 44], 2, 3));

// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

let exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    for (const currencyValue of currencyValues) {
        if (currencyValue.currency === exchangeCurrency) {
            return sumUAH / currencyValue.value;
        }
    }
}

console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));