class Person {

  constructor(
    public readonly firstName:string,
    public readonly lastName:string,
    public readonly age:number) {
  }
}

const person = new Person('John', 'Smith', 25);

console.log(person);