function Animal() {
    this.gender = 'male';
    this.countLegs = 4;
    this.hasTail = true;
    this.canSwim = true;
}
var animal = new Animal();

function Pig() {
    this.weight = 10;
    // this.say = function () {
    //     return 'khry';
    // };
    this.__proto__ = animal;
}
// Pig.prototype = animal;
var pig = new Pig();
//console.log(pig)

function Peppa() {
    this.mood = 'good';
    this.__proto__ = pig;
}
// Peppa.prototype = pig;

var peppa = new Peppa();
console.log(peppa);

pig.hello = function () {
    return 'hello';
}
console.log(pig.hello());
console.log(peppa);

