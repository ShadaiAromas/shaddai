function mostrarDescripcion(texto) {
    document.getElementById('descripcion-texto').innerText = texto;
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('descripcion').style.display = 'block';
}

window.onclick = function(event) {
    const overlay = document.getElementById('overlay');
    if (event.target === overlay) {
        overlay.style.display = 'none';
        document.getElementById('descripcion').style.display = 'none';
    }
}

function closeAlert() {
    const overlay = document.querySelector('.overlay');
    const alertBox = document.querySelector('.alert-box');

    // Agregar clases para ocultar con transición
    alertBox.classList.add('hidden');
    overlay.classList.add('hidden');

    // Retirar completamente del DOM tras la transición
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 300);
}

// Mostrar la alerta al cargar la página
window.onload = () => {
    const overlay = document.querySelector('.overlay');
    overlay.style.display = 'flex';

    // Asegurarse de que aparezca con transición
    setTimeout(() => {
        overlay.style.opacity = '1';
    }, 10);
};

        
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

function comprarPorWhatsApp(producto, precio) {
    const mensaje = `¡Hola! Estoy interesado en comprar ${producto} por un valor de $${precio}. ¿Me pueden ayudar?`;
    const enlace = `https://wa.me/541131746665?text=${encodeURIComponent(mensaje)}`;
    window.open(enlace, '_blank');
}