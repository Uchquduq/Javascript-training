//1 Получить первую и последнюю буквы строки

const firstChar = string[0];
const lastChar = string[string.length - 1];
console.log(firstChar, lastChar);

//2 Сделать первую и последнюю буквы в верхнем регистре

const firstLastUpper = `${string[0].toUpperCase()}${string.slice(1,-1)}${string[string.length - 1].toUpperCase()}`;
console.log(firstLastUpper);

//3 Найти положение слова ‘string’ в строке

const wordPos = string.indexOf('string');
console.log(wordPos);

//4 Найти положение второго пробела (“вручную” ничего не считать)

const firstSpace = string.indexOf(' ');
const secondSpace = string.indexOf(' ', firstSpace + 1);
console.log(secondSpace);

//5 Получить строку с 5-го символа длиной 4 буквы

const substr = string.substr(5, 4);
console.log(substr);

//6 Получить строку с 5-го по 9-й символы

const slice = string.slice(5, 10);
console.log(slice)

// 7 Получить новую строку из исходной путем удаления последних 6-и символов (то есть исходная строка без последних 6и символов)

const lastSix = string.slice(0, -6);
console.log(lastSix)

// 8 Из двух переменных a=20 и b=16 получить переменную string, в которой будет содержаться текст “2016”

const a = 20, b = 16;
const strFromNum = String(a) + String(b);
console.log(strFromNum);