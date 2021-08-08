//El switch se utiliza para validar muchos casos.
var numero = 1;

switch (numero) {
    case 1:
        console.log("Soy uno");
        //El break provoca que nos salgamos del switch y ya no valida más casos.
        break;
    case 10:
        console.log("Soy un 10");
        break;
    case 100:
        console.log("Soy un 100");
        break;
    default:
        console.log("No soy nada");
    //Sí yo no coloco un break. se imprimen todos los casos y no valida nada.
}

if (false === !true) { 
    console.log(false == true) 
} else { 
    console.log(true === !false) 
}