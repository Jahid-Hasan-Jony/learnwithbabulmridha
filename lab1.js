// Create an object car using an object literal.
// Add properties: brand, model, and year.
// Add a method getDetails() that returns a string with the car's details.
// Call the getDetails() method and log the result.

const car = {};
car.brand = "Toyota";
car.model = "Corolla";
car.year = 2020;
car.getDetails = function () {
    return console.log(`${this.brand} ${this.model} (${this.year})`);
};
car.getDetails();