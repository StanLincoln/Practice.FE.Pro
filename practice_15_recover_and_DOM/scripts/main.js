// Источник данных
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

const productsContainer = document.querySelector('.productsContainer');

function renderProduct(product){
  const productCard = document.createElement('div');
  productCard.classList.add('productCard');

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

function renderProductList(products) {
  productsContainer.innerHTML = '';
  products.forEach( product => {
      const renderedProduct = renderProduct(product);
      productsContainer.append(renderedProduct);
  });
}

// 1. Делаем подготовку к "изменению темы" нашей страницы. Средствами JS, добавляем на страницу (в `main.container`) выпадающий список (`select`), с двумя опциями, для светлой и темной тем соответственно.
//  - создаем средствами JS выпадающий список (`createElement`)
//  - создаем опции выпадающего списка. Значения (`value`) опций - `light`, `dark` соответственно
//  - добавляем опции в список (через `append`)
//  - добавляем список на страницу

const mainContainer = document.querySelector('.mainContainer');
const select = document.createElement('select');
mainContainer.append(select);

const lightOption = document.createElement('option');
lightOption.value = 'light';
lightOption.textContent = 'Light';
select.append(lightOption);

const darkOption = document.createElement('option');
darkOption.value = 'dark';
darkOption.textContent = 'Dark';
select.append(darkOption);

// 2. Добавляем обработчик события выбора в списке (`change`). При выборе, нужно выводить в консоль `value` выбранной опции.

select.addEventListener('change', (event) => {
    console.log(event.target.value);
});

// 3. Реализуем изменение темы. Классы для темы уже созданы в стилях, это `themeLight`, `themeDark`. Тему нужно применять как класс к `body`. То есть, если выбран `light`, то нужно применть к `body` класс `themeLight`, и удалить стиль `themeDark`. И наоборот.
document.body.classList.add('themeLight');

select.addEventListener('change', (event) => {
    if (event.target.value === 'light') {
        document.body.classList.add('themeLight');
        document.body.classList.remove('themeDark');
    } else {
        document.body.classList.add('themeDark');
        document.body.classList.remove('themeLight');
    }
});

// 4. Теперь поработаем с событиями инпутов. Средствами JS, добавляем на страницу инпут - это будет инпут для поиска товаров по названию. Добавим ему плейсхолдер и также добавить класс `input`. Нам нужно, чтобы при изменении инпута (когда мы что-то в нем вводим), мы бы перерисовывали список товаров так, чтобы были видны только те товары, названия которых содержат то, что введено в инпуте. Шаги решения:
//  - добавляем инпут
//  - добавляем на него обработчик события ввода в инпут
//  - в обработчике, нам нужно проверить, введено ли что-нибудь в инпуте. Если да - тогда фильтруем список товаров (`products`), и результат рендерим с использованием функции `renderProductList`. А если нет - то рендерим исходный список товаров.

const input = document.createElement('input');
input.classList.add('input');
input.placeholder = 'Введите название товара';
mainContainer.append(input);

input.addEventListener('input', (event) => {
    const input = document.querySelector('input');
if (!!input.value) {
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(event.target.value.toLowerCase()));
    renderProductList(filteredProducts);
}else{
    renderProductList(products);
}
});

// 5. Теперь закрепим работу с событиями инпутов. Средствами JS, добавляем на страницу еще 2 инпута. Это будет фильтр по цене (от/до), и кнопку "Поиск". Инпутам даем класс `input`. Нужно, чтобы наши инпуты "не разрешали" ввода нечисловых значений. Как это сделать:
//  - нужно контролировать результат ввода после ухода фокуса из инпута (событие `blur`)
//  - если в инпуте ничего не введено (пусто) - это нормальная ситуация
//  - если в инпуте введено нечто, что не является числом (проверяем как `Number.parseInt(value) !== NaN`) - то ставим фокус в этот инпут, и применяем к нему класс `errorInput`.
//  - если в инпуте все в порядке - убираем с него клас `errorInput`.

const priceInput1 = document.createElement('input');
priceInput1.classList.add('input');
priceInput1.placeholder = 'от';
mainContainer.append(priceInput1);

const priceInput2 = document.createElement('input');
priceInput2.classList.add('input');
priceInput2.placeholder = 'до';
mainContainer.append(priceInput2);

  function blurHandler(event) {
    if (!!event.target.value) {
        if (!Number.isNaN(Number.parseInt(event.target.value))) {
            event.target.classList.remove('errorInput');
        }
        else {
            event.target.focus();
            event.target.classList.add('errorInput');
        }
    }
    else {
        event.target.classList.remove('errorInput');
    }
}

priceInput1.addEventListener('blur', blurHandler);

priceInput2.addEventListener('blur', blurHandler);

// 6. Теперь реализуем фильтр по ценам. Добавляем на страницу кнопку, ей даем класс `button`. При нажатии на эту кнопку, нам нужно отфильтровать список товаров - мы хотим рендерить только те товары, у которых цена между "От" и "До".
//  - нужно проверить, что инпуты не ошибочны (не содержат класса `errorInput`)
//  - если значение "От" отсутствует - то ищем от 0.
//  - если значение "До" отсутствует - ищем до Number.MAX_VALUE

const btn = document.createElement('button');
btn.classList.add('button');
btn.textContent = 'Поиск';
mainContainer.append(btn);

btn.addEventListener('click', (event) => {
    const priceFrom = priceInput1.value;
    const priceTo = priceInput2.value;
    if (!priceFrom &&!priceTo) {
        const filteredProducts = products.filter(product => product.price >= 0);
        renderProductList(filteredProducts);
    } else if (!priceFrom) {
        const filteredProducts = products.filter(product => product.price <= Number.MAX_VALUE);
        renderProductList(filteredProducts);
    } else if (!priceTo) {
        const filteredProducts = products.filter(product => product.price >= priceFrom);
        renderProductList(filteredProducts);
    } else {
        const filteredProducts = products.filter(product => product.price >= priceFrom && product.price <= priceTo);
        renderProductList(filteredProducts);
    }
});

// 7. Задача "со звездочкой". Реализовать функцию `saveInputsData`, которая будет сохранять значения всех инпутов на странице, у которых есть ID, в localStorage. Используем объект `inputsData`. Ключи объекта - ID инпутов, а значения объекта - то, что введено в эти инпуты. И реализовать обратную функцию, `restoreInputsData`, которая извлечет из ЛС этот объект, и если он существует - то заполнит соответствующие инпуты значениями.