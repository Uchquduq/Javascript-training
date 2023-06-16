//1 Чему равно а, почему?

// let a = 0 || 'string';

// let a = 1 && 'string';

// let a = null || 25;

// let a = null && 25;

// let a = null || 0 || 35;

// let a = null && 0 && 35;


let a = 0 || 'string'; // 'string', возвращает первое попавшееся true
console.log(a);
a = 1 && 'string'; // 'string' возвращает первый попавшийся false или последнее true
console.log(a);
a = null || 25; // 25 возвращает первое попавшееся true
console.log(a);
a = null && 25; // null возвращает первый попавшийся false
console.log(a);
a = null || 0 || 35; // 35 возвращает первое попавшееся true
console.log(a);
a = null && 0 && 35; // null возвращает первый попавшийся false
console.log(a);


//2 Что отобразится в консоли. Почему?

// 12 + 14 + '12'

// 3 + 2 - '1'

// '3' + 2 - 1

// true + 2

// +'10' + 1

// undefined + 2

// null + 5

// true + undefined


// "2612". сначала происходит сложение 12 + 14 после происходит конкатенация со строкой
console.log(12 + 14 + '12')
// 4. При любых математических операциях со строкой кроме сложения строка преобразуется к числу
// поэтому пры вычитании строки "1" она преобразовалась в число 1
console.log(3 + 2 - '1')
// 31. сначала произошла конкатенация и получилась строка "32" и при вычитании получили число 31
console.log('3' + 2 - 1)
// 3. true при числовом преобразовании становится 1
console.log(true + 2)
// 11. унарный плюс превращает строку в число и происходит сложение чисел
console.log(+'10' + 1)
// NaN. при любый математических операциях с undefined кроме сложения со строкой, результат будет NaN
console.log(undefined + 2)
// 5. null преобразуется к нулю
console.log(null + 5)
// NaN. при любый математических операциях с undefined кроме сложения со строкой, результат будет NaN
console.log(true + undefined)


//3 Создать произвольную переменную, присвоеть ей значение и написать условие, если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.

let b = 'hidden';

// Всегда делайте строгое сравнение.
if (b === 'hidden') {
  b = 'visible';
} else {
  b = 'hidden';
}


//4 Создать переменную и присвойте ей число.

//Используя if, записать условие:

// - если переменная равна нулю, присвоить ей 1;

// - если меньше нуля - строку “less then zero”;

// - если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).

let c = 0;

if (c === 0) {
  c = 1;
} else if (c < 0) {
  c = 'less then zero';
} else {
  // используйте короткую запись при арифметических операциях такого рода. 
  c *= 10;
}


//5 Дан объект:

/*

let car = { 
  name: 'Lexus', 
  age: 10, 
  create: 2008, 
  needRepair: false 
}.

*/

// Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.

let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }

if (car.age > 5) {
  console.log('Need Repair');
  car.needRepair = true;
} else {
  car.needRepair = false;
}


//6 Дан объект: 

/* 

let item = { 
  name: 'Intel core i7', 
  price: '100$', 
  discount: '15%' 
}

*/

// Написать условие если у item есть поле discount и там есть значение которое не NaN а также есть поле price значение которого также не NaN то в объекте item создать поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, обратите внимание что поля discount и price это строки и вам из них нужно получить числа чтобы выполнить расчет. иначе если поля discount нет то вывести просто поле price в консоль.



let item = { name: 'Intel core i7', price: '100$', discount: '15%' }
// мы выносим цену и скидку в отдельные переменные что бы несколько раз не вызывать parseFloat
const price = parseFloat(item.price);
const discount = parseFloat(item.discount);
// проверяем что цена и скинда не являются NaN так как это важно при расчетах
if (!isNaN(price) && !isNaN(discount)) {
  const priceWithDiscount = price - (price * (discount / 100));
  console.log(priceWithDiscount)
} else {
  console.log(price);
}


//7 Дан следующий код:

/* 

let product = {

name: “Яблоко”,

price: “10$”

};

let min = 10; // минимальная цена

let max = 20; // максимальная цена

*/

// Написать условие если цена товара больше или равна минимальной цене и меньше или равна максимальной цене то вывести в консоль название этого товара, иначе вывести в консоль что товаров не найдено.

let product = {
  name: "Яблоко",
  price: "10$"
};

const productPrice = parseFloat(product.price);

let min = 10; // минимальная цена
let max = 20; // максимальная цена

if (productPrice >= min && productPrice <= max) {
  console.log(product.name);
} else {
  console.log('товаров не найдено');
}