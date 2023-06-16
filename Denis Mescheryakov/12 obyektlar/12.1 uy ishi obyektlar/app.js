//1 Создать объект с полем product, равным ‘iphone’

const item = {
  product: "iPhone"
}

//2 Добавить в объект поле price, равное 1000 и поле currency, равное ‘dollar’

item.price = 1000;
item.currency = "dollar";
// или 
item['price'] = 1000;
item['currency'] = "dollar";

//3 Добавить поле details, которое будет содержать объект с полями model и color

item.details = {};
item.details.model = "XR";
item.details.color = "Red";

