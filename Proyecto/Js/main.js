// Función  mostrar  películas
function mostrarPeliculas() {
    let contenedorGeneral = document.querySelector('.contenedorGeneral');
    contenedorGeneral.innerHTML = ''; // Limpiar el contenido anterior

    // Recuperar películas
    let peliculas = localStorage.getItem('peliculas');
    if (peliculas) {
        peliculas = JSON.parse(peliculas);

        // HTML
        peliculas.forEach(function(pelicula, index) {
            let cardHTML = `
                <div class="card mb-3 contenedorPeliculas col-md-5">
                    <div class="row g-0">
                        <div class="col-md-4 contenedorImagen">
                            <img src="${pelicula.imagen}" class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title tituloPelicula">${pelicula.nombre}</h5>
                                <hr>
                                <h6 class="card-text categoria">${pelicula.categoria}</h6>
                                <h7 class="card-text year">${pelicula.year}</h7><br>
                                <h8 class="card-text director">${pelicula.director}</h8>
                                <hr>
                                <p class="card-text ubicacion">${pelicula.ubicacion}</p>
                                <button class="btn btn-danger eliminarPelicula" data-index="${index}">Eliminar</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            contenedorGeneral.innerHTML += cardHTML;
        });
    }
}

//! Sin tiempo para morir precargada
let sinTiempoParaMorir = {
    "nombre": "Sin tiempo para morir",
    "categoria": "Acción",
    "year": "2021",
    "director": "Cary Joji Fukunaga",
    "imagen": "https://m.media-amazon.com/images/S/pv-target-images/5c46170901de1b7644ee440f1787cf0fbadcac369e93d2598d1f43069c471042.jpg",
    "ubicacion": "/misPeliculas/sintiempoparamorir.brip"
};

let peliculas = localStorage.getItem('peliculas');
if (!peliculas) {
    peliculas = [];
} else {
    peliculas = JSON.parse(peliculas);
}

//! Verificaciones convertir en función para todas
let sinTiempoParaMorirPresente = peliculas.some(function(pelicula) {
    return pelicula.nombre === sinTiempoParaMorir.nombre;
});

if (!sinTiempoParaMorirPresente) {
    peliculas.push(sinTiempoParaMorir);
    localStorage.setItem('peliculas', JSON.stringify(peliculas));
}

mostrarPeliculas();

// Listener formulario
document.querySelector('.formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que se envíe el formulario

    let nombre = document.getElementById('Nombre').value;
    let categoria = document.getElementById('Categoria').value;
    let year = document.getElementById('year').value;
    let director = document.getElementById('Director').value;
    let imagen = document.getElementById('Imagen').value;
    let ubicacion = document.getElementById('Ubicacion').value;

    let pelicula = {
        "nombre": nombre,
        "categoria": categoria,
        "year": year,
        "director": director,
        "imagen": imagen,
        "ubicacion": ubicacion
    };

    // Obtener las películas del lS
    let peliculas = localStorage.getItem('peliculas');
    if (peliculas) {
        peliculas = JSON.parse(peliculas);
    } else {
        peliculas = [];
    }

    peliculas.push(pelicula);

    localStorage.setItem('peliculas', JSON.stringify(peliculas));

    mostrarPeliculas();

    // BIBLioteca
    Swal.fire({
        icon: 'success',
        title: 'Pelicula agregada',
        text: `"${nombre}" agregada`,
        showConfirmButton: false,
        timer: 2000 
    });
    
});

// BotoN ELIMINAR
document.querySelector('.contenedorGeneral').addEventListener('click', function(event) {
    if (event.target.classList.contains('eliminarPelicula')) {
        let index = event.target.getAttribute('data-index');
        eliminarPelicula(index);
    }
});

// QUITARLA DEL LOCAL
function eliminarPelicula(index) {
    let peliculas = localStorage.getItem('peliculas');
    if (peliculas) {
        peliculas = JSON.parse(peliculas);
        peliculas.splice(index, 1); // Eliminar la película del array
        localStorage.setItem('peliculas', JSON.stringify(peliculas)); // Guardar el array actualizado en local storage
        mostrarPeliculas(); // Mostrar las películas actualizadas
    }
}

// BUSCADOR
function buscarPeliculas(termino) {
    let contenedorResultados = document.getElementById('resultadosBusqueda');
    contenedorResultados.innerHTML = ''; // Limpiar los resultados anteriores

    let peliculas = localStorage.getItem('peliculas');
    if (!peliculas) {
        return;
    }

    peliculas = JSON.parse(peliculas);
    let resultados = peliculas.filter(function(pelicula) {
        return pelicula.nombre.toLowerCase().includes(termino.toLowerCase());
    });

    resultados.forEach(function(pelicula) {
        let cardHTML = `
            <div class="col-md-4">
                <div class="card mb-3">
                    <img src="${pelicula.imagen}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${pelicula.nombre}</h5>
                        <p class="card-text">${pelicula.ubicacion}</p>
                    </div>
                </div>
            </div>
        `;
        contenedorResultados.innerHTML += cardHTML;
    });
}

// lis  TENER buscador
document.getElementById('formularioBusqueda').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que se envíe el formulario

    let terminoBusqueda = document.getElementById('buscar').value.trim();
    if (terminoBusqueda !== '') {
        buscarPeliculas(terminoBusqueda);
    }
});