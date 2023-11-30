// 1. Вспоминаем промисы. Пишем функцию `promiseFactory`, которая вернет нам промис. Этот промис должен быть зарезолвлен текстом "Success" через 5 секунд.

// function promiseFactory() {
//     console.log('New log')
//     return new Promise( (resolve) => {
//         console.log('Something')
//         setTimeout( () => {
//             resolve('Success');
//         }, 5000);
//     });
// }

// const myPromise = promiseFactory();
// myPromise.then( ( result) => {
//     console.log('Hi after my promise', result)
// })

// 2. Дорабатываем функцию. Нужно, чтобы она принимала в аргументах время задержки `timeout` (в секундах), и флаг `success`. В зависимости от флага, нужно резолвить/отвергать промис через `timeout` секунд.
// 3. Создадим с помощью нашей функции промис, который будет зарезолвлен успехом через 3 секунды. Добавляем обработчик результата промиса (`then`), который выведет в консоль результат промиса.

// function promiseFactory(timeout, success) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (success) resolve("Success");
//       else reject("Error");
//     }, timeout * 1000);
//   });
// }

// const pr1 = promiseFactory(2, true);
// const pr2 = promiseFactory(3, false);
// pr1.then((res) => console.log(res));
// // pr2.then(res => console.log(res)).catch(err => console.log(err));
// pr2.then(
//   (res) => console.log("Success", res),
//   (err) => console.log("Error", err)
// );

// 4. Обеспечить вывод в консоль текста "Will appear in all cases" после завершения/отвержения промиса (т.е. в любом случае). Тут нам поможет блок `finally`.

// const newPromise = promiseFactory(2, true);
// newPromise.finally(() => console.log("Will appear in all cases"));

// 5. Создадим с помощью нашей функции 2 промиса. Первый должен быть успешно зарезолвлен через 2 секунды, а второй - через 5 секунд. Нужно запустить их параллельно, и когда выполнятся ОБА промиса - вывести в консоль результаты.

// const promise1 = new Promise(resolve => setTimeout(() => resolve('Success'), 2000));
// const promise2 = new Promise(resolve => setTimeout(() => resolve('Success'), 5000));
// Promise.all([promise1, promise2]).then(result => console.log(result));

// 6. Теперь также запускам оба промиса, но нас интересует первый успешно завершенный - то есть, вывести в консоль только результаты того промиса, который будет зарезолвлен первым.

// const promise1 = new Promise(resolve => setTimeout(() => resolve('Success 1'), 2000));
// const promise2 = new Promise(resolve => setTimeout(() => resolve('Success 2'), 5000));
// Promise.any([promise1, promise2]).then(result => console.log(result));

// 7. Пишем сетевой запрос. Наша задача - обратиться к "бэку" по адресу `https://fakestoreapi.com/products` GET-запросом, и вывести в консоль результат в "удобоваримом" виде (результат нам возвращается в виде JSON). Этот запрос нам вернет массив с товарами.

  // fetch(`https://jsonplaceholder.typicode.com/posts`)
  //   .then((res) => res.json())
  //   .then((result) => console.log(result));


  // 1. Вспоминаем промисы. Пишем функцию `promiseFactory`, которая вернет нам промис. Этот промис должен быть зарезолвлен текстом "Success" через 5 секунд.

  // function promiseFactory(){
  //   return new Promise(resolve => setTimeout(() => console.log('Success'), 5000))
  // }
  // promiseFactory();

  // 2. Дорабатываем функцию. Нужно, чтобы она принимала в аргументах время задержки `timeout` (в секундах), и флаг `success`. В зависимости от флага, нужно резолвить/отвергать промис через `timeout` секунд.

  function promiseFactory(timeout, success) {
    return new Promise((resolve, reject) {

    })

  }