//1 На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова будут в верхнем регистре. Использовать for или while.

let str = 'i am in the easycode';
let res = '';

for (let i = 0; i < str.length; i++) {
  if (i === 0 || str[i - 1] === ' ') {
    res += str[i].toUpperCase();
  } else {
    res += str[i];
  }
}

console.log(res);


//2 Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд).

let str1 = 'tseb eht ma i';
let res1 = '';

for (let i = str1.length; i--;) {
  res1 += str[i];
}

console.log(res1);


//3 Факториал числа - произведение всех натуральных чисел от 1 до n включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10.Использовать for.

let res2 = 1;

for (let i = 1; i <= 10; i++) {
  res *= i;
}


//4 На основе строки “JavaScript is a pretty good language” сделать новую строку,где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.

let str3 = 'JavaScript is a pretty good language';
let res3 = '';

for (let i = 0; i < str3.length; i++) {
  if (i === 0 || str3[i - 1] === ' ') {
    res3 += str3[i].toUpperCase();
  } else if (str3[i] !== ' '){
    res3 += str3[i];
  }
}

console.log(res3);


//5 Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль. Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.

let arr =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (let num of arr) {
  if (num % 2) {
    console.log(num);
  }
}


//6 Дан объект:

/*

let list = {
  name: ‘denis’,
  work: ‘easycode’,
  age: 29
}

*/

//Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in.

let list = {
  name: 'denis',
  work: 'easycode',
  age: 29
}

for (let key in list) {
  if (typeof list[key] === 'string') {
    list[key] = list[key].toUpperCase();
  }
}

console.log(list);