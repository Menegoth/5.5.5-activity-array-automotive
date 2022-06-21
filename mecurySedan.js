//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car extends VehicleModule() {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maxPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }

    loadPassenger(num) {
        if (this.passenger < this.maxPassengers) {
            if ((num + this.passenger <= this.maxPassengers)) {
                this.passenger = num;
                return this.passenger
            } else {
                console.log("Not enough room to add all passengers")
            }
        } else {
            console.log("car is full")
        }
    }

    scheduleService() {
        if (this.mileage > 30000) {
            this.scheduleService = true;
            return this.scheduleService;
        }
    }

    start() {
        if (this.fuel > 0) {
            console.log("started");
            this.started = true;
        } else {
            console.log("no fuel");
            this.started = false;
        }
    }
}

let test = new Car("testname", "testname", "2002", "black", 50200)

test.start();
test.loadPassenger(4);
test.scheduleService();

console.log(test);
