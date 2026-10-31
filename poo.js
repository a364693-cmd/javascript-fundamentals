// Programacion orientada a Objetos

// 4 principios

// Abstraccion -> Representar la realidad mediante codigo

// Encapsulamiento -> Propiedad en la cual definimos o modificamos el alcance de un elemento
//  alcance(hasta dondep puede llegar a un objeto, propiedad o metodos)
//  (java, modificadores de acceso, public, private, protected, ... )

// Herencia -> La capacidad de un elemento para reutilizar las caracteristicas de otros de forma jerarquica

// Polimorfismo -> Es la capacidad de diferentes elementos de realizar una misma accion de formas diferentes
class Animal{

    constructor(name,soundToEmit){
        this._name = name;
        this.soundToEmit = soundToEmit;//el _ guon bajo esta guardando el valor, si no necesitas acceder a ese valor con get o set, puedes omitirlo
    }

    sound(){
        return this.soundToEmit();
    }

    comer(){
        console.log("estoy comiendo");
    }
    // Get
    get name(){
        return this._name;
    }


    // Set

    set name(v){
        this._name = v;
    }

    static isAnimal(obj){
        return obj instanceof Animal;
    }

}


class Robot{}

let a = new Animal("Perro");
let x = {"_name": "Perro"};
let r = new Robot();

console.log(a.name);
console.log(x);
a.name = "Gato";
console.log(a.name);

a.comer();
//concatenacion
console.log("EL objeto es un animal? " + Animal.isAnimal(a));
console.log(Animal.isAnimal(r));
//interpolacion
console.log(`El objeto es un animal? ${Animal.isAnimal(a)}`);
//concatenacion es mas amigable con la memoria, usa menos pasos, evita tener que abrir y cerrar varias llaves

class Perro extends Animal{
    constructor(name,soundToEmit,type){
        super(name,soundToEmit);
        this._type = type;
    }

    get type(){
        return this._type;
    }

    set type(v){
        this._type = v;
    }
}

class Gato extends Animal{
    constructor(name,soundToEmit,type){
            super(name,soundToEmit);
            this._type = type;
        }

        get type(){
            return this._type;
        }

        set type(v){
            this._type = v;
        }
}

let dog = new Perro("Sparky", ()=>{
    return "guau guau"
}, "Golden");

let cat = new Gato("Botitas",()=>{
    return "miau miau"
},"Siames" );

let animals =[dog,cat];//lista de animales (ncesitan el nombre dog y cat como son)

animals.forEach(animal => console.log(animal.sound()));