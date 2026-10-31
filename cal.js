//Programacion funcional(JS)

//Calculadora

//definimos: n1 * n2 = r; (5*4) = 20
//5+5+5+5 = 20

function multiply(n1,n2){
    let result = 0;
    for(let i=0; i <n2; i++)
        result += n1;
    return result;

}

//Assert (pruebas de software), afirmacion -> 5*4 = 20
let finalResult = multiply(5,4);
console.log(finalResult);

// define n1/n2 = r (20/5) = 4
// 20-5-5-5-5= 0, y da cuatro iteraciones

function divide(n1,n2){
    let result =1;
    while ((n1-n2 )> 0){
        result ++;
        n1-=n2;;
    }
    return result;
}

//assert 20/5 = 4
finalResult = divide (20,5); 

console.log(finalResult);

// Assert: (5*4)/10 = 2
finalResult= divide(multiply(5,4),10);
console.log(finalResult);

//Assert: (5*4)/10) * 6 = 12
finalResult =  multiply(divide(multiply(5,4),10),6);
console.log(finalResult);

// ES5: CallBack (estructuras dadas como funciones que reciben dos estados, uno de aceptacion y otro de error)
// 

function multiplyCall(success, error){

    try{
        let n1 = arguments[2];
        let n2 = arguments[3];
        if(n1 == null || n2 ==null)   
            throw("Missing parameters: Expeted 2 numbers");
        let result = multiply(n1,n2);
        success (result)

        }catch(ex){
            error(ex);

    }
//excepciones, si divides entre 0 sabemos que arrojara un error, entonces antes de que pase esto, lo prevees y 
// y evitas que llegue al error, lanzar una excepcion hacia arriba es avisarle a otro desarrollador 
// no es un error es una situacion anomala
// para cuando ocurra poder responder ante esta situacion
}

function okCallBack(result){
    console.log(result);
}

function errorCallBack(ex){
    console.log(ex);
}

console.log("================CallBacks.===============");

//asserts 5*4=20
multiplyCall(okCallBack, errorCallBack, 5, 4);

//Asser (5*4) * 20 = 80

//fucnnion anonima =>...
multiplyCall((result)=>{
    multiplyCall(okCallBack,errorCallBack,result,4);
}, errorCallBack, 5, 4);

function divideCall(succes,error){
    try {
        let n1 = arguments[2];
        let n2 = arguments[3];
        if(n1 == null || n2 ==null)   
            throw("Missing parameters: Expeted 2 numbers");
        if(n2 == 0)
            throw("Divide over zero is wrong");
        let result = divide(n1,n2);
        succes (result);
    }catch(ex){
        error(ex);
    }
}

//Assert 20 / 4 = 5

divideCall(okCallBack, errorCallBack, 20, 4);

//Assert ((5*4) / 10) = 2

multiplyCall((result) => {
    divideCall(okCallBack, errorCallBack, result, 10);
},errorCallBack, 5,4);

//Assert ((5*4) / 10) * 6 = 12

multiplyCall((result) => {
    divideCall((result) => {
        multiplyCall(okCallBack, errorCallBack, result, 6);
    }, errorCallBack, result, 10);
},errorCallBack, 5,4);

//Reduccion

multiplyCall(result => divideCall(result => multiplyCall(okCallBack,errorCallBack,result,6),errorCallBack,result,10),errorCallBack,5,4);

//los result son distintnos, tienen el nombre similar pero su existencia solo es de llave a llave, no se 
//reemplaza el valor ni se actualiza, es uno nuevo es una funcion



//ES6 => Promises
//sirven para hacer llamadas asincronas
//para hacer tareas en otros hilos sin bloquear el hilo principal
//hay momentos en que es mejor usar promesas para generar blocking y otras en que es mejor no blocking 
//{n1:5 n2:4 }

function multiplyPromise(result){
    return new Promise((resolve,reject)=>{
        if(result.n1 == null || result.n2 == null)
            reject("Missing parameters: expected 2 numbers");
        let res = new Object();
        res.n1 = multiply(result.n1,result.n2);
        resolve(res);
    });
}

console.log("============= Promises ===============");

//Asserts: 5*4 = 20

let numbers = new Object();
numbers.n1 = 5;
numbers.n2 = 4;

multiplyPromise(numbers).then(okCallBack).catch(errorCallBack);

function dividePromise(result){
    return new Promise((resolve,reject)=>{
        if(result.n1 == null || result.n2 == null)
            recejt("Missing parameters: expected 2 numbers");
        if(result.n2 == 0)
            reject("Divide over zero is not possible.");
        
        let res = new Object();
        res.n1 = divide(result.n1,result.n2);
        resolve(res);
    });
}

numbers = new Object();
numbers.n1 = 20;
numbers.n2 = 4;

dividePromise(numbers).then(okCallBack).catch(errorCallBack);

//Assert ((5*4)/10) = 2

numbers = new Object();
numbers.n1 = 5;
numbers.n2 = 4;

multiplyPromise(numbers).then((data)=>{
    data.n2 = 10
    return dividePromise(data);
}).then(okCallBack).catch(errorCallBack);

//Assert ((5*4)/10) * 6 = 12


multiplyPromise(numbers).then((data)=>{
    data.n2 = 10
    return dividePromise(data);
}).then((data)=>{
    data.n2 = 6;
    return multiplyPromise(data);
}).then(okCallBack).catch(errorCallBack);

// Async - await

//Assert ((5*4)/10) * 6 = 12

//si no se escribe async no funciona, pues no van a esperar a los otros hilos y se ejecutaria vacio
async function operations(){
    let num = new Object();
    num.n1 = 5;
    num.n2 = 4;

    let val1 = await multiplyPromise(num);

    val1.n2 = 10;
    let val2 = await dividePromise(val1);

    val2.n2 = 6;
    let val3 = await multiplyPromise(val2);
    console.log(val3);

}

console.log("============= Async / Await ===============");

operations();

//se imprimen desordenados pues es el orden en que el pocesador les da prioridad
