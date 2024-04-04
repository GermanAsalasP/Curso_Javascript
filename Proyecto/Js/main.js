//constructor para el usuario
function Usuario (userName, userPassword, edad){
    this.userName = userName;
    this.userPassword = userPassword;
    this.edad = edad;
}

//constructor para las peliculas
function Peliculas(codigo, nombre, año, director, categoria, rolPrincipal){
    this.codigo = codigo;
    this.nombre = nombre;
    this.año = año;
    this.director = director;
    this.categoria = categoria;
    this.rolrPrincipal = rolPrincipal;
}

//Constructor inventario
function Inventario(cantidadPeliculas, cantidadCategorias, cantidadDirectores, cantidadAnos){
    this.cantidadPeliculas = cantidadPeliculas;
    this.cantidadCategorias = cantidadCategorias;
    this.cantidadDirector = cantidadDirectores;
    this.cantidadAños = cantidadAnos;
}
//! Funciones
// Recoger información del usuario
function validarUsuario(datoaValidar){
    while(datoaValidar === "" || datoaValidar == null){
        datoaValidar = datoaValidar.getElementByID("usuario");
        if (datoaValidar === "" || datoaValidar == null){
            alert("Ingresa un nombre de usuario valido"); 
        } else{
            alert("Bienvenido " + datoaValidar)
            return datoaValidar
        }
    }
}

function capturarLogin(usuario, contrasena){
    usuario = getElementByID("usuario");
    contrasena = getElementByID("contrasena");
    while(usuario==="" || usuario == null){
        
    }
}

//Menú
function actualizarInventario(cantInventario, tipoAccion, tipoObjeto){ 
    switch(tipoObjeto){
        case "PELICULA":       
            if(tipoAccion === "INSERTAR"){
                inventario.cantidadPeliculas++;
                alert("INSERTADO")
            }else if(tipoAccion === "ELIMINAR"){
                inventario.cantidadPeliculas--;
                alert("ELIMINADO")
            }            
            break;
        case "CATEGORIA":
            if(tipoAccion === "INSERTAR"){
                inventario.cantidadCategorias++;
                alert("INSERTADO")
            }else if(tipoAccion === "ELIMINAR"){
                inventario.cantidadCategorias--;
                alert("ELIMINADO")
            }            
            break;
        default:
            console.log("No válido")
    }  
}



//Instanciar usuario:
const usuario = new Usuario();

//Instanciar Numero de peliculas
let inventario = new Inventario(50, 120, 25, 100) 

//Llamar a las funciones
usuario.userName = validarUsuario("");
console.log("Hola " + usuario.userName)

//Ejecutar el menu
console.log(inventario)
let accion = prompt("¿Qué deseas hacer? \n • INSERTAR \n • ELIMINAR\n *Escribe todo en mayúsculas" );
let objeto = prompt("¿Qué deseas " + accion + "?\n PELICULA \n CATEGORIA \n *Escribe todo en mayúsculas");
actualizarInventario(inventario, accion, objeto);
console.log(inventario)
console.log(usuario)







