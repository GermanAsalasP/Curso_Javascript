//OBbjeto: Agrupa propiedades, las propiedades son esas variables relacionadas al objeto


//!Objeto literal
// const usuario = {// la recomendacion es usar const para los objetos, igualmente se pueden actualizar
//     nombre:"German",//Variables se separan con , y se asignan con :
//     edad:28,
//     altura:180,
//     nacionalidad:"Colombiano"    
// }

// usuario.edad = 30 //forma de cambiar el valor de una propiedad
// usuario.comidaFavorita = "Pan" // Agregar una nueva propiedad

//!objeto constructor

//declaro el constructor
function Usuario(nombre, edad, altura, nacionalidad){//Siempre inician con mayúscula
    this.nombre = nombre;
    this.edad = altura;
    this.edad = edad;
    this.nacionalidad = nacionalidad;
} 

//para crear un nuevo objeto lo puedo guardar en una variable

const usuario1 = new Usuario("German", 25, 1.60, "Colombiano"); // Nueva instancia del objeto, es como crear un nuevo objeto literal

usuario1.valor = 50;//Asignar una nueva propiedad a la instancia

console.log(usuario1)


//! Metodos 
//Algunos ya son de  Js por defecto EJemplo: .Length/Longitud del string . toLowerCase(todo a minúsculas) .toUpperCase(TOdo a mayúsculas) .indexOf(El lugar donde está el caracter que pongamos ej"o")

//!operador FOr INT
for (const propiedad in usuario1){ //Recorre todo el constructor el número de propiedades que haya
    console.log(propiedad); // representa el nombre de la propiedad
    console.log(propiedad["nombre"])  // representa el nombre de la valor
}

//! Clases // lo mismo que constructores pero con otra etiqueta

