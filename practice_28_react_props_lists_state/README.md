# README

## Практическое занятие №28

### Тема:

Репозитарий содержит материалы по практическому занятию №28, посвященному ознакомлению с фреймворком React.js - пропсы и состояние.

### Цели занятия
- закрепление знаний, полученных на лекции;
- разбор практических примеров;
- практическое применение полученных знаний.

### Задачи занятия
1. Пристрелочная, на освежение в памяти пропсов. В модуле `SimpleParagraph.module.css`, определены классы, `lightTheme`, `darkTheme`. Нужно сделать так, чтобы компонент `SimpleParagraph` принимал в пропсах проп `currentTheme`, который будет содержать текущую тему приложения (`light`, `dark`). И в зависимости от этого пропа, применять к параграфу соответствующий класс. Если проп не определен - никакую тему не применяем.
2. Поработаем с передачей пропсов. Мы хотим, чтобы на уровне приложения у нас была бы одна тема. В компоненте `App`, объявим переменную `appTheme`, и запишем в нее значение темы (пусть будет `dark`). Нам нужно, чтобы эта тема была передана во все существующие параграфы приложения (в т.ч. и те, которые отрисованы в компоненте `SimpleList`). Подсказка - для этого понадобится передать тему в компонент `SimpleList`.
3. Создаем компонент `DwarwesLocationItem` - это будет элемент списка мест компактного проживания гномов. Этот компонент содержит:
 - `div` с классом `dwarwesLocationItemContainer`. Все остальные элементы - внутри этого контейнера.
 - заголовок `h4.locationItemHeader`, в нем отображаем свойство `locationName`
 - параграф `p.locationItemPopulation`, отображаем свойство `population`
 - параграф `p.locationItemKing`, отображаем свойство `king`.
4. Создаем компонент `DwarwesLocationList` - список мест проживания гномов. В пропсах он должен принять массив объектов, с данными о районах обитания гномов, и отрендерить их. Рендерим с использованием компонента `DwarwesLocationItem`. Рендерим этот компонент в компоненте `App`. Источник данных - массив `dwarwesLocations`.
5. Немного обработки событий. В компоненте `DwarwesLocationItem`, добавляем обработчик события клика на элемент-контейнер. При клике, нужно вывести в консоль:
 - текст вида "location LOCATION_NAME, king KING_NAME"
 - элемент, по которому кликнули (тут нам поможет объект события).

function DwarwesLocationItem({locationName, population, king}) {

    const handleClick = (event) => {
        console.log(`location ${locationName}, king ${king}`);
        console.log(event.target);
      };

  return (
    <div className="dwarwesLocationItemContainer" onClick={handleClick}>
      <h4 className="locationItemHeader">{locationName}</h4>
      <p className="locationItemPopulation">{population}</p>
      <p className="locationItemKing">{king}</p>
    </div>
  );
}

export default DwarwesLocationItem;

6. Еще немного обработки событий. Добавим в компонент `App` инпут. И на него навесим обработчик события ввода в инпут. При вводе в инпут, мы должны выводить в консоль то, что сейчас в инпуте. Нам тоже здесь поможет объект события.

const inputChange = (event) => {
      const value = event.target.value
      console.log(value);
  }

  <input type="text" onChange={inputChange}/>

7. Начинаем работать с состоянием. Первая - пристрелочная. Добавляем в компонент `App` состояние (`state`), с использованием хука `useState`. Пока что, запишем туда строку `simpleState`. Наш компонент `App` сейчас также содержит параграф `SimpleParagraph` - в пропсах ему нужно передать значение состояния.
8. Добавьте в компонент `App`, под параграф, кнопку. Текст кнопки - Up. При клике на кнопку нужно перевести строку из стейта в верхний регистр.
9. Еще поработаем с состоянием. В компоненте `App`, давайте хранить тему в состоянии, а не в статичной переменной.

const [appTheme, setAppTheme] = useState("dark");

10. Управление состоянием. Добавьте в компонент `App`, в `div` верхнего уровня, кнопку. Текстом кнопки должна быть текущая тема приложения.

<button onClick={toggle}>{appTheme}</button>

11. Добавляем обработчик на кнопку, при клике на кнопку нужно менять тему приложения - с light на dark и наоборот.

const toggle = () => {
    setAppTheme((theme) => (theme === 'light' ? 'dark' : 'light'))
  }



### Полезные ссылки по занятию:
 - [Пропсы](https://www.w3schools.com/react/react_props.asp) - англоязычные, но заслуживают внимания.
 - Старая [документация](https://legacy.reactjs.org/docs/components-and-props.html) React. Хоть и помечена как устаревшая, но еще вполне актуальная. Можно просмотреть по диагонали.
  - [React State](https://react.dev/learn/state-a-components-memory) - англоязычная подробная документация по `useState`.
 - [React useState](https://dmitripavlutin.com/react-usestate-hook-guide/#1-state-management-using-usestate) - еще англоязычная статья про `useState`. Там более подробно, но и чуть сложнее для понимания.
 - Старая [документация](https://legacy.reactjs.org/docs/components-and-props.html) React. Хоть и помечена как устаревшая, но еще вполне актуальная. Можно просмотреть по диагонали.
