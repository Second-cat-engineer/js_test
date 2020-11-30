
/*
function Table(legs) {
    this.legs = legs;
    /!*this.__proto__.say = function() {
        return 'i am table';
    }*!/
}
Table.prototype.say = function () {
    return 'i am table';
}
*/

//--------------------------------------
class Item {
    constructor() {
    };
    hello() {
        return 'hello';
    };
}

class Table extends Item
{
    constructor(legs) {
        super();
        this.legs = legs;
    };
    say() {
        return 'i am table';
    };
}
//--------------------------------------


var table = new Table(4);
console.log(table.hello());







/*var test = function (a, b) {
    return a+b;
};
console.log(test(3, 2));


var item = {
    material: 'glass',
};

function Table(legs) {
    this.legs = legs;
    this._proto_ = item;
}

var table = new Table(4);
console.log(table.material);*/


/*
var item = {
    material: 'glass',
};

var table = {
    legs: 4,
};

table._proto_ = item;

for (let key in item) {
    console.log(table);
}

var empty = Object.create(null);*/
