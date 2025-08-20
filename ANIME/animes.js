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
        background: rgba(255, 215, 0, 0.2);
        padding: 10px 20px;
        border-radius: 25px;
        margin-top: 20px;
        font-weight: bold;
        border: 2px solid rgba(255, 215, 0, 0.5);
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
});

// Función para mostrar información adicional al hacer hover
function mostrarInfoAnime(nombre, descripcion) {
    console.log(`Anime: ${nombre}`);
    console.log(`Descripción: ${descripcion}`);
}
