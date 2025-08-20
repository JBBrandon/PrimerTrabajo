// Base de datos de episodios para cada anime
const episodiosData = {
    naruto: [
        {
            numero: 1,
            titulo: "¡Aparece Naruto Uzumaki!",
            sinopsis: "Naruto es un joven ninja que busca convertirse en Hokage, el líder de su aldea. En este episodio conocemos su historia y sus sueños.",
            duracion: "24 min"
        },
        {
            numero: 2,
            titulo: "Mi nombre es Konohamaru",
            sinopsis: "Naruto conoce a Konohamaru, el nieto del Tercer Hokage, y juntos causan travesuras en la aldea.",
            duracion: "24 min"
        },
        {
            numero: 3,
            titulo: "Sasuke y Sakura: ¿Amigos o rivales?",
            sinopsis: "Naruto se enfrenta a Sasuke Uchiha, su rival de clase, mientras Sakura observa la pelea entre ambos.",
            duracion: "24 min"
        },
        {
            numero: 4,
            titulo: "¡Paso o no paso! La prueba de supervivencia",
            sinopsis: "Kakashi pone a prueba a Naruto, Sasuke y Sakura con una prueba de supervivencia que determinará si pueden ser ninjas.",
            duracion: "24 min"
        },
        {
            numero: 5,
            titulo: "¡No te rindas! La prueba de Kakashi",
            sinopsis: "La prueba de supervivencia continúa mientras los tres jóvenes ninjas luchan por conseguir las campanas de Kakashi.",
            duracion: "24 min"
        },
        {
            numero: 6,
            titulo: "¡Una determinación inquebrantable!",
            sinopsis: "Naruto demuestra su determinación al proteger a Sakura y enfrentarse valientemente a Kakashi.",
            duracion: "24 min"
        },
        {
            numero: 7,
            titulo: "¡El resultado de la prueba de supervivencia!",
            sinopsis: "Kakashi revela el verdadero propósito de la prueba y decide si los tres jóvenes están listos para ser ninjas.",
            duracion: "24 min"
        },
        {
            numero: 8,
            titulo: "¡El juramento de Naruto!",
            sinopsis: "Naruto hace un juramento importante sobre su futuro como ninja y su determinación de convertirse en Hokage.",
            duracion: "24 min"
        }
    ],
    dragonball: [
        {
            numero: 1,
            titulo: "El secreto de la esfera del dragón",
            sinopsis: "Goku es un joven guerrero con cola de mono que vive solo en las montañas hasta que conoce a Bulma.",
            duracion: "24 min"
        },
        {
            numero: 2,
            titulo: "¡El emperador Pilaf aparece!",
            sinopsis: "Goku y Bulma continúan su búsqueda de las esferas del dragón mientras son perseguidos por el malvado Pilaf.",
            duracion: "24 min"
        },
        {
            numero: 3,
            titulo: "¡La legendaria transformación de Goku!",
            sinopsis: "Goku se transforma en un gigantesco mono dorado durante la noche de luna llena, revelando su verdadera naturaleza Saiyajin.",
            duracion: "24 min"
        },
        {
            numero: 4,
            titulo: "¡El torneo de las artes marciales!",
            sinopsis: "Goku participa en el torneo de artes marciales donde se enfrenta a los mejores luchadores del mundo.",
            duracion: "24 min"
        },
        {
            numero: 5,
            titulo: "¡La batalla final del torneo!",
            sinopsis: "Goku se enfrenta al campeón del torneo en una batalla épica que determinará quién es el más fuerte.",
            duracion: "24 min"
        }
    ],
    onepiece: [
        {
            numero: 1,
            titulo: "¡Soy Luffy! El hombre que se convertirá en Rey de los Piratas",
            sinopsis: "Monkey D. Luffy comienza su aventura para convertirse en el Rey de los Piratas después de comer la fruta del diablo Gomu Gomu.",
            duracion: "24 min"
        },
        {
            numero: 2,
            titulo: "¡Aparece el gran espadachín! El cazador de piratas Roronoa Zoro",
            sinopsis: "Luffy conoce a Zoro, un espadachín que se convierte en su primer compañero de tripulación.",
            duracion: "24 min"
        },
        {
            numero: 3,
            titulo: "¡Morgan contra Luffy! ¿Quién es la hermosa misteriosa?",
            sinopsis: "Luffy y Zoro se enfrentan al capitán Morgan y su ejército de la marina en su primera gran batalla.",
            duracion: "24 min"
        },
        {
            numero: 4,
            titulo: "¡El pasado de Luffy! Aparece Shanks el pelirrojo",
            sinopsis: "Se revela el pasado de Luffy y su conexión con Shanks, el pirata que le dio su sombrero de paja.",
            duracion: "24 min"
        },
        {
            numero: 5,
            titulo: "¡El terror y el misterio! La legendaria isla del tesoro",
            sinopsis: "Luffy y Zoro llegan a la isla donde se rumorea que está enterrado el tesoro del Rey de los Piratas.",
            duracion: "24 min"
        }
    ]
};

// Mapeo de imágenes para cada anime
const imagenesAnime = {
    naruto: '../imagenes/naruto.png',
    dragonball: '../imagenes/dragon.png',
    onepiece: '../imagenes/onepiace.png'
};

// Variables globales
let animeActual = 'naruto';
let paginaActual = 1;
const episodiosPorPagina = 5;

// Función para obtener parámetros de la URL
function obtenerParametroURL(nombre) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(nombre);
}

// Inicialización cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    // Verificar si hay un anime seleccionado en la URL
    const animeSeleccionado = obtenerParametroURL('anime');
    if (animeSeleccionado && episodiosData[animeSeleccionado]) {
        animeActual = animeSeleccionado;
    }
    
    inicializarPagina();
    cargarEpisodios();
    actualizarImagenBanner();
});

