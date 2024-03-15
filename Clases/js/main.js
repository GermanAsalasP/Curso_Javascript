/* Es keysensitive 
Comentario de doble línea*/

//Comentario por línea

//Variables palabra Let
let nombrePropio;

//Asignar valor a la variable
nombrePropio = "German";

//Asignar valor en la misma linea
let apellido = `Salas`;

//No usar Var, pues ya está en desuso

//Reasignar valor
apellido ='Pacheco';

//COnstante: una variable que no se puede reasignar
const anioNacimiento = 1994;

/*TIpos de datos
 -String: Cadenas de texto
 -Number*/

// let numeroUno = 3;
// let numeroDos = 4;

// let resultado = numeroDos - numeroUno;

// //Consola
// console.log(resultado, numeroDos);

// //Prompt (bloquea el código hasta que se acepte el prompt)
// nombrePropio = prompt("ingrese su nombre");
// console.log(nombrePropio);

// //alert, tambien bloquea hasta que se ejecute la acción

// alert(nombrePropio + ", viva el cacho");

// let edad = prompt("Ingresa la edad");
// let credito = prompt("cuantos años quieres el credito");

// // Parsear a INT y FLOAT
// let resultado = parseFloat(edad) + parseFloat(credito);

//-------- //COndicionales
// if (edad > credito){
//     alert("tu edad no puede ser mayor al crédito");
// } else if (edad == credito){
//     alert("Messirve")
// } else{
//     alert("Perfecto")
// }

/* === es estrictamente igual
!=== es estrictamente distinto

== es Igual
=! es distinto

&& And
|| or
! not
-------
*/

let usuarioUno = "German";
let usuarioDos = "Rose";
let usuarioTres = "Yohanna";

let usuarioIgresado = prompt("Ingrese Usuario");

//Si el usuario ingresado es igual a Germán O a Rose O a Yohanna (Or)
// Metodo to Lower Case - Para pasarlo todo a minúsculas
if(usuarioIgresado.toLowerCase == usuarioDos || usuarioTres){
    alert("bienvenido " + usuarioIgresado );
} else {
    alert("Usuario Incorreto");
}

