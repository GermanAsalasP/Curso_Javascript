// Función  mostrar  películas
function mostrarPeliculas() {
    let contenedorGeneral = document.querySelector('.contenedorGeneral');
    contenedorGeneral.innerHTML = ''; 

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
// esto es Solo para mostrar como se ve una pelicula
fetch('peliculas.json')
    .then(response => response.json())
    .then(data => {
        let peliculas = localStorage.getItem('peliculas');
        if (!peliculas) {
            peliculas = [];
        } else {
            peliculas = JSON.parse(peliculas);
        }

        // Verificar si cada película del archivo JSON ya está en localStorage
        data.forEach(pelicula => {
            let presente = peliculas.some(p => p.nombre === pelicula.nombre);
            if (!presente) {
                peliculas.push(pelicula);
            }
        }); 

        // Guardar las películas actualizadas en localStorage
        localStorage.setItem('peliculas', JSON.stringify(peliculas));

        // Mostrar las películas
        mostrarPeliculas();
    })
    .catch(error => console.error('Error al cargar las películas:', error));

// Listener formulario
document.querySelector('.formulario').addEventListener('submit', function(event) {
    event.preventDefault(); 

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
        peliculas.splice(index, 1); 
        localStorage.setItem('peliculas', JSON.stringify(peliculas)); 
        mostrarPeliculas(); 

        Swal.fire({
            icon: 'success',
            title: 'Eliminada',
            text: 'Película eliminada correctamente.',
            showConfirmButton: false,
            timer: 1500 
        });
    }
}

// BUSCADOR
function buscarPeliculas(termino) {
    let contenedorResultados = document.getElementById('resultadosBusqueda');
    contenedorResultados.innerHTML = ''; 

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
    event.preventDefault(); 

    let terminoBusqueda = document.getElementById('buscar').value.trim();
    if (terminoBusqueda !== '') {
        buscarPeliculas(terminoBusqueda);
    }
});