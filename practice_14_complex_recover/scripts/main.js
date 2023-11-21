// Источник данных
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
// Отфильтровать товары по категории Other

// const newArr = products.filter(el => el.category ==='Other')
// console.log(newArr);

// Создать массив из имен товаров способом map и reduce

// const newArr = products.map( el => el.name)
// console.log(newArr);

// const newArr = products.reduce((acc, val) => {
// acc.push(val.name)
// return acc
// }, [])
// console.log(newArr);

// const onlyOther = products.reduce((acc, val) =>{
//     if (val.category === "Other" ) { 
//         acc.push(val)
//     }
//     return acc;
// },[])
// console.log(onlyOther);

const productsContainer = document.querySelector(".productsContainer");

function renderProduct(product) {
  const productCard = document.createElement("div");
  productCard.classList.add("productCard");

  const productTitle = document.createElement("h3");
  productTitle.textContent = product.name;
  productTitle.classList.add("productTitle");

  const productPrice = document.createElement("p");
  productPrice.textContent = product.price;
  productPrice.classList.add("productPrice");

  const productCategory = document.createElement("p");
  productCategory.textContent = product.category;
  productCategory.classList.add("productCategory");

  const productImg = document.createElement("img");
  productImg.src = !!product.img ? product.img : "";
  productImg.classList.add("productImg");

  const productDescription = document.createElement("p");
  productDescription.textContent = product.description;
  productDescription.classList.add("productDescription");

  productCard.append(
    productImg,
    productTitle,
    productPrice,
    productCategory,
    productDescription
  );

  return productCard;
}

function renderProductList(products) {
  productsContainer.innerHTML = "";
  products.forEach((product) => {
    const renderedProduct = renderProduct(product);
    productsContainer.append(renderedProduct);
  });
}

let myVar = "Timon";
localStorage.setItem("myVar", myVar);
const fromLs = localStorage.getItem("myVar");
console.log(fromLs);
localStorage.removeItem("myVar");

/*
 - положить в localStorage обект formObject, используем ключ formData
 - извлечь это из ЛС
 - вывести в консоль значение свойства lastname извлеченных данных
*/
const formObject = {
  name: "Vasilij",
  lastname: "Ivanov",
  phone: "12345678",
};

const user = localStorage.setItem("formData", JSON.stringify(formObject));
const fromLolacStorage = localStorage.getItem("formData");
const parse = JSON.parse(fromLolacStorage);
console.log(parse.lastname);

