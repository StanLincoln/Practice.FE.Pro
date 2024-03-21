import {add} from './mathUtils'
import {divide} from './mathUtils'

// describe('Suite for testing "add" function', () => {
//     // test - это зарезервированное имя тест кейса, которое будет подхвачено Jest.
//     test(
//         'First test which checks the "add" function', // первый аргумент - это описание тест кейса
//         () => { // второй аргумент - функция с самим юнит тестом
//           const addResult = add(2,2); // вызываем нашу функцию, записываем результат в переменную
//           expect(addResult).toBe(4); // сравниваем результат вызова нашей функции с ожидаемым значением
//         }
//       );
    
//       test(
//         'Second test which checks the "add" function with strings',
//         () => { 
//           const addResult = add('2',2);
//           expect(addResult).toBe('something went wrong!');
//         }
//       );
    
//       test(
//         'Third test which checks the "add" function with NaN',
//         () => { 
//           const addResult = add(NaN ,2);
//           expect(addResult).toBe('something went wrong!');
//         }
//       );
// })

describe(
  'Test "add" function',
  () => {
    const testsData = [
      { name: 'Check number+number', arg1: 2, arg2: 2, expected: 4 },
      { name: 'Check non-number argument', arg1: '2', arg2: 2, expected: 'something went wrong!' },
      { name: 'Check NaN argument', arg1: NaN, arg2: 2, expected: 'something went wrong!' },
    ];
    testsData.forEach( ({ name, arg1, arg2, expected }) => {
      it( name, () => { // it === test, these are aliases
        const result = add(arg1, arg2);
        expect(result).toBe(expected);
      })
    });
  }
)

describe(
    'Test "divide" function',
    () => {
      const testsData = [
        { name: 'Check number/number', arg1: 4, arg2: 2, expected: 2 },
        { name: 'Check non-number argument', arg1: '2', arg2: 2, expected: 'something went wrong!' },
        { name: 'Check NaN argument', arg1: NaN, arg2: 2, expected: 'something went wrong!' },
        { name: 'Check second argument is zero', arg1: 4, arg2: 0, expected: 'cannot divide by zero!' },
      ];
      testsData.forEach( ({ name, arg1, arg2, expected }) => {
        it( name, () => {
          const result = divide(arg1, arg2);
          expect(result).toBe(expected);
        })
      });
    }
  )


  cube + ball = pir + pir 
  ball + pir = cube
  cube + cube = pir + pir + pir 
  cube = ball?

  pir = cube - ball
  ball = cube - pir
  ball = pir + pir - cube
  2bal + pir = pir +pir
