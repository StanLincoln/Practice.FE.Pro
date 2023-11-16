
// Массив чисел (примитивы)
const numbers = [1,3,6,2,4,0,9,7,5,10,15,12,11,9,2,7];

// Массив объектов
const ball = {
    name: "Ball",
    category: "Sport",
    img: "./assets/ball.jpeg",
    price: 100
};
const gloves = {
    name: "Gloves",
    category: "Sport",
    img: "./assets/gloves.jpg",
    price: 140
};
const shoes = {
    name: "Sport shoes",
    category: "Sport",
    discount: true,
    img: "./assets/shoes.png",
    price: 320
};
const hammer = {
    name: "Hammer",
    category: "Tools",
    img: "./assets/hammer.jpeg",
    price: 40
};
const saw = {
    name: "Saw",
    category: "Tools",
    discount: true,
    img: "./assets/saw.jpeg",
    price: 75
};
const shark = {
    name: "Shark toy",
    category: "Other",
    img: "./assets/shark.jpeg",
    price: 45
};

let products = [ball, gloves, shoes, hammer, saw];

// 1. Добавление/удаление элементов в/из массива
// 1.1 - добавить элемент в конец массива чисел (число 45);

// numbers.push(45)
// console.log(numbers);

// 1.2 - добавить несколько элементов в конец массива чисел (числа 45, 68, 23);

// numbers.push(45, 68, 23)
// console.log(numbers);

// 1.3 - добавить объект в конец массива объектов (создать новый объект товара, по образу существующих).

// const newProduct = {
//     name: 'Name',
//     category: 'Sport',
//     img: '',
//     price: 50
// }

// products.push(newProduct)
// console.log(products);

//  1.4 - удалить последний элемент из массива чисел.

// const numbers = [1,3,6,2,4,0,9,7,5,10,15,12,11,9,2,7];
// numbers.pop()
// console.log(numbers);

//  1.5 - добавить элемент в начало массива чисел (число 9)

// const numbers = [1,3,6,2,4,0,9,7,5,10,15,12,11,9,2,7];
// numbers.unshift(9)
// console.log(numbers);

//  1.6 - удалить первый элемент из массива чисел

// const numbers = [1,3,6,2,4,0,9,7,5,10,15,12,11,9,2,7];
// numbers.shift()
// console.log(numbers);

// 1.7  - получить "срез" массива чисел - это должен быть новый массив, который содержит элементы массива `numbers` со 2 по 5.

// const numbers = [1,3,6,2,4,0,9,7,5,10,15,12,11,9,2,7];
// const newArr = numbers.slice(2, 5)
// console.log(newArr);

// 1.8  - заменить в массиве элементы: вместо строк 'simple', 'and', 'lowercased', теперь должна быть строка 'tiny'. Здесь нам пригодится метод `splice`

// const strings = ["this", "is", "an", "array", "of", "simple", "strings"];
// const newString = strings.splice(("simple", "and", "lowercased"), "tiny");
// console.log(newString);

// 1.9  - добавить в массив строк новые элементы. Нужно добавить после строки 'simple' две строки: 'and', 'lowercased'. То есть вставляем элементы в середину массива.

// const strings = ["this", "is", "an", "array", "of", "simple", "strings"];
// const index = strings.indexOf("simple");
// if (index !== -1) {
//     strings.splice(index + 1, 0, "and", "lowercased");
// }
// console.log(strings);

// 2. Методы поиска в массиве
// 2.1  - проверить, содержит ли массив строк строку 'array'.

// const strings = ["this", "is", "an", "array", "of", "simple", "strings"];
// const containsArray = strings.includes("array");
// console.log(containsArray);

// 2.2  - создать два новых объекта. Первый - через литерал объекта и в нем должны быть такие же свойства как в объекте `ball`, а второй - как копию объекта `ball` (т.е. ссылка на тот же объект). Проверить, содержит ли массив объектов эти объекты. Пояснить результат.

// // Создание первого объекта через литерал объекта
// const newObjLiteral = {
//     name: "Ball",
//     category: "Sport",
//     img: "./assets/ball.jpeg",
//     price: 100
// };

// // Создание второго объекта как копии объекта ball
// const newObjCopy = { ...ball };

// // Проверка, содержатся ли эти объекты в массиве products
// const containsObjLiteral = products.includes(newObjLiteral);
// const containsObjCopy = products.includes(newObjCopy);

// console.log(containsObjLiteral); // Вернет false
// console.log(containsObjCopy);    // Вернет true


// 2.3  - найти индекс числа 0  в массиве чисел

// const numbers = [1,3,6,2,4,0,9,7,5,10,15,12,11,9,2,7];
// const findZero = numbers.findIndex(el => el === 0)
// console.log(findZero);

//  2.4 - найти индекс объекта `shark` (т.е. переменной `shark`) в массиве объектов

// const findShark = products.findIndex(el => el === 'shark')
// console.log(findShark);

//  2.5 - найти индекс последнего вхождения числа 9 в массиве чисел

