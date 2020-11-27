//alert(1);
//var name = 'sa'
//const lastName = 'asd'
//let age = 254
//name = 'asdf'

//console.log(name)

// console.log('Name: ' + name + ', age' + age)
// console.log(age)
// var lastName = prompt('Введите имя')
// alert(lastName)


//  Операторы
// const currentYear = 2020
// const birthYear = 1993
// const age = currentYear - birthYear
// console.log(age)


// let currentYear = 2020
//
// const a = 10
// const b = 5
// let c = 32
//
// c += a // c = c + a
// c -= a // c = c - a
// c *= a // c = c * a
// c /= a // c = c / a
//
// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(++currentYear)
// console.log(--currentYear)
// console.log(c)


// Типы данных
// const isProgrammer = true
// const name = 'adf'
// const age = 4
// var x
//
// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)
// console.log(null)

// Приоритет операторов
// const fullAge = 27
// const birthYear = 1993
// const currentYear = 2020
//
// const isFullAge = currentYear - birthYear >= fullAge
// console.log(isFullAge)


//Условные операторы
// == сравнение без учета типов данных
// === сравнивается и тип данных

// const courseStatus = 'ready' // ready, fail, pending
// if (courseStatus === 'ready') {
//     console.log('курс готов')
// } else if (courseStatus === 'pending') {
//     console.log('курс в разработке')
// } else {
//     console.log('err')
// }
//
//
// const isReady = true
// // if (isReady) {
// //     console.log('Все готово')
// // } else {
// //     console.log('Все не готово')
// // }
// isReady ? console.log('Все готово') : console.log('Все не готово')

// Функции
// function calcAge(year) {
//     return 2020 - year
// }
// // const myAge = calcAge(1993)
// // console.log(myAge)
//
// function logInfoAbout(name, year) {
//     const age = calcAge(year)
//
//     if (age > 0 ) {
//         console.log(name + age)
//     } else {
//         console.log('err')
//     }
// }
// logInfoAbout('saf', 1993)

// array
// const cars = ['bmv', 'mazda', 'kia']
// // const cars = new Array('bmv', 'mazda', 'kia')
// //console.log(cars[1])
// console.log(cars.length)
// console.log(cars[1])
// console.log(cars[2])
//
// cars[0] = 'lada'
// cars[5] = 'audi'
// cars[cars.length] = 'new'
// console.log(cars)

// циклы
// const cars = ['first', 'second', 3, 4]
//
// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i])
// }
//
// for (let car of cars) {
//     console.log(car)
// }


// Объекты
const person = {
    firstName: 'saf',
    lastName: 'yaylyaev',
    year: 1993,
    languages: ['ru', 'eng', 'bash'],
    hasWife: true,
    greet: function () {
        console.log('greet')
    }
}
console.log(person.firstName)





























