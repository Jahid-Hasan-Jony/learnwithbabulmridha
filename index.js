// Lab 1: Object Literals

const car = {};
car.brand = "Toyota";
car.model = "Corolla";
car.year = 2020;
car.getDetails = function () {
    return console.log(`${this.brand} ${this.model} (${this.year})`);
};
car.getDetails(); // "Toyota Corolla (2020)"

// Object Constructor



