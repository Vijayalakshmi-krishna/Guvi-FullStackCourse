interface animalType {
    age: Number;
    name: String;
}
export class Animal {
    age;
    name;
    constructor(animal_val: animalType) {
        this.age = animal_val.age;
        this.name = animal_val.name;
    }
    makeSound(sound: String): void {
        console.log(`My name is ${this.name} ;My age is ${this.age} and I make the sound ${sound}`)
      
    }
}