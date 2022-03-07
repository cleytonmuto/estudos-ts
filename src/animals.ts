class Animal {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }
}

class Dog extends Animal {
  sayHello(): string {
    return `${this.getName()} says hello!`;
  }
}

class Fish extends Animal {
  dive(howDeep: number): string {
    return `${this.getName()} dives ${howDeep} feet.`;
  }
}

type Pet = Dog | Fish;

function talkToPet(pet: Pet): string | undefined {
  if (pet instanceof Dog) {
    return pet.sayHello();
  }
  else if (pet instanceof Fish) {
    const random: number = Math.floor(100 * Math.random());
    return `${pet.getName()} cannot talk, sorry. `.concat(pet.dive(random));
  }
}

const myDog = new Dog('Huskie');
const myFish = new Fish('Goldie');

console.log(talkToPet(myDog));
console.log(talkToPet(myFish));
