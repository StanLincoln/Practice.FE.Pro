
import './App.css';
import SimpleParagraph from './components/SimpleParagraph';
import LoginForm from './components/LoginForm';
import SimpleList from './components/SimpleList';

function App() {
  const currentSeason = 'winter';
  const randomValue = Math.random();
  
  return (
    <>
      {randomValue > 0.5 ? <h1>Heading1</h1> : <h2>Heading2</h2>}
      <p>Hello World! {new Date().toLocaleDateString()}</p>
      <h2>Welcome, guest!</h2>
      <div>
        <button>Enter</button>
        <button>Register</button>
      </div>
      <p className='seasonParagraph'>Now is {currentSeason}</p>
      <SimpleParagraph/>
      <LoginForm/>
      <SimpleList/>
    </>
  );
}

export default App;


// 1. Разбираемся с тем, как работает JSX. В файле `App.js`, удаляем все из `<div className='App'>`. Вместо этого содержимого, нам нужно добавить туда параграф с текстом `Hello World!`
// 2. Еще пробуем добавлять элементы. Теперь нужно добавить в наш `<div className='App'>` заголовок `h2` с текстом `Welcome, guest!`. Под ним нужно добавить блок (`div`) с двумя кнопками. Тексты кнопок - "Enter", "Register".
// 3. Работаем с JavaScript в JSX. Теперь в наш параграф к существующему тексту нам нужно добавить текущую дату (`new Date()`). Чтобы работать с JS, нам понадобится обернуть содержимое нашего параграфа в фигурные скобки.
// 4. Еще работаем с динамикой. Объявим в нашем компоненте переменную `currentSeason`, и запишем в нее значение `winter` (у нас сейчас зима). Теперь нужно в компоненте (внутри `<div className='App'>`), под нашими кнопками, вывести параграф с классом `seasonParagraph`, и текстом "Now is: " + значение переменной `currentSeason`.
// 5. Теперь поработаем со стилизацией. Нужно создать CSS-модуль. Назовем его `main.module.css`. В нем определим стили для нашего интерфейса.
//  - стиль для заголовка "Добро пожаловать". У него должен быть размер шрифта 20 пикселей, внутренние отступы 15 пикселей, и выравнивание текста по центру. Пусть этот класс будет `welcomeParagraph`.
//  - стиль для блока кнопок. Он должен занимать всю ширину. Содержимое выровнять по центру. Расстояние между содержимым - 10 пикселей. Назовем его `buttonsBlock`.

// И теперь нужно импортировать этот модуль в наш компонент, и применть нужные классы к заголовку и блоку.
// 6. Работаем с условным рендерингом.
//  - объявляем в функции `App` (вне `return`), переменную `randomValue`, и присваиваем ей случайное значение (`Math.random`)
//  - в блоке return, нужно обеспечить следующее: если randomValue > 0.5, то выводим заголовок `h1` с текстом `Heading1`, а иначе - выводим заголовок `h2` с текстом `Heading2`.
// 7. Создаем свой компонент. Для этого:
//  - в папке src создаем подпапку `components`
//  - в папке `components` создаем файл `SimpleParagraph.js`
//  - в этом файле, наша задача - создать компонент, который отрендерит нам параграф с текстом `Hello From new component!`
// 8. Применяем созданный компонент в `App.js`. Нам нужно:
//  - импортировать свежесозданный компонент (`import`)
//  - отрендерить его (например, в самом низу нашего блока `return`). Важный момент! React не умеет возвращать несколько DOM-узлов (или компонентов), поэтому нам нужно ВЕСЬ возвращаемый результат обернуть в `<div></div`. То есть, мы должны гарантировать, что наша функция, в блоке return вернет нам ОДИН DOM-элемент или React-компонент.
// 9. Реализуем еще один компонент, `LoginForm`. Он должен рендерить нам несложную форму входа. Она содержит логин, пароль, и кнопку "Вход".
// 10. Поработаем с отрисовкой списков. Создаем новый компонент, `SimpleList`. В нем нам нужно отрисовать простой список. Его мы рисуем как `<ul>`. В компоненте ВНЕ return создаем массив `dataSet = ['Dwarwes', 'Hobbits', 'Orcs']` - это будет источник данных для нашего списка. Нужно, чтобы компонент возвращал ul, в котором будут li с наименованиями из массива.