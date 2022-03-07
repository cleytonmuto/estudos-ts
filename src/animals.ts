class Dog {

  constructor(readonly name: string) {
  
  }

  sayHello(): string {
    return 'Dog says hello!';
  }

}

class Fish {

  constructor(readonly name: string) {

  }

  dive(howDeep: number): string {
    return `Diving ${howDeep} feet.`;
  }
}

type Pet = Dog | Fish;

function talkToPet(pet: Pet): string | undefined {
  if (pet instanceof Dog) {
    return pet.sayHello();
  }
  else if (pet instanceof Fish) {
    const random = Math.floor(100 * Math.random());
    return 'Fish cannot talk, sorry. '.concat(pet.dive(random));
  }
}

const myDog = new Dog('Huskie');
const myFish = new Fish('Goldie');

console.log(talkToPet(myDog));
console.log(talkToPet(myFish));


