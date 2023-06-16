// Практическое задание по функциям высшего порядка
// Создать функции:

// - первая функция принимает массив и колбэк (одна для всех вызовов)

// - вторая функция (колбэк) обрабатывает каждый элемент массива (для каждого вызова свой callback)


// Первая функция возвращает строку “New value: ” и результат обработки:

// firstFunc([‘my’, ‘name’, ‘is’, ‘Trinity’], handler1) → “New value: MyNameIsTrinity”

// firstFunc([10, 20, 30], handler2) → “New value: 100, 200, 300,”

// firstFunc([{age: 45, name: ‘Jhon’}, {age: 20, name: ‘Aaron’}], handler3) →

// “New value: Jhon is 45, Aaron is 20,”

// firstFunc([‘abc’, ‘123’], handler4) → “New value: cba, 321,” // строки инвертируются


// Имена функций должны быть как в примере!

// Подсказка: secondFunc должна быть представлена функцией, которая принимает

// один аргумент (каждый элемент массива) и возвращает результат его обработки

function myCallback(arr, callback) {
  let res = ''
  for (let i = 0; i < arr.length; i++) {
    res += (callback(arr[i]))
  }
  return console.log(res)
}

function upperCase(num) {
  let res = ''
  for (let i = 0; i < num.length; i++) {
    if (i == 0) {
      res += num[i].toUpperCase()
    } else {
      res += num[i]
    }
  }
  return res
}

myCallback(['my', 'name', 'is', 'rufat'], upperCase)

//1
function upperCase(num) {
  let res = ''
  for (let i = 0; i < num.length; i++) {
    if (i == 0) {
      res += num[i].toUpperCase()
    } else {
      res += num[i]
    }
  }
  return res
}

//2
function addnoll(num) {
  return num * 10 + ', '
}

myCallback([10, 20, 30], addnoll)


//3
function toText(num) {
  let res = `${num.name} is ${num.age}, `
  return res
}

myCallback([{ age: 45, name: 'Jhon' }, { age: 20, name: 'Aaron' }], toText)

//4
function rever(num) {
  let res = num.split('')
  res = res.reverse()
  res = res.join('')
  return res + ', '
}


myCallback(['abc', '123'], rever)
