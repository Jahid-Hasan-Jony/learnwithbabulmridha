// Lab 4: Object Constructors
// Create a class Animal with properties: name and sound.
// Add a method makeSound() that logs the sound of the animal.
// Create an instance of Animal and call the makeSound() method.

class Animal{
    constructor(name,sound) {
        this.name = name;
        this.sound= sound;
     
    }
    makeSound() {
        console.log(`${this.name} says ${this.sound}`);
    }
}

const i = new Animal('Dog', 'Woof');
i.makeSound();