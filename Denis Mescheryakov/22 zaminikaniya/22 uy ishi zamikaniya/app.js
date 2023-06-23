//1 Создайте функцию которая бы умела делать:

// minus(10)(6); // 4

// minus(5)(6); // -1

// minus(10)(); // 10

// minus()(6); // -6

// minus()(); // 0

// Подсказка, функция minus должна возвращать другую функцию.

function minus(val) {
  return function (num) {
    return val - num
  }
}

console.log(minus(2)(1))


//2 Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:

// function multiplyMaker ...

// const multiply = multiplyMaker(2);

// multiply(2); // 4 (2 * 2)

// multiply(1); // 4 (4 * 1)

// multiply(3); // 12 (4 * 3)

// multiply(10); // 120 (12 * 10)


function multiplyMaker(num1 = 2) {
  return function (num2 = 1) {
    return num1 *= num2;
  }
}

const multiply = multiplyMaker(2);
console.log(multiply(2))
console.log(multiply(2))


//3 Реализовать модуль, который работает со строкой и имеет методы:

// a. установить строку

// i. если передано пустое значение, то установить пустую строку

// ii. если передано число, число привести к строке

// b. получить строку

// c. получить длину строки

// d. получить строку-перевертыш

// Пример:

// модуль.установитьСтроку(‘abcde’);

// модуль.получитьСтроку(); // ‘abcde’

// модуль.получитьДлину(); // 5

// version my
function strFunc() {
  let str = ''

  return {
    setStr(value) {
      str = String(value)
      console.log(str)
    },
    getStr() {
      return str
    },
    reverse() {
      return str.split('').reverse().join('')
    },
    getLength() {
      return str.length
    }
  }
}

const str = strFunc()

// version teacher
const strModule = (function () {
  let str = '';

  function setStr(val = '') {
    str = String(val);
  }

  function getStr() {
    return str;
  }

  function getStrLength() {
    return str.length;
  }

  function getReverseStr() {
    return str.split('').reverse().join('');
  }

  return {
    setStr,
    getStr,
    getStrLength,
    getReverseStr
  }
}());


//4 Создайте модуль “калькулятор”, который умеет складывать, умножать, вычитать, делить и возводить в степень. Конечное значение округлить до двух знаков после точки (значение должно храниться в обычной переменной, не в this).

// модуль.установитьЗначение(10); // значение = 10
// модуль.прибавить(5); // значение += 5
// модуль.умножить(2); // значение *= 2
// модуль.узнатьЗначение(); // вывести в консоль 30 (здесь надо округлить)

// Также можно вызывать методы цепочкой:

// модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение(); 

// my code
function calculator() {
  let num = 0;

  function setnum(x = 0) {
    num = x
    return num
  }

  function plus(val) {
    return num = num + val
  }

  function minus(val) {
    return num = num - val
  }

  function multiply(val) {
    return num = num * val
  }

  function devide(val) {
    return num = num / val
  }

  return {
    setnum,
    plus,
    minus,
    multiply,
    devide
  }
}

const calc = calculator()

// Teacher's code
const numModule = (function (){
  let num = 0;

  function setNumber(val = 0) {
    num = Number(val);
    return this;
  }

  function plus(val) {
    num += Number(val);
    return this;
  }

  function minus(val) {
    num -= Number(val);
    return this;
  }

  function devide(val) {
    num /= Number(val);
    return this;
  }

  function pow(ex = 2) {
    num = Math.pow(num, ex);
    return this;
  }

  function getNumber() {
    return  Number(num.toFixed(2)) || 0;
  }

  return {
    setNumber,
    plus,
    minus,
    devide,
    pow,
    getNumber
  }
}());

console.log(
  numModule
    .setNumber(3)
    .pow(2)
    .getNumber()
)