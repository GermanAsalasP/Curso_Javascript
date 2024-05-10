//constructor para el usuario
function Usuario (userName, userPassword, edad){
    this.userName = userName;
    this.userPassword = userPassword;
    this.edad = edad;
}

//constructor para las peliculas
function Peliculas(nombre, year, director, categoria, imagen, ubicacion){
    this.nombre = nombre;
    this.year = year;
    this.director = director;
    this.categoria = categoria;
    this.imagen = imagen;
    this.ubicacion = ubicacion;
}

//Array asdasd
const peliculas =[
    {
        nombre:"XD",
        year:"2024",
        director:"DenisVillanueve",
        categoria:"SCI-FI",
        imagen: "https://archivos-cms.cinecolombia.com/images/_aliases/poster_card/7/6/3/2/42367-9-esl-CO/d169098fab9a-warner_dune2_cinecol_480x670.jpg",
        ubicacion:"C:/peliculas/dune2024Brip.mp4"
    }
];

//Constructor inventario
/*function Inventario(cantidadPeliculas, cantidadCategorias, cantidadDirectores, cantidadAnos){
    this.cantidadPeliculas = cantidadPeliculas;
    this.cantidadCategorias = cantidadCategorias;
    this.cantidadDirector = cantidadDirectores;
    this.cantidadAños = cantidadAnos;
}*/
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



function vistaPrevia(){
    let contenedorGeneral = document.querySelector(".contenedorGeneral");
contenedorGeneral.innerHTML = `<div class="card mb-3 contenedorPeliculas" style="max-width: 500px;">
        <div class="row g-0">
        <div class="col-md-4 contenedorImagen">
            <img src="${peliculas[0].imagen}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
            <h5 class="card-title tituloPelicula">${peliculas[0].nombre}</h5>
            <hr>
            <h6 class="card-text categoria">${peliculas[0].categoria}</h6>
            <h7 class="card-text year">${peliculas[0].year}</h7><br>
            <h8 class="card-text director">${peliculas[0].director}</h8>
            <hr>
            <p class="card-text ubicacion">${peliculas[0].ubicacion}</p>
            <p>Eliminar</p>
            </div>
        </div>
        </div>
        </div>`
}

function recorrerPeliculas(){
    let contenedorGeneral = document.querySelector(".contenedorGeneral");    
    contenedorGeneral.innerHTML = ''; 
    peliculas.forEach(x => {
                   
            contenedorGeneral.innerHTML += `<div class="card mb-3 contenedorPeliculas col-md-5" >
        <div class="row g-0">
        <div class="col-md-4 contenedorImagen">
            <img src="${x.imagen}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
            <h5 class="card-title tituloPelicula">${x.nombre}</h5>
            <hr>
            <h6 class="card-text categoria">${x.categoria}</h6>
            <h7 class="card-text year">${x.year}</h7><br>
            <h8 class="card-text director">${x.director}</h8>
            <hr>
            <p class="card-text ubicacion">${x.ubicacion}</p>
            <p>Eliminar</p>
            </div>
        </div>
        </div>
        </div>`        
             
})
}
//obtener datos Formulario
function guardarPelicula(identificadorBoton){
    document.getElementById(identificadorBoton).addEventListener("click", function(event) {
        // boton
        event.preventDefault();    
        
        let nombre = document.getElementById("Nombre").value;
        let categoria = document.getElementById("Categoria").value;
        let year = document.getElementById("year").value;
        let director = document.getElementById("Director").value;
        let imagen = document.getElementById("Imagen").value;
        let ubicacion = document.getElementById("Ubicacion").value;
    
        let nuevaPelicula = new Peliculas (nombre, year, director, categoria,imagen, ubicacion);
        peliculas.push(nuevaPelicula); 
        recorrerPeliculas();
    });
}

function buscarPelicula(){
    let contenedorGeneral = document.querySelector(".contenedorGeneral");
    let peliculaBuscada = [];
    let busqueda = document.getElementById("buscador");
    peliculas.forEach(x => {
        if (!peliculaBuscada.includes(x.nombre)){
            
        }
    })
}

//!Ejecutar
//Previsualizacion
vistaPrevia();

guardarPelicula("Enviar");



//Codigo anterior
//Instanciar usuario:
//const usuario = new Usuario();

//Instanciar Numero de peliculas
//let inventario = new Inventario(50, 120, 25, 100) 

//Llamar a las funciones
// usuario.userName = validarUsuario("");
// console.log("Hola " + usuario.userName)

//Ejecutar el menu
/*console.log(inventario)
let accion = prompt("¿Qué deseas hacer? \n • INSERTAR \n • ELIMINAR\n *Escribe todo en mayúsculas" );
let objeto = prompt("¿Qué deseas " + accion + "?\n PELICULA \n CATEGORIA \n *Escribe todo en mayúsculas");
actualizarInventario(inventario, accion, objeto);
console.log(inventario);
console.log(usuario);*/