// const numbers = [1,3,6,2,4,0,9,7,5,10,15,12,11,9,2,7];
// const lastIndex = numbers.lastIndexOf(9);
// console.log(lastIndex);


// 3. Другие методы массивов
//  3.1 - объединить наш массив строк в одно предложение. Результатом должна быть строка, разделенная пробелами.

// const strings = ["this", "is", "an", "array", "of", "simple", "strings"];
// const sentence = strings.join(" ");
// console.log(sentence);

//  3.2 - объединить наш массив чисел в одно большое число (т.е. без разделителей). Подсказка - используем тот же метод, что и в предыдущей задаче.

// const numbers = [1,3,6,2,4,0,9,7,5,10,15,12,11,9,2,7];
// const num = numbers.join('')
// console.log(num);

//  3.3 - вывести в консоль массив строк в обратном порядке

// const strings = ["this", "is", "an", "array", "of", "simple", "strings"];
// const reversedStrings = strings.reverse();
// console.log(reversedStrings);

// 4. Методы с колбэком. Перебор массива.
//  4.1 - пройтись по массиву чисел, для каждого числа вывести, является ли оно четным.

// const numbers = [1, 3, 6, 2, 4, 0, 9, 7, 5, 10, 15, 12, 11, 9, 2, 7];
// numbers.forEach((el) => {
//     if (el % 2 === 0) {
//         console.log(`${el} is even`);
//     }
//     else {
//         console.log(`${el} is odd`);
//     }
// } )

//  4.2 - пройтись по массиву строк, для каждой строки, если она меньше 4 символов, выводить `short`, иначе - `long`

// const strings = ["this", "is", "an", "array", "of", "simple", "strings"];
// strings.forEach((el) => {
//     if(el.length < 4) {
//         console.log(`${el} is short`);
//     }else console.log(`${el} is long`);
// })

//  4.3 - пройтись по массиву товаров, вывести в консоль названия всех товаров

// products.forEach(product => {
//     console.log(product.name);
// });

// 4.4 - из массива чисел, получить новый массив, который будет содержать квадраты чисел

// const numbers = [1, 3, 6, 2, 4, 0, 9, 7, 5, 10, 15, 12, 11, 9, 2, 7];
// const newArr = numbers.map(el => el**2)
// console.log(newArr);

// 4.5  - из массива строк получить новый массив, который будет содержать массив ОБЪЕКТОВ, у которых будут свойства:
//      * value - сама строка
//      * size - если длина строки меньше 4 символов, то `short`, иначе - `long`

// const strings = ["this", "is", "an", "array", "of", "simple", "strings"];
// const newArr = strings.map(str => ({
//     value: str,
//     size: str.length < 4 ? 'short' : 'long'
// }));
// console.log(newArr);

//  4.6 - из массива товаров получить массив имен товаров

// const newArr = products.map(el => el.name)
// console.log(newArr);

// 4.7  - из массива товаров получить массив "уцененных" товаров. В новом массиве должны быть объекты товаров, у которых цена вдвое меньше, чем у исходных товаров.

// const newArr = products.map(el => ({
//     name: el.name, 
//     price: el.price*0.5
// }))
// console.log(newArr);

//  4.8 - задача "со звездочкой". Реализовать свой map.

// // Своя реализация метода map
// function myMap(arr, callback) {
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//         result.push(callback(arr[i], i, arr));
//     }
//     return result;
// }

// // Пример использования
// const numbers = [1, 2, 3, 4, 5];

// // Умножаем каждый элемент на 2 с использованием своего метода map
// const doubledNumbers = myMap(numbers, (num) => num * 2);

// console.log(doubledNumbers); // Выведет: [2, 4, 6, 8, 10]


// 5. Метод filter
// 5.1 - Дан массив чисел. Вывести в консоль массив, состоящий только из нечетных элементов исходного массива.

// const numbers = [1, 3, 6, 2, 4, 0, 9, 7, 5, 10, 15, 12, 11, 9, 2, 7];
// const newArr = numbers.filter(el => el%2 !== 0)
// console.log(newArr);

// 5.2 - Поиск товаров по категории. Дан массив товаров. Вывести в консоль массив из товаров, у которых категория - "Tools".

// const newArr = products.filter(el => el.category === 'Tools')
// console.log(newArr);

// 5.3 - Поиск уцененных инструментов. Дан массив товаров. Вывести в консоль массив из товаров, на которые есть скидка (т.е. присутствует флаг discount), и которые относятся к категории "Инструменты".

// const newArr = products.filter(el => el.discount && el.category === 'Tools')
// console.log(newArr);

// 5.4 - Реализовать свой filter.

// function customFilter(arr, callback) {
//     const result = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (callback(arr[i], i, arr)) {
//             result.push(arr[i]);
//         }
//     }

//     return result;
// }

// // Пример использования:
// let numbers = [1, 2, 3, 4, 5, 6];

// let filteredNumbers = customFilter(numbers, num => num > 3);

// console.log(filteredNumbers);  // Вывод: [4, 5, 6]


