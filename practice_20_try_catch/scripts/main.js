async function jsonRequest(url) {
  const response = await fetch(url);
  const jsonResult = await response.json();
  return jsonResult;
}

// 1. Пристрелочная. Написать функцию `smartSqrt` - она принимает на вход аргумент. Если аргумент больше либо равен 0 - то возвращает его квадратный корень. Иначе - нужно сгенерировать свое исключение с текстом "Не удалось извлечь квадратный корень!".

function smartSqrt(a) {
  if (a <= 0) throw new Error("Не удалось извлечь квадратный корень!");
  return Math.sqrt(a);
}
// console.log(smartSqrt(4))
// console.log(smartSqrt(-2))

// 2. Вызвать написанную функцию для аргумента -9. Перехватить ошибку, и вывести в консоль сообщение ошибки.

try {
  smartSqrt(-9);
} catch (error) {
  console.log(error.message);
}

// 3. У нас есть функция `jsonRequest`, которая обращается к бэку. Нужно рассмотреть нештатные ситуации. В случае, если свойство `ok` ответа сервера не `true` - нам нужно сгенерировать пользовательское исключение с текстом "Что-то пошло не так!".

async function jsonRequest(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Something went wrong!');
    }
    const jsonResult = await response.json();
    return jsonResult;
}

async function fetchData() {
    try {
        await jsonRequest('https://dummyjson.com/products1');
    }
    catch (err) {
        console.log('ERRROR!')
    }
    console.log('final')
}

fetchData();
console.log('something after')

// 4. Еще доработки функции `jsonRequest`. Теперь, если ответ неудачный, давайте проконтролируем статус ответа. Если он меньше 400, то ничего не делаем, если от 400 до 500 - кидаем исключение "Что-то не так с запросом: " + HTTP_RESPONSE_TEXT, а если больше либо равен 500 - то выводим в консоль сообщение "Что то не так на сервере".

async function jsonRequest(url) {
  const response = await fetch(url);

  if (!response.ok) {
    if (response.status >= 400 && response.status < 500) {
      throw new Error("Что-то не так с запросом: " + response.statusText);
    }
  } else if (response.status >= 500) {
    console.log("Что то не так на сервере");
  }else{
    const jsonResult = await response.json();
    return jsonResult;
  }
}
jsonRequest(url);

// 5. Вызвать нашу функцию для адреса `https://dummyjson.com/products1`. Это несуществующий адрес, так что будет брошено исключение. Наша задача - перехватить это исключение, и показать пользователю текст ошибки в alert-е.

try {
    const result = await jsonRequest("https://dummyjson.com/products1");
} catch (error) {
    alert(error.message);
}

// 6. Обеспечить, чтобы вне зависимости от наличия/отсутствия ошибки при вызове функции, в консоль выводилось сообщение "Сделали попытку обращения".



// 7. Цепочка исключений. Напишем функцию `requestProductsList`. Она должна принимать в аргументах адрес, обращаться к этому адресу, и если произошла ошибка - то выводить в консоль сообщение "Ошибка при запросе списка товаров!", и бросать свое исключение с текстом "Не могу запросить товары!".