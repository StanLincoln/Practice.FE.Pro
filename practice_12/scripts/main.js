// Подопытные данные
const products = [
    {
        name: "Ball",
        category: "Sport",
        img: "./assets/ball.jpeg",
        price: 100,
        description: 'Just the simple ball'
    },
    {
        name: "Gloves",
        category: "Sport",
        img: "./assets/gloves.jpg",
        price: 140,
        description: 'Tactical gloves'
    },
    {
        name: "Sport shoes",
        category: "Sport",
        discount: true,
        img: "./assets/shoes.png",
        price: 320,
        description: 'Sport shoes. The best choice for running'
    },
    {
        name: "Hammer",
        category: "Tools",
        img: "./assets/hammer.jpeg",
        price: 40,
        description: 'The best way to convince somebody that you are right.'
    },
    {
        name: "Saw",
        category: "Tools",
        discount: true,
        img: "./assets/saw.jpeg",
        price: 75,
        description: 'This will help you in case the hammer could not convince your companion'
    },
    {
        name: "Shark toy",
        category: "Other",
        img: "./assets/shark.jpeg",
        price: 45,
        description: 'From IKEA with love'
    },
    {
        name: "Truck",
        category: "Other",
        img: "./assets/truck.jpeg",
        price: 80,
        description: 'Truck. Nothing more.'
    }
];

// 2. Пишем в JS функцию `fillProfuctForm` - она примет объект с данными товара, и должна заполнить данные формы.

const nameInput = document.querySelector('#productName');
const priceInput = document.querySelector('#productPrice');
const categoryInput = document.querySelector('#productCategory');
const descriptionInput = document.querySelector('#productDescription');

function fillProductForm(product){
    nameInput.value = product.name;
    priceInput.value = product.price;
    categoryInput.value = product.category;
    descriptionInput.value = product.description;
}
fillProductForm(products[0]);

// 3. Пристрелочная задача на добавление DOM-элементов средствами JS. Добавить в форму кнопку "Отмена".

const newProductForm = document.querySelector('#newProductForm');
const cancelButton = document.createElement('button');
cancelButton.textContent = 'Cancel';
newProductForm.append(cancelButton);

//  На кнопку Cancel добавить обработчик - выводить в консоль сообщение "Кнопка отмена нажата"

cancelButton.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('Кнопка отмена нажата');
});

// 4. Работаем с карточками товаров. Массив `products` содержит данные о товарах. Нужно научиться рендерить карточки товаров. Первая задача - делаем функцию отрисовки карточки товара `renderProduct`. Она принимает в аргументе объект с данными товара.
//  - сама карточка - это `div` (контейнер), он должен иметь класс `productCard`
//  - карточка содержит название товара, картинку товара, цену, категорию и описание. Название - `h3` с классом `productTitle`, цена - параграф с классом `productPrice`, категория - параграф с классом `productCategory`, картинка - изображение с классом `productImg`, и описание - параграф с классом `productDescription`. Изображению нужно проставить атрибут `src`, если у объекта с данными товара существует свойство `img`.
//  - функция должна создать и вернуть DOM-узел, но НЕ встраивать его в DOM.
const productsContainer = document.querySelector('.productsContainer');

function renderProduct(product){
    const productCard = document.createElement('div');
    productCard.classList.add('productCard');
    // 6. Добавляем немного интерактива. Нужно чтобы при клике на карточку, к ней применялся класс `productCardHighlighted`. А при повторном клике - этот класс должен быть удален с карточки.
    productCard.addEventListener('click', (event) => {
    productCard.classList.toggle('productCardHighlighted')
});

    const productTitle = document.createElement('h3');
    productTitle.textContent = product.name;
    productTitle.classList.add('productTitle');

    const productPrice = document.createElement('p');
    productPrice.textContent = product.price;
    productPrice.classList.add('productPrice');

    const productCategory = document.createElement('p');
    productCategory.textContent = product.category;
    productCategory.classList.add('productCategory');

    const productImg = document.createElement('img');
    productImg.src = !!product.img ? product.img : '';
    productImg.classList.add('productImg');

    const productDescription = document.createElement('p');
    productDescription.textContent = product.description;
    productDescription.classList.add('productDescription');

    productCard.append(productImg, productTitle, productPrice, productCategory, productDescription);

    return productCard;
}

// const prod = renderProduct(products[0]);
// productsContainer.append(prod);

// 5. Работаем с формой добавления нового товара. Нужно добавить обработчик события `submit` на форму. Первая задача - добавить обработчик события `submit` на форму. Она принимает в аргументе объект с данными товара.

function renderProductList(products){
    products.forEach(product => {
        const renderedProduct = renderProduct(product);
        productsContainer.append(renderedProduct);
    });
}
renderProductList(products);

// 6. Добавляем немного интерактива. Нужно чтобы при клике на карточку, к ней применялся класс `productCardHighlighted`. А при повторном клике - этот класс должен быть удален с карточки.



// 7. Теперь работаем с удалением элементов из DOM. Добавим в функцию `renderProduct` код, чтобы он добавил в нашу карточку (под описанием товара), кнопку "Удалить товар". И нужно, чтобы при клике на эту кнопку, карточка удалялась из DOM-дерева.
