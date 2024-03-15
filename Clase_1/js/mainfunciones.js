//funciones declaradas
//---declarar la funcion
// function sumar(numerouno, numerodos){
//     if(numerouno>numerodos){
//         alert("el numero uno es mayor que el dos");
//     } else {
//         alert("el numero dos es más grande")
//     }
// }

//-----llamar la función
// let ingresarNumeroUno = parseInt(prompt("numero uno"))
// let ingresarNumeroDos = parseInt(prompt("numero dos"))
// sumar(ingresarNumeroUno, ingresarNumeroDos);

// //funciones anonimas

// const saludar = function(nombre = "german"){/*asignar valor por defecto con =*/
//     console.log("Hola" + nombre);
// }

//saludar();

//funciones flecha
//la misma vaina pero más estilizada

const saludaralaflecha = (nombre) => {
    console.log("holaaa" + nombre);
}

saludaralaflecha("papauddj")

//funciones declaradas con retorno

function sumar (a, b){
    let suma = a+b;
    return suma;
}

let suma1 = sumar (6, 7);
console.log(suma1)

const restar = (a, b) => a + b; // en las funciones flechas el retorno es implicito cuando solo tiene una función