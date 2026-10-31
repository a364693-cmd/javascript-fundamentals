// Javascript 
// Paradigma => Funcional y 0.0. (orientado a objetos)
// Alto nivel
// Interpretado, tipo de ejecucion 
// Tipado Dinamico

//Variables y constanntes (Var (globales)| let | const)

var saludo = "Hola";

{

let saludo2 = "Hola como estas"; // solo define dentro de su espacio de codigo, no existe fuera
}

const PI = 3.1416;

// Tipos de datos
let string = "Hola soy una cadena";
let number = 1;
let number2 = 3.14;
let boolean = true; // false
let char = 'a';

//prototipo, de donde provienen todos los objetos que etiene javascritp, es lo minimo que debe tener cualquier variable en jscript

let prototype ={

    name:"Luis",
    lastName: "Ramirez",
    address:{
        street : "Calle sdafsdfasdfa"
    }
}; // declara un prototipo

let funcion = function (){};// una variable puede almacenar una funcion

// arreglos y listas
let array = []; // como en python dentro de corchetes, puede ser de cualquier cosa
let arrayNumber = [1,2,3,4,5];
let arrayBoolean = [false, true, false, false];
let arraychar = ['a','b','c'];
let arrayProto = [{},{},{}, prototype]; 
//arrayProto[0].name

//funciones
let sumar = function(a,b){
    return a+b;

}

function restar(a,b){
    return a-b;
}

function print(fx,a,b){
    console.log(fx(a,b));
}

print(sumar,5,6);
print(restar, 9,6);
//console.log(sumar(5,6));

// funciones anonimas, usadas cuando se usa una sola vez
print(function (x,y){
    return x*y;
},4,5);

print((x,y) => {
    return x * y ;
},7,4)

print ((x,y)=> x *y , 5,5);

// las tres son lo mismo y son funcioens anonimas

//ENUMS

// en java 1.1, estructuras basicas, las clases(objetos), interfaces, Enum (enumerador)
/*
la clase define estructura y defines un tipo, un "conjunto", la instancia de una clase define un individuo
, hay conjuntos de individuos que tienen comportamientos simmilares aunque lo ejecuten diferente, ganzo y leon (objto animal)
ambos corren de manera diferente, para eso es la interface, esto es el polimorfismo

class leon extend animal implements correr
class ganzo extend animal implements correr

Enumerador -> es una clase que solo define o mapea una cantidad limitada de instancias de una clase
ej, solo un numero fijo de animales
ej, colores
    enum color{
    ROJO(codigo en hexadecimal),
    AZUL(asdfadsf),
    VERDE(#asdfasdf),
    AMARILLO,
    BLANCO
    private string hex;
}
    Public Color(String hex){
        this hex = hex;
    }

    color.rojo.hex

*/

const seasons = {
    SUMMER:{
        name: "Summer"
    },
     WINTER:{}, 
     SPRING:{}, 
     AUTUM:{}
}

console.log(seasons.SUMMER.name);