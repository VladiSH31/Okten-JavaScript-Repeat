// #iz6emEsP2BA
// – є масив
// let coursesAndDurationArray = [
//
//     {title: ‘JavaScript Complex’, monthDuration: 5},
//
//     {title: ‘Java Complex’, monthDuration: 6},
//
//     {title: ‘Python Complex’, monthDuration: 6},
//
//     {title: ‘QA Complex’, monthDuration: 4},
//
//     {title: ‘FullStack’, monthDuration: 7},
//
//     {title: ‘Frontend’, monthDuration: 4}
//
// ];
//
// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
// Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції

let coursesAndDurationArray = [
    {title:'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let mapCourses = coursesAndDurationArray.map((value, index) => ({...value, id: index+1}))
console.log(mapCourses);

//#AiN5CoUQ
// Створити функцію, яка робить глибоку копію об’єкту.
// Додати перевірки на undefined, null, NaN.
// Подумати і реалізувати логіку, в якій кінцевий об’єкт буде мати функції,які в нього були до цього моменту.

function cloner(obj) {
    if (obj) {
        let functions = []
        for (const key in obj) {
            if (typeof obj[key] === 'function') {
                let copyFunctions = obj[key].bind({});
                functions.push({copyFunctions, key});
            }
        }

        let cloneObj = JSON.parse(JSON.stringify(obj));
        for (const function1 of functions) {
            cloneObj[function1.key] = function1.copyFunctions;
        }
        return cloneObj;
    }
    throw new Error('Error')
}

let cloneObj = cloner({id:99, name: 'Dan', age:33, greeting () {}, info () {}});
console.log(cloneObj);