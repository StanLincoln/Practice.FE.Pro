// 1. Работаем в предметной области интернет-магазина. Нам нужно создать класс для хранения информации о конкретном товаре. У товара есть наименование, категория, цена, описание. Это нужно отразить в создаваемом классе.
// 1.1. Сделать функцию-конструктор, которая будет решать ту же задачу - создание объектов товаров.

// function ProductConstructor(title, category, price, description){
//     this.title = title;
//     this.category = category;
//     this.price = price;
//     this.description = description;
// }

// 2. Написать конструктор для класса. Он ожидает на вход 4 аргумента (наименование, категорию, цену и описание товара), и должен инициализировать соответствующие поля класса переданными значениями.
// 3. Работаем с методами. Добавим нашему товару функцию changePrice. Она должна менять цену нашего товара - прибавлять к ней переданное значение.
// 4. Оптимизируем работу метода из п.3. Нужно при изменении цены проверять, что она не меньше 1. Если новая цена будет меньше 1 - то нужно выводить в консоль сообщение об этом, а цену товару ставить 1.
// 5. Оптимизируем конструктор. При создании товара, нужно проверять, что название, категория и цена - непустые, а цена - больше 1. Если что-то пустое или цена меньше 1 - выводим сообщение в консоль. Пустое наименование заполняем "Default Name", пустую категорию - "Default Category".
// 6. Вспоминаем работу с исключениями. Изменим наш конструктор. Теперь, если при создании товара мы передаем цену меньше 1 - нужно кинуть исключение с текстом "Price should be greater than 1!".

class Product {
  constructor(title, category, price, description) {
    if (!title?.trim() || !category?.trim()) {
      console.log("Please fill all arguments");
    }
    this.title = title || "Default title";
    this.category = category || "Default category";
    if (!isNaN(price) && price > 1) {
      this.price = price;
    } else {
      throw new Error("Price should be greater than 1!");
    }
    this.description = description;
  }
  changePrice(newPrice) {
    this.price = this.price + newPrice;
    if (this.price < 1) {
      console.log("Цена меньше 1");
      this.price = 1;
    }
  }
}
const product1 = new Product("", "Smartphone", 1750, "14 Pro Max");
product1.changePrice(200);
console.log(product1);

// 7. Делаем класс для представления корзины товаров. У корзины должны быть такие свойства:
//  - список товаров (`productsStorage`), добавленных в корзину. Обязательно - с количеством товаров. Рекомендуется список хранить в виде обычного объекта, у которого в качестве ключей будут названия товаров, а в качестве значений - количество единиц данного товара в корзине. Пример:
//  ```
//  productsStorage: {
//     ball: 1,
//     gloves: 2,
//     // ...
//  }
//  ```
//  - общая стоимость всех товаров (`totalPrice`).
// 8. Добавляем возможность добавить товар в корзину. Создаем метод `addProduct` - добавление товара. Ожидает объект класса Product - добавляемый товар. При добавлении товара, нужно проверить в списке товаров в корзине (это свойство `productsStorage`) наличие товара с таким наименованием. Если есть - увеличить кол-во на 1. Если нет - добавить такое свойство в наш список, и поставить ему значение 1 - т.е. мы добавили товар в корзину. При этом, общую стоимость товаров в корзине увеличить на стоимость добавляемого товара.
// 9. Добавляем возможность удалять товары из корзины. Создаем метод `dropProduct`. Логика та же, как и в задаче 8, только количество уменьшаем на 1. Следить чтобы не было отрицательного кол-ва товаров!

class Cart {
  constructor() {
    this.productsStorage = {};
    this.totalPrice = 0;
  }

  addProduct(product) {
    if (this.productsStorage[product.title]) {
      this.productsStorage[product.title]++;
    } else {
      this.productsStorage[product.title] = 1;
    }
    this.totalPrice += product.price;
  }

  dropProduct(product) {
    this.productsStorage[product.title]--;
    this.totalPrice -= product.price;
    if (this.productsStorage[product.title] === 0) {
      delete this.productsStorage[product.title];
    }
    console.log(`Товар "${product.title}" удален из корзины.`);
  }
}

const cart = new Cart();
const product2 = new Product("Product", "category", 200, "Descr");

cart.addProduct(product1);
cart.addProduct(product2);
cart.addProduct(product2);
cart.dropProduct(product2);
console.log(cart);
