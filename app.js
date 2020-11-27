// number
/*
const num = 42 //integer
const float = 42.42 // float
const pow = 10e3

console.log('Max_safe_integer', Number.MAX_SAFE_INTEGER)
console.log('Math.pow 53', Math.pow(2, 53) - 1)
console.log('Max value', Number.MAX_VALUE)

console.log('Pssitive infinity', Number.POSITIVE_INFINITY)
console.log('Pssitive infinity', Number.NEGATIVE_INFINITY)
console.log('2 / 0', 2/0)
console.log(Number.NaN)

const weird = 2 / undefined
console.log(Number.isNaN(weird))
console.log(Number.isNaN(43))
console.log(Number.isFinite(Infinity))
console.log(Number.isFinite(42))


const stringInt = '42'
const stringFloat = '42.42'
console.log(stringInt + 2)  //422
console.log(Number.parseInt(stringInt) + 2)  //44 Преобразовывает к числу
console.log(parseInt(stringInt) + 2)  //44
console.log(Number(stringInt) + 2)  //44
console.log(+stringInt + 2)  //44

// parseInt работает с интежерами, поэтому отбрасывает дробную часть

console.log(0.4+0.2)
console.log(2/5 + 1/5)
console.log((0.4+0.2).toFixed(2))
console.log(parseFloat((0.4+0.2).toFixed(2)))*/

// Bigint
/*console.log(Number.MAX_SAFE_INTEGER)
console.log(typeof 9007199254740991239999) // number
console.log(typeof 9007199254740991239999n) // bigint
//console.log(typeof 9007199254740991239999.2442n) // err
console.log(9007199254740991239999n - 900719925474099123999n) // bigint

//console.log(10n - 4) // err
console.log(parseInt('23') - 4) // err*/

//Math
console.log(Math.PI)
console.log(Math.sqrt(25))
console.log(Math.pow(5, 2))
console.log(Math.abs(-4))
console.log(Math.max(4, 5, 42, 213, 42))
console.log(Math.min(4, 5, 42, 213, 42))
console.log(Math.floor(4.9)) // округление в меньшую сторону
console.log(Math.ceil(4.9)) // округление в большую сторону
console.log(Math.round(4.9)) // округление в ближайшую сторону
console.log(Math.trunc(4.9)) // возвращает целую часть путем удаления всех дробных
console.log(Math.random())

// example
function getRandomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log(getRandomBetween(10, 42));

