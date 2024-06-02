console.log("1")

const jedi = {nombre: "Luke Skywalker", edad: 19};

// Tu código para cambiar la edad aquí...
jedi.edad = 120
console.log(jedi)



console.log("2")

let nombre = "Leia";
let  apellido = "Organa";
let  edad = 20;

console.log("Soy " + nombre +" "+ apellido + ", tengo " + edad + " años y soy una princesa de Alderaan")
console.log(`Soy ${nombre} ${apellido}, tengo ${edad} años y soy una princesa de Alderaan`)




console.log("3")

const sable1 = {nombre: "Shoto de Yoda", precio: 1500};
const sable2 = {nombre: "Sable de Darth Vader", precio: 2000};

// Tu código para calcular el precio total aquí...

console.log(`El precio de  dos sables de luz de ${sable1.nombre} es de: ` + sable1.precio * 2)
console.log(`El precio de  dos sables de luz de ${sable2.nombre} es de: ` + sable2.precio * 2)
console.log(`El precio de  un ${sable1.nombre} y un ${sable2.nombre} es de: ` + sable1.precio * sable2.precio)




console.log("4")

let precioBaseGlobal = 10000;

// Cambia el precio base en esta linea modificando la variable

const nave1 = {nombre: "Ala-X", precioBase: 50000, precioFinal: 60000};
const nave2 = {nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 80000};

nave1.precioBase = 25000
nave2.precioBase = 25000

console.log(nave1)
console.log(nave2)


// Tu código para actualizar el precio final de cada nave aquí...

nave1.precioFinal = nave1.precioBase + precioBaseGlobal;
nave2.precioFinal = nave2.precioBase + precioBaseGlobal;

console.log(nave1)
console.log(nave2)


