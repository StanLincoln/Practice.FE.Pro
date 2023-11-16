// Массив чисел (примитивы)
const numbers = [1,3,6,2,4,0,9,7,5,10,15,12,11,9,2,7];

// Массив строк (примитивы)
const strings = ['this', 'is', 'an', 'array', 'of', 'simple', 'strings'];

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

// Массив объектов
let products = [ball, gloves, shoes, hammer, saw];

// 1. Метод filter
// 1.1 - Дан массив чисел. Вывести в консоль массив, состоящий только из нечетных элементов исходного массива.

//  const numbers = [1,3,6,2,4,0,9,7,5,10,15,12,11,9,2,7];
//  const filteredArray = numbers.filter( el => el % 2 !== 0);
// console.log(filteredArray);

// 1.2 - Поиск товаров по категории. Дан массив товаров. Вывести в консоль массив из товаров, у которых категория - "Tools".

// const toolsProducts = products.filter( product => product.category === 'Tools' );
// console.log(toolsProducts);

// 1.3 - Поиск уцененных инструментов. Дан массив товаров. Вывести в консоль массив из товаров, на которые есть скидка (т.е. присутствует флаг discount), и которые относятся к категории "Инструменты".

// function isDiscounted(product) {
//     return product.discount && product.category === 'Tools';
// }
// const discountedTools = products.filter( isDiscounted );
// console.log(discountedTools);

// 1.4 - Реализовать свой filter.

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

// 2. Методы поиска в массиве
// 2.1 - найти в массиве чисел первое число, кратное 3.

// const firstNum = numbers.find(el => el % 3 === 0);
// console.log(firstNum);

// 2.2 - найти в массиве чисел индекс первого числа, кратного 5.

// const firstIndex = numbers.findIndex( el => el % 5 === 0 );
// console.log(firstIndex);

// 2.3 - найти в массиве строк первую строку, длина которой - 5 символов

// const firstString = strings.find( str => str.length === 5 );
// console.log(firstString);

// 2.4 - найти индекс первого товара в массиве товаров, чья цена больше 200.

// const firstProductIndex = products.findIndex( prod => prod.price > 200 );
// console.log(firstProductIndex);

// 3. сортировка (метод sort).
// 3.1 - Отсортировать массив строк `strings` по возрастанию.

// strings.sort();
// console.log(strings);

// 3.2 - Отсортировать массив чисел `numbers` по убыванию.

// numbers.sort( (a,b) => b - a );
// console.log(numbers);

// 3.3 - Отсортировать массив объектов `products` по возрастанию цены.

// products.sort( (prod1, prod2) => prod1.price - prod2.price );
// console.log(products);

// 3.4 - Отсортировать массив строк по убыванию кол-ва символов в строке;

// const strings = ['this', 'is', 'an', 'array', 'of', 'simple', 'strings'];
// strings.sort((str1, str2) => str2.length - str1.length)
// console.log(strings);

// 3.5 - отсортировать массив объектов (товары) по категории (в алфавитном порядке), и по возрастанию цены. Т.е упорядочить по категориям, и в разрезе категорий - по возрастанию цены.

// products.sort((a, b) => {
//     const categoryComparison = a.category.localeCompare(b.category);
//     if (categoryComparison === 0) {
//         return a.price - b.price;
//     }
//     return categoryComparison;
// });
// console.log(products);

// 4. Работа с методом `reduce`.
// 4.1 - получить сумму элементов массива numbers

// const numbers = [1,3,6,2,4,0,9,7,5,10,15,12,11,9,2,7];
// const result = numbers.reduce( (acc, val) => {
//     return acc + val;
// }, 0);
// console.log('Sum: ', result)

// 4.2 - получить суммарную стоимость всех товаров массива `products`

// const productsSum = products.reduce( (acc, val) => {
//     return acc + val.price;
// }, 0);
// console.log('Total price is: ' + productsSum);

// 4.3 - из массива строк `strings` получить объект, в котором ключами будут строки из массива, а значениями - длины этих строк. Пример:
//  ```
//  // Исходный массив
//  let arr = ["This", "is", "an", "array", "of", "strings"];
//  // Ожидаемый результат
//  {
//   this: 4,
//   is: 2,
//   an: 2,
//   array: 5,
//   of: 2,
//   strings: 7
//  }
//  ```

// const newArr = arr.reduce((acc, val) => {
//     acc[val]=val.length
//     return acc
// }, {})
// console.log(newArr);

// 4.4 - получить массив категорий товаров (т.е. нужно пройтись по массиву товаров методом reduce, и добавлять в "аккумулятор" свойство category рассматриваемого товара)

// const newArr = products.reduce((acc, val) => {
//     if (!acc.includes(val.category)) {
//         acc.push(val.category);
//     }
//     return acc
// }, [] )
// console.log(newArr);

// 4.5 - задача "со звездочкой". Получить объект, в котором будут суммарные стоимости товаров по категориям.

// const newArr = products.reduce((acc, val) => {
//     const { category, price } = val;
//     acc[category] = (acc[category] || 0) + price;
//     return acc
// }, {} )
// console.log(newArr);
