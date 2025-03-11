// Lab 2: Object Constructor
// Instructions:
// Create a constructor function Person with properties: name, age, and job.
// Add a method introduce() that returns a string introducing the person.
// Create an instance of Person and call the introduce() method.

function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    
    this.introduce = function() {
        return console.log(`Hi, I'm ${this.name}, a ${this.age}-years-old ${this.job}`);
    };
}

const person1 = new Person("John", 30, "developer");
person1.introduce();