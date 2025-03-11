// Lab 3:
// Instructions:
// Create an object person with properties: name and age, and a method introduce().
// Use Object.create() to create a new object student that inherits from person.
// Add a new property grade to the student object.
// Call the introduce() method and log the grade.


const person = {
    name: '',
    age: 0,
    introduce: function() {
        console.log(`Hi, I'm ${this.name}, a ${this.age}-years-old.`);
    }
};

const student = Object.create(person);

student.name = "Alice";
student.age = 25;
student.grade = "A";
student.introduce(); 
console.log(`Grade: ${student.grade}`);