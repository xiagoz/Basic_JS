var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020
};
// Para poder accerder a un valor de un objeto,
// tenemos que llamarlo pos su palabra clave.

miAuto.marca // "Toyota"
miAuto.annio // 2020

// Existen objetos que tiene funciones dentro de ellas.
// Estas se conocen como: "Método de Objeto"
var miAuto2 = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto: function(){
        // El this es una variable que hace referecia a su objeto padre. (miAuto2)
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
};
//Para poder acceder al método:
miAuto2.detalleDelAuto();

//---------------------Función Constructora-----------------

function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}
// Generamos una nueva Instancia
// Una instancia es un objeto que deriva de otro objeto.
var autoNuevo = new auto("Tesla", "Model 3", 2020);  // auto {marca: "Tesla", modelo: "Model 3", annio: 2020}

var autoNuevo2 = new auto("Mazda", "CX5", 2021); // auto {marca: "Mazda", modelo: "CX5", annio: 2021}