// Función de inicialización
function inicializarPagina() {
    // Configurar botones de anime
    const botonesAnime = document.querySelectorAll('.btn-anime');
    botonesAnime.forEach(boton => {
        boton.addEventListener('click', function() {
            cambiarAnime(this.dataset.anime);
        });
    });

    // Configurar botones de navegación
    document.getElementById('btn-anterior').addEventListener('click', paginaAnterior);
    document.getElementById('btn-siguiente').addEventListener('click', paginaSiguiente);
    
    // Seleccionar el anime actual en los botones
    seleccionarAnimeActual();
}

// Función para seleccionar el anime actual en los botones
function seleccionarAnimeActual() {
    document.querySelectorAll('.btn-anime').forEach(boton => {
        boton.classList.remove('active');
        if (boton.dataset.anime === animeActual) {
            boton.classList.add('active');
        }
    });
}

// Función para cambiar de anime
function cambiarAnime(nuevoAnime) {
    animeActual = nuevoAnime;
    paginaActual = 1;
    
    // Actualizar botones activos
    document.querySelectorAll('.btn-anime').forEach(boton => {
        boton.classList.remove('active');
        if (boton.dataset.anime === nuevoAnime) {
            boton.classList.add('active');
        }
    });
    
    // Actualizar título
    const tituloAnime = document.getElementById('titulo-anime');
    const nombresAnime = {
        'naruto': 'Naruto',
        'dragonball': 'Dragon Ball',
        'onepiece': 'One Piece'
    };
    tituloAnime.textContent = `Episodios de ${nombresAnime[nuevoAnime]}`;
    
    // Actualizar imagen del banner
    actualizarImagenBanner();
    
    // Recargar episodios
    cargarEpisodios();
}

// Función para actualizar la imagen del banner
function actualizarImagenBanner() {
    const bannerImage = document.querySelector('.banner-image');
    if (bannerImage && imagenesAnime[animeActual]) {
        bannerImage.src = imagenesAnime[animeActual];
        bannerImage.alt = `Episodios de ${animeActual}`;
    }
}

// Función para cargar episodios
function cargarEpisodios() {
    const episodios = episodiosData[animeActual];
    const totalEpisodios = episodios.length;
    const totalPaginas = Math.ceil(totalEpisodios / episodiosPorPagina);
    
    // Calcular episodios a mostrar
    const inicio = (paginaActual - 1) * episodiosPorPagina;
    const fin = Math.min(inicio + episodiosPorPagina, totalEpisodios);
    const episodiosAMostrar = episodios.slice(inicio, fin);
    
    // Renderizar episodios
    renderizarEpisodios(episodiosAMostrar);
    
    // Actualizar navegación
    actualizarNavegacion(paginaActual, totalPaginas);
    
    // Agregar efectos visuales después de un breve delay
    setTimeout(agregarEfectosVisuales, 100);
}

// Función para renderizar episodios
function renderizarEpisodios(episodios) {
    const contenedor = document.getElementById('lista-episodios');
    contenedor.innerHTML = '';
    
    episodios.forEach(episodio => {
        const episodioElement = crearElementoEpisodio(episodio);
        contenedor.appendChild(episodioElement);
    });
}

// Función para crear elemento de episodio
function crearElementoEpisodio(episodio) {
    const div = document.createElement('div');
    div.className = 'episodio-item';
    div.innerHTML = `
        <div class="episodio-header">
            <span class="episodio-numero">Episodio ${episodio.numero}</span>
            <span class="episodio-duracion">${episodio.duracion}</span>
        </div>
        <h3 class="episodio-titulo">${episodio.titulo}</h3>
        <p class="episodio-sinopsis">${episodio.sinopsis}</p>
    `;
    
    // Agregar evento de clic
    div.addEventListener('click', () => {
        reproducirEpisodio(episodio);
    });
    
    return div;
}

// Función para reproducir episodio (simulada)
function reproducirEpisodio(episodio) {
    alert(`🎬 Reproduciendo: ${episodio.titulo}\n\n${episodio.sinopsis}\n\n¡Funcionalidad de reproducción próximamente!`);
}

// Función para ir a página anterior
function paginaAnterior() {
    if (paginaActual > 1) {
        paginaActual--;
        cargarEpisodios();
    }
}

// Función para ir a página siguiente
function paginaSiguiente() {
    const totalEpisodios = episodiosData[animeActual].length;
    const totalPaginas = Math.ceil(totalEpisodios / episodiosPorPagina);
    
    if (paginaActual < totalPaginas) {
        paginaActual++;
        cargarEpisodios();
    }
}

// Función para actualizar navegación
function actualizarNavegacion(pagina, totalPaginas) {
    const btnAnterior = document.getElementById('btn-anterior');
    const btnSiguiente = document.getElementById('btn-siguiente');
    const paginaActualSpan = document.getElementById('pagina-actual');
    const totalPaginasSpan = document.getElementById('total-paginas');
    
    // Actualizar números de página
    paginaActualSpan.textContent = pagina;
    totalPaginasSpan.textContent = totalPaginas;
    
    // Habilitar/deshabilitar botones
    btnAnterior.disabled = (pagina <= 1);
    btnSiguiente.disabled = (pagina >= totalPaginas);
}

// Función para agregar efectos visuales
function agregarEfectosVisuales() {
    // Efecto de aparición para episodios
    const episodios = document.querySelectorAll('.episodio-item');
    episodios.forEach((episodio, index) => {
        episodio.style.opacity = '0';
        episodio.style.transform = 'translateX(-20px)';
        
        setTimeout(() => {
            episodio.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            episodio.style.opacity = '1';
            episodio.style.transform = 'translateX(0)';
        }, index * 100);
    });
}
