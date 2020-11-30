class Animal {
    constructor() {
        this.gender = 'male';
        this.countLegs = 4;
        this.hasTail = true;
        this.canSwim = false;
    }
}

class Pig extends Animal {
    constructor() {
        super();
        this.weight = 12;
        this.say = function () {
            return 'khry';
        }
    }
}

class Peppa extends Pig {
    constructor() {
        super();
        this.mood = 'agood';
    }
}

var peppa = new Peppa();
peppa.say = function () {
    if (this.mood == 'good') {
        return 'yess';
    } else {
        return 'no no no';
    }
}
console.log(peppa.say());