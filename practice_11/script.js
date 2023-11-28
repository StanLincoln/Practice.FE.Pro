// Массив чисел (примитивы)
const numbers = [1, 3, 6, 2, 4, 0, 9, 7, 5, 10, 15, 12, 11, 9, 2, 7];

// Массив строк (примитивы)
const strings = ["this", "is", "an", "array", "of", "simple", "strings"];

const products = [
  {
    name: "Ball",
    category: "Sport",
    img: "./assets/ball.jpeg",
    price: 100,
    description: "Just the simple ball",
  },
  {
    name: "Gloves",
    category: "Sport",
    img: "./assets/gloves.jpg",
    price: 140,
    description: "Tactical gloves",
  },
  {
    name: "Sport shoes",
    category: "Sport",
    discount: true,
    img: "./assets/shoes.png",
    price: 320,
    description: "Sport shoes. The best choice for running",
  },
  {
    name: "Hammer",
    category: "Tools",
    img: "./assets/hammer.jpeg",
    price: 40,
    description: "The best way to convince somebody that you are right.",
  },
  {
    name: "Saw",
    category: "Tools",
    discount: true,
    img: "./assets/saw.jpeg",
    price: 75,
    description:
      "This will help you in case the hammer could not convince your companion",
  },
  {
    name: "Shark toy",
    category: "Other",
    img: "./assets/shark.jpeg",
    price: 45,
    description: "From IKEA with love",
  },
  {
    name: "Truck",
    category: "Other",
    img: "./assets/truck.jpeg",
    price: 80,
    description: "Truck. Nothing more.",
  },
];

// 1. Вспоминаем работу с методами массивов. У нас есть массив объектов `products` Нужно получить из него массив названий товаров. Решить задачу двумя способами: через `map`, и через `reduce`.

// const newArr = products.map(el => el.name)
// console.log(newArr);

// const newArr = products.reduce((acc, val) => {
//     acc.push(val.name);
//     return acc;
//     },
//     []
//     )
// console.log(newArr);

// 2. Из массива строк, получить объект, в котором ключами будут сами строки, а значениями - длины этих строк.

// const strings = ['this', 'is', 'an', 'array', 'of', 'simple', 'strings'];
// const newArr = strings.reduce((acc, val) => {
//     acc[val] = val.length;
//     return acc;
// },
// {})
// console.log(newArr);

// 3. Из массива чисел получить объект, который будет содержать 2 свойства: `even`, `odd`. Оба свойства - массивы. В первом массиве должны быть нечетные числа из исходного массива, а во втором - четные.

// const numbers = [1, 3, 6, 2, 4, 0, 9, 7, 5, 10, 15, 12, 11, 9, 2, 7];
// const newArr = numbers.reduce(
//   (acc, val) => {
//     val % 2 === 0 ? acc.even.push(val) : acc.odd.push(val);
//     return acc;
//   },
//   { even: [], odd: [] }
// );
// console.log(newArr);

// 4. Из массива объектов `products`, получить массив, который содержит уникальные категории товаров. НЕ использовать Set!

// const uniqueCategories = products.reduce(
//     (accum, product) => {
//         const cat = product.category;
//         if (!accum.includes(cat)) {
//             accum.push(cat);
//         }
//         return accum;
//     },
//     []
// )

// 5. Из массива объектов `products` получить объект, у которого ключами будут категории товаров, а значениями - массивы с наименованиями товаров этой категории.
// 6. Из массива объектов `products` получить объект, в котором ключами будут категории товаров, а значениями - количество товаров этой категории.
// 7. Переходим к DOM. Наш массив содержит данные о товарах. Нужно научиться рендерить карточки товаров. Первая задача - делаем функцию отрисовки карточки товара. Она принимает в аргументе объект с данными товара.
//  - сама карточка - это `div` (контейнер), он должен иметь класс `productCard`
//  - карточка содержит название товара, картинку товара, цену, категорию и описание. Название - `h3` с классом `productTitle`, цена - параграф с классом `productPrice`, категория - параграф с классом `productCategory`, картинка - изображение с классом `productImg`, и описание - параграф с классом `productDescription`.
//  - функция должна создать и вернуть DOM-узел, но НЕ встраивать его в DOM.
// 8. Теперь напишем функцию отрисовки списка товаров `renderProductList`. Она должна принять массив товаров, и отрисовать эти товары в `div.productContainer`.
// 9. Добавляем немного интерактива. Нужно чтобы при клике на карточку, к ней применялся класс `productCardHighlighted`. А при повторном клике - этот класс должен быть удален с карточки.
// 10. Теперь работаем с удалением элементов из DOM. Нужно, чтобы при клике на карточку, эта карточка удалялась из DOM-дерева.
// 11. Верстаем форму для добавления нового товара. Она должна иметь 4 поля ввода: для названия, цены, категории и описания товара, и кнопку "Добавить товар". Сверстать ее нужно средствами JavaScript - написать функцию `renderProductForm`. При клике на кнопку - создавать новый объект товара, и добавлять его в контейнер. В идеале, для выбора категории товара нам стоит использовать не текстовое поле, а выпадающий список, но это необязательно.