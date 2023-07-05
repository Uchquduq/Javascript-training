//1 Создать объект, который описывает ширину и высоту прямоугольника, а также может посчитать площадь фигуры:

// const rectangle = {width:..., height:..., getSquare:...};

// const w = prompt('Width Square: ')
// const h = prompt('Height Square: ')

const rectangle = {
  with: 100,
  height: 200,
  getSquare: function () {
    return this.height * this.with
  }
}

// rectangle.with = parseInt(w)
// rectangle.height = parseInt(h)

console.log(`1) Rectangle w: ${rectangle.with} h: ${rectangle.height} GetSquare: ${rectangle.getSquare()}`)


//2 Создать объект, у которого будет цена товара и его скидка, а также два метода: для получения цены и для расчета цены с учетом скидки:

// const price = {

// price: 10,

// discount: '15%',

// ... };

// price.getPrice(); // 10

// price.getPriceWithDiscount(); // 8.5

const product = {
  price: 100,
  discount: '15%',
  getPrice: function () {
    return this.price
  },
  getPriceWithDiscount: function () {
    return this.price - this.price * parseInt(this.discount) / 100
  }
}

console.log(`2) Product p: ${product.price} d: ${product.discount} GetPrice: ${product.getPrice()}$ GetPriceWithDiscount: ${product.getPriceWithDiscount()}$`)

//3 Создать объект, у которого будет поле высота и метод “увеличить высоту на один”. Метод должен возвращать новую высоту:

// object.height = 10;

// object.inc(); // придумать свое название для метода

// object.height; // 11;

const object = {
  height: 10,
  addHeight: function () {
    return ++this.height
  }
}

console.log(`3) AddHeight: ${object.addHeight()} Height: ${object.height}`)


//4 Создать объект “вычислитель”, у которого есть числовое свойство “значение” и методы “удвоить”, “прибавить один”, “отнять один”.

// Методы можно вызывать через точку, образуя цепочку методов:

// const numerator = {

// value: 1,

// double: function () {...},

// plusOne: function () {...},

// minusOne: function () {...},

// }

// numerator.double().plusOne().plusOne().minusOne();

// numerator.value // 3

const number = {
  num: 10,
  double: function () {
    this.num = this.num * 2
  },
  plusOne: function () {
    this.num = this.num + 1
  },
  minusOne: function () {
    this.num = this.num - 1
  }
}


console.log(`4) Number: ${number.num} Double: ${number.double(), number.num} Plus: ${number.plusOne(), number.num} Minus: ${number.minusOne(), number.num}`)


//5 Создать объект с розничной ценой и количеством продуктов.

// Этот объект должен содержать метод для получения общей стоимости всех товаров (цена * количество продуктов)

const products = {
  count: 10,
  price: 10000,
  getPrice() {
    return this.count * this.price
  }
}

console.log(`5) Products Count: ${products.count} Price: ${products.price} GetPrice: ${products.getPrice()}`)


//6 Создать объект из предыдущей задачи. Создать второй объект, который описывает количество деталей и цену за одну деталь. Для второго объекта нужно узнать общую стоимость всех деталей, но нельзя создавать новые функции и методы.

// Для этого “позаимствуйте” метод из предыдущего объекта.



//7 Даны объект и функция:

// let sizes = {width: 5, height: 10},

// getSquare = function () {return this.width * this.height};

// Не изменяя функцию или объект, получить результат функции getSquare для объекта sizes



//8 let element = {

// height: 25,

// getHeight: function () {return this.height;}

// };



// let getElementHeight = element.getHeight;

// getElementHeight(); // undefined



// Измените функцию getElementHeight таким образом, чтобы можно было вызвать getElementHeight() и получить 25.