// Los arrays son mutables y pueden existir otros arrays dentro de ellos
// Los elementos principales de un array son su: indice y elemento.
var frutas = ["Manzana", "Platano", "Cereza", "fresa"];
console.log(frutas) // (4) ["Manzana", "Platano", "Cereza", "fresa"]
console.log(frutas.length) //4
console.log(frutas[0]) //Manzana

//Métodos para los arrays
//agregar más elementos al final del array
var masFrutas = frutas.push("Uvas");
//Eliminar el último elemento del array.
var ultimo = frutas.pop("Uvas");
// Agregar un elemento al inicio del array.
var nuevaLongitud = frutas.unshift("Mangos"); // (5) ["Mangos", "Manzana", "Platano", "Cereza", "fresa"]
// Eliminar un elemento al inicio del array.
// OJO: A pesar de que escribimos manzana, el elemento  que borra es mangos y no manzana.
//porque mangos era el primero en el array.
var borrarFruta = frutas.shift("Manzana"); // (4) ["Manzana", "Platano", "Cereza", "fresa"]
// Para conocer la posición de el nombre de un elemento.
var position = frutas.indexOf("Cereza"); // 2

//-------------------For y for of-----------------------------

var estudiantes = ["Maria", "Pedro", "Jorge", "Elena"];

function saludarEstudiantes(estudiante) {
    console.log(`hola, ${estudiante}`);
}

//--------------LOOP For----------
for(var i=0; i<estudiantes.length; i++) {
    saludarEstudiantes(estudiantes[i])
}

//--------------LOOP For of----------
for(var estudiante of estudiantes) {
    saludarEstudiantes(estudiante);
}

//--------------LOOP While----------
var estudiantes = ["Maria", "Pedro", "Jorge", "Elena"];

function saludarEstudiantes(estudiante) {
    console.log(`hola, ${estudiante}`);
}

while(estudiantes.length > 0) {
    console.log(estudiantes)
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante)
}