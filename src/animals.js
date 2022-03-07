var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = name;
    }
    Dog.prototype.sayHello = function () {
        return 'Dog says hello!';
    };
    return Dog;
}());
var Fish = /** @class */ (function () {
    function Fish(name) {
        this.name = name;
    }
    Fish.prototype.dive = function (howDeep) {
        return "Diving ".concat(howDeep, " feet.");
    };
    return Fish;
}());
function talkToPet(pet) {
    if (pet instanceof Dog) {
        return pet.sayHello();
    }
    else if (pet instanceof Fish) {
        var random = Math.floor(100 * Math.random());
        return 'Fish cannot talk, sorry. '.concat(pet.dive(random));
    }
}
var myDog = new Dog('Huskie');
var myFish = new Fish('Goldie');
console.log(talkToPet(myDog));
console.log(talkToPet(myFish));
