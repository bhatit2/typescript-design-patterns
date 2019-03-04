/**Abstract class are the one that cant be instantiated but can be extended*/

abstract class Car{
    public description : string;
    public getDescription(){
        return this.description;
    }
    public abstract cost() : number;
}

class ModelS extends Car{
    public description = "Model S";
    public cost() : number {
        return 73000;
    }
}

class ModelX extends Car{
    public description = "Model X";
    public cost() : number {
        return 77000;
    }
}

abstract class CarOptions extends Car{
    decoratedCar : Car;
    public abstract getDescription() :string;
    public abstract cost() : number;
}

class EnhancedAutoPilot extends CarOptions{
    decoratedCar : Car;
    constructor(car : Car){
        super();
        this.decoratedCar = car;
    }
    getDescription() {
        return `${this.decoratedCar.getDescription()} Enhanced AutoPilot`;
    }

    cost() {
        return this.decoratedCar.cost() + 5000;
    }
}

class RearFacingSeats extends CarOptions{
    decoratedCar : Car;
    constructor(car : Car){
        super();
        this.decoratedCar = car;
    }
    getDescription() {
        return `${this.decoratedCar.getDescription()} RearFacing Seats`;
    }

    cost() {
        return this.decoratedCar.cost() + 4000;
    }
}

let myCar = new ModelX();
let enhancedCar = new EnhancedAutoPilot(myCar);
console.log(enhancedCar.cost());
console.log(enhancedCar.getDescription());