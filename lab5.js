// Lab 5: 
// Create a class Vehicle with properties: name, maker, and engine.
// Create a subclass Car that inherits from Vehicle and adds a property numDoors.
// Override the getDetails() method to include the number of doors.
// Create an instance of Car and call the getDetails() method.

class Vehicles{
    constructor(name, maker, engine){
        this.name = name;
        this.maker = maker;
        this.engine = engine;
    }
    getDetails(){
    }
}

class cars extends Vehicles{
    constructor(name, maker, engine,numDoors){
       
        super(name, maker, engine);
        this.numDoors = numDoors;
       
    }
    getDetails(){
        console.log(`${this.name} by ${this.maker} (${this.engine}) with ${this.numDoors} doors`);
    }
}

const c = new cars('Corolla', 'Toyota', '1.8L', 4);
c.getDetails();