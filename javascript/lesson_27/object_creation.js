//Creating object with a constructor: --------1

function vehicle(name, maker, engine){
    this.name = name;
    this.maker = maker;
    this.engine = engine
};

//new keyword to create an object
let car1 = new vehicle('GT', 'BMW', '1998cc')
let car2 = new vehicle('V8', 'Toyota', '2021')



console.log(car1.name);
console.log(car2.name);

//creating js objects with object literal ---------------2
 let car = {
     name : "GT",
     maker : "BMW",
     engine: "1998cc",
     start : function(){
         console.log('Starting the engine....')
     } 
 }

 car.start();

 car.stop = function(){
     console.log('Applying Brake ..')
 }

car.stop();



// creating object with object.create() method: -----------------3

const coder = {
    isStudying : false,
    printIntroduction : function(){
        console.log(`My name is ${this.name}. Am I studying?: ${this.isStudying}`);
    }
};


const me = Object.create(coder);
me.name = 'Mukuu',
me. isStudying = true,
me.printIntroduction();

me.name = 'Mukul Mukurungezi';
me.isStudying = true;
me.printIntroduction();


//Using es6 classes ------4
class vehicleA {
    constructor (name, maker, engine){
        this.name = name;
        this.maker = maker;
        this.engine = engine;
    }
}

let carA = new vehicleA('GT', 'BMW', '1998cc');
console.log(carA.name)