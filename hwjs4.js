var animal = {
    gender: 'male',
    countLegs: 4,
    hasTail: true,
    canSwim: true,
};

var pig = {
    weight: 100,
    loveMud: true,
};

var peppa = {
    mood: 'bad',
};

pig._proto_ = animal;
peppa._proto_ = pig;
console.log(pig);
console.log(peppa);

pig.say = function () {
    return 'хрю';
}
console.log(pig.say());

peppa.say = function () {
    if (this.mood == 'good') {
        return 'хрю';
    } else {
        return 'no no no';
    }
}
console.log(peppa.say());
