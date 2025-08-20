// Función para agregar efecto de carga a las tarjetas
document.addEventListener('DOMContentLoaded', function() {
    const animeCards = document.querySelectorAll('.anime-card');
    
    // Agregar efecto de aparición gradual
    animeCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
    
    // Agregar efecto de clic a las tarjetas
    animeCards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
    
    // Agregar mensaje de bienvenida
    const header = document.querySelector('header');
    const mensajeBienvenida = document.createElement('div');
    mensajeBienvenida.className = 'mensaje-bienvenida';
    mensajeBienvenida.innerHTML = '¡Bienvenido a Anime Conti! 🎉';
    mensajeBienvenida.style.cssText = `
        background: rgba(139, 92, 246, 0.2);
        padding: 10px 20px;
        border-radius: 25px;
        margin-top: 20px;
        font-weight: bold;
        border: 2px solid rgba(168, 85, 247, 0.5);
        animation: pulse 2s infinite;
    `;
    
    header.appendChild(mensajeBienvenida);
    
    // Agregar estilos CSS para la animación
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
    `;
    document.head.appendChild(style);
    
    // Agregar efectos de hover a las características
    const caracteristicas = document.querySelectorAll('.caracteristica');
    caracteristicas.forEach(caracteristica => {
        caracteristica.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.background = 'rgba(139, 92, 246, 0.3)';
        });
        
        caracteristica.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.background = 'rgba(139, 92, 246, 0.2)';
        });
    });
    
    // Agregar efecto de carga a la imagen del banner
    const bannerImage = document.querySelector('.banner-image');
    if (bannerImage) {
        bannerImage.style.opacity = '0';
        bannerImage.style.transform = 'scale(0.9)';
        
        setTimeout(() => {
            bannerImage.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            bannerImage.style.opacity = '1';
            bannerImage.style.transform = 'scale(1)';
        }, 500);
    }
});

// HU-03: Función para el botón de episodios general
function irAepisodios() {
    // Simular navegación a la sección de episodios
    const boton = event.target;
    boton.innerHTML = '🎬 Cargando...';
    boton.disabled = true;
    
    setTimeout(() => {
        // Navegar a la página de episodios
        window.location.href = 'anime episodios/episodios.html';
        
        // Restaurar el botón (por si acaso)
        boton.innerHTML = '🎬 Ver Todos los Episodios';
        boton.disabled = false;
    }, 1000);
}

// Función para ir a episodios específicos de cada anime
function irAepisodiosAnime(anime) {
    // Simular carga
    const boton = event.target;
    const textoOriginal = boton.innerHTML;
    boton.innerHTML = '🎬 Cargando...';
    boton.disabled = true;
    
    setTimeout(() => {
        // Navegar a la página de episodios con el anime seleccionado
        const url = `anime episodios/episodios.html?anime=${anime}`;
        window.location.href = url;
        
        // Restaurar el botón (por si acaso)
        boton.innerHTML = textoOriginal;
        boton.disabled = false;
    }, 800);
}

// Función para mostrar información adicional al hacer hover
function mostrarInfoAnime(nombre, descripcion) {
    console.log(`Anime: ${nombre}`);
    console.log(`Descripción: ${descripcion}`);
}

// Función para agregar efectos de scroll
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.header-principal');
    
    if (parallax) {
        const speed = scrolled * 0.5;
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

// Función para agregar contador de visitantes (simulado)
function agregarContador() {
    const footer = document.querySelector('footer');
    const contador = document.createElement('div');
    contador.innerHTML = '👥 Visitantes: 1,234';
    contador.style.cssText = `
        margin-top: 10px;
        font-size: 0.8rem;
        opacity: 0.6;
    `;
    footer.appendChild(contador);
}

// Llamar a la función del contador
setTimeout(agregarContador, 2000);
