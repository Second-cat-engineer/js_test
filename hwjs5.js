
// Представьте себе, что вы пишете интернет-магазин. У вас есть объекты-товары, есть конструктор для таких товаров
// (или класс - это на ваш выбор). Продумайте - какие аргументы обязательны для создания товара? Например - наименование,
// артикул, цена? Еще что-то? Напишите соответствующий код
class Item {
    constructor(name, art, price) {
        this.name = name;
        this.art = art;
        if (price < 0) {
            throw new Error('price < 0');
        } else {
            this.price = price;
        }
    }
}
var ball = new Item('ball', 123, 133);
console.log(ball);

try {
    var ball2 = new Item('ball', 123, -12);
    console.log(ball2);
} catch (error) {
    console.log(error.message);
}




/*
// Вернитесь к примеру с калькулятором. Добавьте операции умножения и деления,
// с помощью механизма исключений реализуйте проверку деления на ноль.
var calc = function (a, b, op) {
    switch (op) {
        case '+':
            return a + b;
            break;
        case '-':
            return a - b;
            break;
        case '*':
            return a * b;
            break;
        case '/':
            if (b == 0) {
                throw new Error('Деление на 0');
            } else {
                return a / b;
            }
    }
}

try {
    console.log(calc(6, 0, '/'));
} catch (error) {
    console.log(error.message);
}*/
