// class Product {

//   constructor(title, category, price, description) {
//     this.title = title;
//     this.category = category;
//     this.price = price;
//     this.description = description;
//   }
// }

// 1. Пристрелочная задача. У нас есть класс `Product`. Добавить ему метод `getAnnotation` - который вернет строку вида "Товар title, цена - price".
// 2. Добавить в класс `Product` getter `annotation` - который будет возвращать строку вида "Товар title, цена - price".
// 3. Добавим приватное свойство `purchasePrice` в класс `Product` - это будет закупочная цена. При вызове конструктора, нам нужнл проставлять эту цену как 0.9 * price. Также нам нужно сделать свойство-геттер для закупочной цены, чтобы мы могли получить его "извне".
// 4. Теперь добавим сеттер для закупочной цены. Сеттер должен содержать логику: если новое значение закупочной цены больше текущего значения свойства `price`, то есть больше текущей цены товара - то кидаем ошибку с текстом "Purchase price should be less than the product price!".
// 5. Предположим, мы хотим создать некий "общий" коэффициент закупочной цены для всех товаров. Пусть он будет равен 0.75. То есть, нам нужно определить статическое свойство `purchaseCoefficient` у класса Product, и записать в него значение 0.75. И использовать его в конструкторе (вместо 0.9).
// 6. Создадим метод для управления этим коэффициентом, назовем его `setPurchaseCoefficient`. Он также должен реализовывать минимальную логику: проверять, что новое значение должно быть больше 0 и меньше 1.
// 7. Создаем "внутренний счетчик" товаров. Нужно обеспечить, чтобы при создании объекта класса `Product` (то есть при вызове конструктора), мы увеличивали бы этот счетчик. Подсказка: это стоит сделать статическим приватным свойством, и написать для него геттер.

class Product {
  #purchasePrice;
  static purchaseCoefficient = 0.75;
  static #productCounter = 0;
  static #productsSaled = {};

  constructor(title, category, price, description) {
    this.title = title;
    this.category = category;
    this.price = price;
    this.description = description;
    this.#purchasePrice = price * Product.purchaseCoefficient;
    Product.#productCounter++;
  }

  static get productCouner(){
    return Product.#productCounter;
  }

  getAnnotation() {
    return `Product ${this.title}, price ${this.price}`;
  }

  get annotation() {
    return `Product ${this.title}, price ${this.price}`;
  }

  get purchasePrice() {
    return this.#purchasePrice;
  }

  set purchasePrice(value) {
    if (value > this.price)
      throw new Error("Purchase price should be less than the product price!");
    this.#purchasePrice = value;
  }

  static setPurchaseCoefficient(value) {
    if (value > 0 && value < 1) Product.purchaseCoefficient = value;
  }

  sale() {
    const category = this.category;
    Product.#productsSaled[category] = (Product.#productsSaled[category] || 0) + 1;
  }

  static get productsSaled() {
    return { ...Product.#productsSaled };
  }

  getAnnotation() {
    return `${super.getAnnotation()}, мощность - ${this.power}`;
  }
}

class PowerTool extends Product {
  constructor(title, category, price, description, power) {
    super(title, category, price, description);
    this.power = power;
  }
}
const product1 = new Product("Ball", "Sport", 100, "Super Ball");
console.log(product1.getAnnotation(), product1);
console.log(product1.annotation);
console.log(typeof Product);
Product.setPurchaseCoefficient(0.5);
console.log(Product.purchaseCoefficient);
const product2 = new Product("Ball", "Sport", 100, "Super Ball");
console.log(Product.productCouner);


// 8. Еще работа со статическими свойствами. Добавим в класс `Product` НЕстатический метод `sale` - типа продажа товара. Нам нужно вести учет проданных товаров. Нужно создать аналог счетчика из п.7 (назовем его `productsSaled`, и также сделаем приватным), только теперь это будет объект, в котором ключами будут категории проданных товаров, а значениями - количества. И нужно создать ему геттер. Пример:
// ```
// const phone = new Product('Phone', 'electronics', 100, 'Samsung Galaxy');
// const watch = new Product('Watch', 'electronics', 50, 'Smart Watch');
// const ball = new Product('Ball', 'sports', 20, 'Ball. Just a ball');
// phone.sale();
// watch.sale();
// ball.sale();
// console.log(Product.productsSaled); // { electronics: 2, sports: 1 }
// ```
// 9. Теперь поработаем с наследованием. Создадим класс-наследник для класса `Product`, и назовем его `PowerTool` - то есть, электроинструмент. У этого класса должны быть те же свойства, что и у `Product`, а еще должно быть свойство `power` - потребляемая мощность. Это нужно отразить в конструкторе.
// 10. В нашем классе `Product`, был метод `getAnnotation` (из задачи 1). Нам нужно переопределить этот метод в классе-потомке так, чтобы он возвращал строку вида "Товар title, цена - price, мощность - power". Рекомендуется реализовать это с вызовом метода родителя.
