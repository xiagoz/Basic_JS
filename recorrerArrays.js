var articulos = [
    {nombre: "Bici", costo: 3000},
    {nombre: "TV", costo: 2500},
    {nombre: "Celular", costo: 900},
];
// Filter: va a validar si algo es cierto o falso
// Lo ingresará en un nuevo array. (articulosFiltrados)

var articulosFiltrados = articulos.filter(function(articulo){
    return articulos.costo <=500  // [] no trae ninguno porque ninguno cumple
});

//Map: Crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre  // (3) ["Bici", "TV", "Celular"] Me trae los nombres y los alamcena en un nuevo array
});

// Find: Retorna el primer elemento de un array que cumple con una condición definida en un nuevo array.
// valida un tru o un false. Si existe retorna, si no, no trae nada.
var  encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "TV";  // {nombre: "TV", costo: 2500}
});

// foreach: No genera un nuevo array. solo genera el filtrado.
articulos.forEach(function(articulo){
    console.log(articulo.nombre)
    // Bici
    // TV
    // Celular
});

// Some: Genera un nuevo array. Solo regresa lo que sea verdadero.

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700; // false retorna false porque no hay ninguno con ese costo.
});