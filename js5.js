
window.onerror = function (message) {
    console.log('error');
};

var test = function () {
    throw new Error('message er');
}
test();

setTimeout(
    function () {
        console.log('!!!');
    },
    1000,
)



/*//var helloStr = 'hello';

function TranslateError(message, prev) {
    this.message = message;
    this.prev = prev;
}

function hello(man) {
    try {
        return helloStr + ' ' + name;
    } catch (error) {
        throw new TranslateError('dont found translation', error);
    }
}

try {
    console.log(hello('saf'));
} catch (e) {
    console.log('Error:' + e.message);
    console.log('Error:' + e.prev.name);*/
//}

/*var z = function () {
    console.log(E);
}
var y = function () {
    try {
        z();
    } catch (error) {
        console.log('Y: error in Z!');
        throw error;
    }
}
var x = function () {
    try {
        y();
    } catch (error) {
        console.log('X: error in y!');
        throw error;
    }
}
try {
    x();
} catch (error) {
    console.log(error.stack);
    console.log(error.message);
}*/


/*var sellRum = function (man, num) {
    if (man.age < 18) {
        throw  new Error('no');
    }
    console.log('Rum is sold!');
}

let age = prompt('Сколько');
try {
    sellRum({age: age}, 1);
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}*/

/*try {
    console.log(x);
} catch (error) {
    console.log(error.stack);
}*/

// var z = function () {
//     console.log(E);
// }
// var y = function () {
//     z();
// }
// var x = function () {
//     y();
// }
//
// try {
//     x();
// } catch (error) {
//     console.log(error.stack);
//     console.log(error.message);
// }
